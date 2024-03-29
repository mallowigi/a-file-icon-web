# Atom Material Icons Plugin for Web

<h1 align="center">
  <br>
    <img src="https://raw.githubusercontent.com/mallowigi/a-file-icon-idea/master/src/main/resources/META-INF/pluginIcon.svg?sanitize=true" alt="logo" width="200">
  <br><br>
  Atom Material File Icons for Web
  <br>
  <br>
</h1>


This plugin is a port of the [Atom File Icons](https://github.com/file-icons/atom) for Google Chrome and Mozilla
Firefox.

It replaces the icons and folder icons with better suited icons, related to the file type, framework or language.

Works on the following websites:

- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)
- [Gitee](https://gitee.com)
- [Azure](https://dev.azure.com)

## Chrome Extension

<https://chrome.google.com/webstore/detail/atom-file-icons-web/pljfkbaipkidhmaljaaakibigbcmmpnc>

## Firefox Extension (Not updated)

<https://addons.mozilla.org/en-US/firefox/addon/atom-file-icons-web/>

## Features

- Replaces **file icons** with their relevant logo icons
    - According to their extension (Java, PHP, Ruby...)
    - According to the framework (Android, NPM, RSpec...)
    - According to the program used with (Babel, Docker, CircleCI...)
- Replaces **directories**:
    - With a common pattern: src, main, app, img, docs...
    - With a specific pattern: node_modules, .vscode, .git...
- Settings:
    - Icon size: Change the icon size on the fly
    - Monochrome: Use monochrome icons

## File Icons

![File Icons](https://raw.githubusercontent.com/mallowigi/iconGenerator/master/assets/files.png)

## Folder Icons

![Folder Icons](https://raw.githubusercontent.com/mallowigi/iconGenerator/master/assets/folders.png)

## Build

```
git clone https://github.com/mallowigi/iconGenerator.git
npm install && cd iconGenerator && npm install
npm run build
```

## Scripts

- `build`: Runs `clean`, `convert`, `public` and build the source files
- `dev`: Runs `build` with watch
- `release`: Build the extension for Chrome
- `webext`: Build the extension for Firefox
- `firefox`: Generate Firefox's Manifest and run `build` and `webext`
- `chrome`: Generate Chrome's Manifest and run `build` and `webext`

## Credits

Special credits to:

- The [Material Theme UI plugin](https://www.material-theme.com) for the implementation
- [Atom File Icons](https://github.com/file-icons/atom)
  and [Sublime Text A File Icon](https://github.com/SublimeText/AFileIcon) for the idea
- [Scientifics Study Vectors](https://www.svgrepo.com/svg/121720/atom) for the plugin icon
- [File-Icons](https://github.com/file-icons/source/blob/master/charmap.md)
- [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/cheatsheet/)
- [MFixx](https://github.com/file-icons/MFixx/blob/master/charmap.md)
- [Devicons](https://github.com/file-icons/DevOpicons/blob/master/charmap.md)
- [Octicons](https://octicons.github.com/)
- [Material Design Icons](https://materialdesignicons.com/)
