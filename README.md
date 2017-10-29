# vue-quality-chart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Technology considerations

* Used JavaScript instead of TypeScript for simplicity 
* Used Dumb / Smart component convention to separate between those components without state, where their behavior comes determined only by its props and the ones
interacting with state containers and that can be attached to a route
* Used a single stream for pieces in order to keep it simple. Consider requesting parts via http and piece quality results via websockets.

## TODO's

* Split store into separate files and folders for actions, mutations and initial state
* Simple DI container (i.e microdi-js)
* Global scss file for constants and colors

