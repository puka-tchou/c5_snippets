# Contributing to concrete5-snippets

Thank you for your interest in contributing! This project uses **Conventional Commits** to maintain a clean, automated changelog and streamlined release process.

## Quick Start

**New to the format?** See [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md) for a one-page quick reference with examples.

**Need detailed explanations?** Keep reading below.

## Commit Message Convention

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) format. Git will **automatically reject invalid commit messages** with a helpful error.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

Must be one of:

- **feat**: A new feature or enhancement
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code formatting (no logic changes)
- **refactor**: Code restructuring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **ci**: CI/CD configuration changes
- **dev**: Development tooling or setup
- **build**: Build system or dependencies
- **chore**: Maintenance (hidden from changelog)

### Scope (Optional)

Specifies which part is affected:

```
feat(snippets): add c5getlink
fix(assetregister): correct indentation
ci(github-actions): update node version
```

### Subject

- Use imperative mood: "add" not "added"
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters

### Body (Optional)

- Explain *why*, not *what*
- Use imperative mood
- Reference issues with `#123`

### Footer (Optional)

- Reference issues: `Closes #123`, `Fixes #456`, `Relates to #789`

## Examples

### Feature with Issue Reference
```
feat(snippets): add c5getlink snippet for url generation

Add convenience snippet for generating concrete5 links,
making it easier to create proper navigation URLs.

Closes #90
```

### Bug Fix
```
fix(assetregister): split array keys for readability

Separate CSS and JavaScript keys onto different lines
to improve code formatting and maintenance.

Fixes #30
```

### Infrastructure Change
```
ci: update github actions to node 25
```

## Making Commits

### Valid Commits ✅

```bash
git commit -m "feat(snippets): add new snippet"
git commit -m "fix(ci): correct workflow path"
git commit -m "docs: update readme examples"
git commit -m "feat: improve performance significantly"
```

### Invalid Commits ❌ (Will Be Rejected)

```bash
git commit -m "Added new feature"              # No type, capitalized
git commit -m "FEAT: add snippet."             # Type uppercase, ends with period
git commit -m "new: add thing"                 # Invalid type
git commit -m "updated files"                  # Too vague
```

When Git rejects your commit, you'll see a clear error message. Just fix the message and try again:

```bash
# Fix and retry
git commit -m "feat(snippets): add new snippet"
```

## Pull Requests

When submitting a PR:

1. Use conventional commit messages in each commit
2. Keep commits focused and atomic when possible
3. Reference related issues: `Closes #123`
4. Your PR title can follow the convention too

Example PR with multiple commits:

```
feat(snippets): add URL generation snippets (#90)

- feat(snippets): add c5getlink snippet
- feat(snippets): add c5geturl snippet  
- feat(snippets): add c5getlogoutlink snippet
```

## Changelog Generation

This project generates changelogs automatically from commits using [standard-version](https://github.com/conventional-changelog/standard-version).

### For Maintainers

When releasing:

```bash
npm run release
```

This will:
1. ✅ Run tests and type checking
2. 📈 Determine version bump from commits
3. 📝 Auto-generate CHANGELOG.md
4. 🏷️ Create git tag with version

**Do not manually edit changelog version sections** — the tool generates them from commits.

### Commit Types in Changelog

These appear in the changelog:
- `feat` → ✨ Features
- `fix` → 🐛 Bug Fixes
- `perf` → ⚡ Performance
- `docs` → 📚 Documentation
- `style` → 💅 Code Style
- `refactor` → ♻️ Refactoring
- `test` → ✅ Tests
- `ci` → 🤖 CI/CD
- `dev` → 🛠️ Development
- `build` → 📦 Build

Hidden: `chore` and merge commits

## Resources

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md) — Quick reference
- [CHANGELOG_AUTOMATION.md](./CHANGELOG_AUTOMATION.md) — Technical details

## Questions?

- **How do I write commits?** → See [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md)
- **Why was my commit rejected?** → Check the error message, then see examples above
- **How does this work?** → See [CHANGELOG_AUTOMATION.md](./CHANGELOG_AUTOMATION.md)

Thank you for helping keep our codebase clean and well-documented! 🎉
