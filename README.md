# concrete5-snippets

![Concrete5](https://img.shields.io/badge/concrete5-8.5.7-informational?style=flat-square)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/c5snippets.concrete5-snippets?style=flat-square)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/c5snippets.concrete5-snippets?style=flat-square)
![Depfu](https://img.shields.io/depfu/puka-tchou/c5_snippets?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/puka-tchou/c5_snippets?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/puka-tchou/c5_snippets/Node.js%20CI?style=flat-square)

_Finally, Concrete5 snippets for VSCode!_

![a screenshot of the snippets](images/demo.png)

This extension adds a number of concrete5 snippets to VSCode. The snippets all start with **c5** and work as soon as VSCode detects that the language used is HTML or PHP.

It is also possible to generate single page and page type controllers by right clicking on the folders `public/application/controllers/single_page` and `public/application/controllers/page_types`.

## Snippets

| lang         | identifier             | description                           |
| ------------ | ---------------------- | ------------------------------------- |
| `html` `php` | `c5area`               | Create a new area                     |
| `html` `php` | `c5globalarea`         | Create a new global area              |
| `html` `php` | `c5translate`          | Translate a string of text            |
| `html` `php` | `c5getattribute`       | Get a page attribute                  |
| `html` `php` | `c5getsiteattribute`   | Get a site attribute                  |
| `html` `php` | `c5getsiteid`          | Get the current site ID               |
| `html` `php` | `c5getsitename`        | Get the current site name             |
| `php`        | `c5helper`             | Use a helper                          |
| `php`        | `c5date`               | Format a date                         |
| `php`        | `c5assetregister`      | Register a new CSS or JS asset        |
| `php`        | `c5assetregistergroup` | Register a new CSS or JS asset group  |
| `php`        | `c5assetrequire`       | Require a new CSS or JS asset         |
| `php`        | `c5assetrequiregroup`  | Require a new CSS or JS asset group   |
| `php`        | `c5getlink`            | Get the link to a page as a string    |
| `php`        | `c5getlogoutlink`      | Get the logout link as an Object      |
| `html`       | `c5getlocale`          | Get the current locale                |
| `html`       | `c5include`            | Include a file                        |
| `html`       | `c5theme`              | Get the theme path                    |
| `html`       | `c5getpagewrapper`     | Get the page wrapper class            |
| `html`       | `c5geturl`             | Get the link to a page given its path |
