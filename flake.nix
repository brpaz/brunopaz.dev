{
  description = "Dev envrionment";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            playwright-driver.browsers
          ];

          packages = with pkgs; [
           nodejs_20
           pkgs.pnpm
           pkgs.playwright
          ];

          shellHook = ''
          	export PLAYWRIGHT_BROWSERS_PATH=${pkgs.playwright-driver.browsers}
            export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true
            export PS1='\[\e[31m\][nix-shell]\[\e[0m\] \[\e[32m\]\w\[\e[0m\] \[\e[34m\]>\[\e[0m\] '

            pnpm install --frozen-lockfile
          '';
        };
      }
    );
}
