# Vuetify Boilerplate
This is vuetify boilerplate project. You can create new project from it as bellow command.

``` bash
$ vue init Ohmry/vuetify-boilerplate project-name
```

# Appendix
### Vuetify
when add vuetify, choose custom preset as below.
``` bash
$ vue add vuetify

# Use a pre-mad template? Yes
# Use custom theme? Yes
# Use custom properties? Yes
# Select icon font? Material Design icons (deleted after add vuetify in packaga.json and main.js)
# Use fonts as a dependency? Yes
# Use a-la-carte components? Yes
# Select locale Korean
```

### Noto Sans Kr
this project installed [noto-sans-kr](https://www.npmjs.com/package/noto-sans-kr) pacakage.
``` bash
# install noto-sans-kr
$ npm install noto-sans-kr
```

#### insert `import 'noto-sans-kr/styles.css' in main.js`
``` bash
# in src/main.js
import 'noto-sans-kr/styles.css' in main.js
```

#### create new file `variables.sass' in src/styles
if styles folder is not exists, create it either.

#### insert family-font variables for override
Application basic font set `Noto Sans Korean`. if font is not supported, use 'Roboto'.
``` python
# in src/styles/variables.sass
$body-font-family: 'Noto Sans Korean', 'Roboto', sans-serif
$title-font: 'Noto Sans Korean', 'Roboto', sans-serif
```

### Material Design Icons
when vuetify add, you can chooes material-design-icon option. but it is not worked. so delete existsed package and reintsall another material-design-icons-iconfont.

#### install package
``` bash
# install
$ npm install material-design-icons-iconfont --save-dev
```

#### insert `import 'material-design-icons-iconfont/dist/material-design-icons.min.css'`
``` bash
# in src/plugins/vuetify.js
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
```

#### configure iconfont in src/plugin/vuetify.js
``` javascript
export default new Vuetify({
  icons: {
    iconfont: 'md' || 'mdi'
  },
  ...[others]
}
```

# Reference
  - [Materials-Design-Icon list](https://fonts.google.com/icons)
  - [Tutorial to install vue, vuetify, electron](https://javascript.plainenglish.io/create-a-desktop-app-with-vue-vuetify-and-electron-f3a5d1491e27?gi=845c9dae2e9d)
  - [Default configuration in vuetify](https://youtu.be/9C-20VZMkcg?t=32)