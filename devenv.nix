{
  pkgs,
  inputs,
  ...
}:
let
  pkgs-playwright = import inputs.nixpkgs-playwright { system = pkgs.stdenv.system; };
  browsers =
    (builtins.fromJSON (builtins.readFile "${pkgs-playwright.playwright-driver}/browsers.json"))
    .browsers;
  chromium-rev = (builtins.head (builtins.filter (x: x.name == "chromium") browsers)).revision;
in
{
  env = {
    PLAYWRIGHT_BROWSERS_PATH = "${pkgs-playwright.playwright.browsers}";
    PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = true;
    PLAYWRIGHT_NODEJS_PATH = "${pkgs.nodejs_24}/bin/node";
    PLAYWRIGHT_LAUNCH_OPTIONS_EXECUTABLE_PATH = "${pkgs-playwright.playwright.browsers}/chromium-${chromium-rev}/chrome-linux/chrome";
  };

  # https://devenv.sh/basics/
  dotenv.enable = true;

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_26;
  };

  # https://devenv.sh/packages/
  # pkgs.corepack (standalone, not languages.javascript.corepack) since
  # nodejs_26 no longer bundles a corepack binary for that module to wrap.
  # It shims pnpm/yarn per the "packageManager" field in package.json, so
  # that field stays the single source of truth for the pnpm version.
  packages = with pkgs; [
    git
    lefthook
    corepack
  ];

  scripts.check-playwright.exec = ''
    playwrightNpmVersion="$(node -p "require('./package.json').devDependencies['@playwright/test']" | tr -d '^~')"
    echo "❄️ Playwright nix version: ${pkgs-playwright.playwright.version}"
    echo "📦 Playwright npm version: $playwrightNpmVersion"

    if [ "${pkgs-playwright.playwright.version}" != "$playwrightNpmVersion" ]; then
        echo "❌ Playwright versions in nix (in devenv.yaml) and npm (in package.json) are not the same! Please adapt the configuration."
    else
        echo "✅ Playwright versions in nix and npm are the same"
    fi

    echo
    env | grep ^PLAYWRIGHT
  '';

  enterShell = ''
    check-playwright

    if [ ! -f .env ]; then
        echo "⚠️ .env file not found. Creating a default one..."
        cp .env.example .env
    fi

    echo "📦 Installing Git Hooks"
    lefthook install
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    pnpm test
  '';
}
