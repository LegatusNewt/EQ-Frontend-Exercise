# EQ_FrontEnd

This is a Vue 3 project built with Vuex as a state store and using primeVue components. I was originally going to use Vuetify but the support for Vue3 is still in beta. I also opted to use chartjs with the vue-chart-js wrapper and the chart-js-zoom plugin. This exposed Chart.js features as Vue3 components making it much simplier to create and manage the line chart with data tied to the Vuex store. The zoom plugin simply adds the ability to Pan / Zoom charts, in this project the Zooming is disabled because the axes limits are set to the limits of the Sin(x) function. But the pan feature allows you to look back at previous data in the Line chart. 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Vite will automatically inject the ENV variables from the .env file when running in development mode (default for `vite` command). Simply change this url to wherever you are running the nodejs server
.env
```
VITE_WS_SERVER_URL=ws://localhost:3000
```

.env.production is used when `vite build` is run. 
```
 VITE_WS_SERVER_URL=wss://eq.legate.technology
```

### Install Requirements (assuming you like yarn over npm)
```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn start
```

### Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

## Known Issues

Linter issue, primevue Button is just called Button, which upsets the linter because it's a reserved word. However changing the name to anything else detaches it from the stylesheet so I lose the themed styling. For a production project I would download the theme style sheet I would want to use and make that change manually to be complient. 
