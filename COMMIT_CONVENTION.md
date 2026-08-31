# Quick Reference: Commit Messages

## Commit Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types & Emojis (for changelog)

| Type | Emoji | Section | Use When |
|------|-------|---------|----------|
| `feat` | ✨ | Features | Adding new functionality |
| `fix` | 🐛 | Bug Fixes | Fixing bugs |
| `perf` | ⚡ | Performance | Improving performance |
| `docs` | 📚 | Documentation | Writing/updating docs |
| `style` | 💅 | Code Style | Formatting, no logic change |
| `refactor` | ♻️ | Refactoring | Restructuring code |
| `test` | ✅ | Tests | Adding/updating tests |
| `ci` | 🤖 | CI/CD | GitHub Actions, CI config |
| `dev` | 🛠️ | Development | Dev tools, build setup |
| `build` | 📦 | Build | Dependencies, build tools |
| `chore` | - | _(hidden)_ | Maintenance tasks |

## Examples

### Adding a Feature
```
feat(snippets): add c5getlink snippet for URL generation

Adds a convenience snippet that generates concrete5 links
using the c5 helper.

Closes #90
```

### Fixing a Bug
```
fix(assetregister): correct indentation and array formatting

Split array keys onto separate lines for better readability.

Fixes #30
```

### Development Work
```
ci: update github actions to node 25

Compatibility with latest Node.js LTS version.
```

### Code Quality
```
style(snippets): format PHP snippet files with prettier

No logic changes, formatting only.
```

## Rules

✅ **DO:**
- Use lowercase type and scope
- Use imperative mood ("add" not "added")
- Be specific and descriptive
- Reference issues: `Closes #123`, `Fixes #456`
- Keep subject under 50 characters

❌ **DON'T:**
- Capitalize subject: ❌ `Add new feature` → ✅ `add new feature`
- End with period: ❌ `add snippet.` → ✅ `add snippet`
- Use vague messages: ❌ `fix stuff` → ✅ `fix assetregister indentation`
- Mix types: ❌ `feat/fix: ...` → ✅ `feat: ... or fix: ...`

## Common Scopes

- `snippets` — Changes to snippet files
- `ci` — GitHub Actions/CI workflows
- `deps` — Dependencies updates
- `docs` — Documentation changes
- `extension` — Extension configuration
- `config` — Project configuration

## Tips

- **One logical change per commit** — Makes it easier to revert if needed
- **Use scope** — Helps identify what changed at a glance
- **Reference issues** — Makes changelog entries traceable
- **Body is optional** — Use it for complex changes, skip for simple ones

## Invalid Examples ❌

```
git commit -m "updated stuff"          # Too vague, no type
git commit -m "Fix bug"               # Type not lowercase
git commit -m "feat: Add new feature." # Subject ends with period
git commit -m "Feature added"         # No type, wrong mood
```

## Valid Examples ✅

```
git commit -m "feat: add new snippet"
git commit -m "fix(ci): update workflow version"
git commit -m "docs: update README with new examples"
git commit -m "style: format JSON files with prettier"
git commit -m "ci: pin vscode types to 1.62.0"
```

## Release Command

When ready to release:
```bash
npm run release
```

That's it! The script handles:
- ✅ Testing
- 📈 Version bumping
- 📝 Changelog generation
- 🏷️ Git tagging

---

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines and [Conventional Commits](https://www.conventionalcommits.org/) for the full spec.
