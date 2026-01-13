# Changelog Automation Setup

This document explains the automated changelog system implemented for the concrete5-snippets project.

## System Overview

The project now uses a **fully automated changelog generation system** that ensures consistency and reduces manual maintenance burden.

### Components

1. **Conventional Commits** (`commitlint`)
   - Validates commit message format
   - Enforced via Git hooks before commits are allowed

2. **Standard Version** (`standard-version`)
   - Generates changelog automatically from commits
   - Bumps version numbers
   - Creates git tags

3. **Version Configuration** (`.versionrc.json`)
   - Defines how commits map to changelog sections
   - Configures release URL generation

4. **Commit Rules** (`.commitlintrc.json`)
   - Validates commit structure
   - Prevents invalid messages from being committed

## How It Works

### Developer Workflow

```
Developer writes feature → Commit with conventional message
                           ↓
                    Git hook validates message
                           ↓
                    If valid, commit accepted
                    If invalid, rejected with error
```

### Release Workflow

```
$ npm run release
    ↓
Run tests & type checking
    ↓
Analyze commits since last tag
    ↓
Determine version bump (major/minor/patch)
    ↓
Generate CHANGELOG.md from commits
    ↓
Create git tag
    ↓
Commit changes
```

## Commit Message Examples

### Adding a Feature
```
feat(snippets): add c5getlink snippet

Add a new snippet for retrieving concrete5 links with proper URL generation.

Closes #90
```

**Result in Changelog:**
```
✨ Features
- add c5getlink snippet (#90)
```

### Fixing a Bug
```
fix(assetregister): split array keys for readability

Separate CSS and JavaScript keys onto different lines.

Fixes #30
```

**Result in Changelog:**
```
🐛 Bug Fixes
- split array keys for readability (#30)
```

### Infrastructure Changes
```
ci: update github actions to latest versions
```

**Result in Changelog:**
```
🤖 CI/CD
- update github actions to latest versions
```

## What Commits Become Changelog Entries

✅ **Included:**
- `feat:` → ✨ Features
- `fix:` → 🐛 Bug Fixes
- `perf:` → ⚡ Performance
- `docs:` → 📚 Documentation
- `style:` → 💅 Code Style
- `refactor:` → ♻️ Refactoring
- `test:` → ✅ Tests
- `ci:` → 🤖 CI/CD
- `dev:` → 🛠️ Development
- `build:` → 📦 Build

❌ **Hidden from Changelog:**
- `chore:` (internal changes)
- Merge commits

## Benefits

| Aspect | Before | After |
|--------|--------|-------|
| **Consistency** | Manual, prone to errors | Automatic, always consistent |
| **Time** | Hours rewriting changelog | Seconds, automatic |
| **Clarity** | Ad-hoc formatting | Standard format with links |
| **Traceability** | Manual linking | Auto-linked commits & PRs |
| **Commit Quality** | Informal messages | Enforced structured messages |
| **Release Process** | Manual tagging & version bumps | One command does it all |

## For Contributors

**Just follow the commit message format!**

```
<type>(<scope>): <subject>

Example:
feat(snippets): add getpagewrapper snippet

This snippet provides convenient access to the page wrapper
for use in concrete5 theme templates.

Closes #123
```

If you make a mistake, Git will reject it:
```
$ git commit -m "Added new stuff"
✖ type must be lowercase
✖ subject must not start with uppercase

Fix your message and try again!
```

## For Maintainers

Release a new version:

```bash
npm run release
```

That's it! The tool will:
1. ✅ Run tests and type checking
2. 🔍 Analyze commits since last release
3. 📈 Determine version bump automatically
4. 📝 Generate CHANGELOG.md
5. 🏷️ Create git tag with version
6. 💾 Commit everything

## Files Added/Modified

### New Files
- `.commitlintrc.json` — Commit validation rules
- `.versionrc.json` — Changelog generation configuration
- `.husky/commit-msg` — Git hook for commit validation
- `CONTRIBUTING.md` — Contributor guidelines

### Modified Files
- `package.json` — Added commitlint dependencies, updated release script

## Migration Notes

The current CHANGELOG.md was manually written for this session. Future versions will be generated automatically from commits. The format will remain similar but section grouping will depend on commit types.

## References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint Documentation](https://commitlint.js.org/)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
- [Keep a Changelog](https://keepachangelog.com/)

## Questions?

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed commit message guidelines and examples.
