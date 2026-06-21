export interface PersonalProject {
  name: string;
  url?: string;
  technologies?: string[];
  highlights: string[];
}

export const projects: PersonalProject[] = [
  {
    name: 'Go Healthcheck',
    url: 'https://github.com/brpaz/go-healthcheck',
    technologies: ['Golang'],
    highlights: ['Golang library to simplify healthcheck creation following the RFC Healthcheck specification.'],
  },
  {
    name: 'go-test-html-report',
    url: 'https://github.com/brpaz/go-test-html-report',
    technologies: ['Golang'],
    highlights: ['Golang library for generating HTML reports from go test results.'],
  },
  {
    name: 'lib-go',
    url: 'https://github.com/brpaz/lib-go',
    technologies: ['Golang'],
    highlights: ['A library of reusable utilities and helpers for Go projects.'],
  },
  {
    name: 'GitHub Notifications Cleaner',
    url: 'https://github.com/brpaz/github-notifications-cleaner',
    technologies: ['Golang'],
    highlights: [
      'Open Source CLI tool in Golang that cleans old unread GitHub notifications according to specified rules.',
    ],
  },
  {
    name: 'Personal HomeLab',
    technologies: ['Proxmox', 'Kubernetes', 'Ansible', 'K3s', 'Flux'],
    highlights: [
      'Built a personal HomeLab using Proxmox, K3s, and Flux to self-host services like Immich and Nextcloud.',
    ],
  },
];
