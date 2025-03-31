# Contributing to SHA Hash Generator

Thank you for your interest in contributing to the SHA Hash Generator project! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project.

## How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes following conventional commits (see below)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Workflow

- Make sure all tests pass before submitting a PR
- Update documentation if necessary
- Follow the code style and formatting guidelines

## Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/) to make the commit history more readable and to automate version management and release notes.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory, while the **scope**, **body** and **footer** are optional.

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Examples

```
feat(web-app): add copy to clipboard functionality

Added a button to copy generated hashes to the clipboard with feedback notification.

Closes #123
```

```
fix(web-app): prevent hash generation for empty input

Empty strings were causing the app to generate hashes for empty content, leading to
unexpected results. Now the app disables hash generation for empty input.

Fixes #456
```

## Pull Request Process

1. Ensure your code follows the style guidelines of this project
2. Update the README.md or other documentation with details of changes if appropriate
3. Your pull request will be merged once it's reviewed and approved by a maintainer

## Questions?

If you have any questions or need help, please open an issue or contact the project maintainers.

Thank you for contributing to SHA Hash Generator!
