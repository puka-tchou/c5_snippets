# 📝 Changelog

All notable changes to the concrete5-helper VS Code extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## Unreleased

### ✨ Added

- 🤖 Automated changelog generation with commitlint and standard-version
- 📋 Commit message validation enforced by Git hooks
- 📚 Comprehensive contributor guidelines (CONTRIBUTING.md)
- 🎯 Quick reference guide for commit conventions (COMMIT_CONVENTION.md)
- 📖 Technical documentation for automation system (CHANGELOG_AUTOMATION.md)

---

## [0.0.5](https://github.com/puka-tchou/c5_snippets/releases/tag/v0.0.5) — 2026-01-02

### 🔄 Changed

**Build & Tooling**
- 🏗️ Switched build system from TypeScript compiler to esbuild — [e8f957f](https://github.com/puka-tchou/c5_snippets/commit/e8f957f)
- 🔧 Build tooling with standard-version for automated changelog generation

**Development Environment**
- 🎨 Updated VS Code recommended extensions (added Prettier)
- 🛠️ Code quality tools: Prettier and ESLint integration

**CI & Infrastructure**
- 🤖 Updated GitHub Actions CI to use Node.js 25 and latest action versions
- 🔍 Updated CodeQL analysis to v4 — [0bed5d4](https://github.com/puka-tchou/c5_snippets/commit/0bed5d4)

**Dependencies**
- 📦 Updated all npm dependencies

---

## [0.0.4](https://github.com/puka-tchou/c5_snippets/releases/tag/v0.0.4) — 2022-02-25

### ✨ Added

**Snippet Features**
- 🔗 `c5getlink`, `c5getlogoutlink`, and `c5geturl` snippets for URL and link generation — [#90](https://github.com/puka-tchou/c5_snippets/pull/90)

**Development Tools**
- 🔧 Build tooling with standard-version for automated changelog generation — [7f0350c](https://github.com/puka-tchou/c5_snippets/commit/7f0350c)
- ✅ CI checks to verify extension compilation — [#89](https://github.com/puka-tchou/c5_snippets/pull/89)

---

## [0.0.3](https://github.com/puka-tchou/c5_snippets/releases/tag/v0.0.3) — 2021-12-16

### 🗑️ Removed

- Controller creation functionality — [#81](https://github.com/puka-tchou/c5_snippets/pull/81)

---

## [0.0.2](https://github.com/puka-tchou/c5_snippets/releases/tag/v0.0.2) — 2021-08-02

### ✨ Added

- **📄 Core Snippets**
  - `c5include` and `c5theme` snippets for template inclusion — [77259b2](https://github.com/puka-tchou/c5_snippets/commit/77259b2)
  - `c5assetregister` snippet for asset registration — [ee8581b](https://github.com/puka-tchou/c5_snippets/commit/ee8581b)
  - `c5assetregistergroup`, `c5assetrequire`, and `c5assetrequiregroup` snippets for asset management — [bc00df8](https://github.com/puka-tchou/c5_snippets/commit/bc00df8)

- **⚙️ Helper Snippets**
  - `getsiteid` and `getsitename` snippets for site information
  - `getsiteattribute` snippet for retrieving site attributes
  - `getpagewrapper` snippet for page wrapper access

- **🎨 Project Setup**
  - 🎯 Extension icon and publisher configuration — [5eb9106](https://github.com/puka-tchou/c5_snippets/commit/5eb9106)
  - 🛠️ Code quality tools: Prettier and ESLint integration — [8f26405](https://github.com/puka-tchou/c5_snippets/commit/8f26405)

### 🐛 Fixed

**Code Quality & Naming**
- ✅ Corrected snippet descriptions and identifiers — [95b692a](https://github.com/puka-tchou/c5_snippets/commit/95b692a)
- 🏷️ Changed `c5areaglobal` to `globalarea` for proper naming
- 🔤 Fixed `c5translation` snippet renamed to `c5translate`

**Implementation & Configuration**
- 🔧 Fixed `c5assetregister` snippet implementation — [#17](https://github.com/puka-tchou/c5_snippets/issues/17)
- ⚙️ Updated asset registration options

**Code Formatting & Structure**
- 📐 Improved indentation in `assetregister` and helper snippets — [#58](https://github.com/puka-tchou/c5_snippets/pull/58)
- 📐 Updated indentation in `c5assetregister` and `c5assetregistergroup`
- ✂️ Split array keys in `assetregister` for better readability — [#30](https://github.com/puka-tchou/c5_snippets/issues/30)
- 📝 Improved variable naming in helper snippets
- ➕ Added missing semicolons and consistent use of `$0` placeholders in PHP snippets
