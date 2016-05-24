# react-starter
Pragmatic starter kit for React + ES6 + Babel + Webpack + Tape.

## Quick start

1. Fork this repo.
2. ```$ npm install```
3. Profit!

#### Running hot-loaded development server using `webpack-dev=server`
```$ npm run dev```

#### Running tests
To run tests using `tape` + `babel` for ES6:
```$ npm test```

#### To build for production
```$ npm run build```


## Recipes
Hate that slimy, dirty feeling when using work that isn't yours?

Have serious trust issues?

Why not build your own starter kit with the following recipes!

__Table of content__

- [React](#react)
- [Babel + ES6](#babel-es6)
- [Webpack](#webpack)
  - [Webpack Loaders](#webpack-loaders)
- [Unit tests with Tape](#unit-tests-for-react-using-tape)
  - [Tape + ES6](#essential-tape--es6es2015)
  - [React test utilities](#testing-utilities-for-react-components)
- [Optional](#optional)

----

### React
Essential React dependencies

Library | Description
------------ | -------------
[`react`](https://github.com/facebook/react) | React core library
[`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) | React DOM rendering library

```bash
$ npm install --save-dev react \
                         react-dom
```

---

### Babel ES6
Essential Babel config for using ES6/ES2015 with React

Library | Description
------------ | -------------
[`babel-core`](https://github.com/babel/babel) | Babel core library
[`babel-preset-es2015`](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015) | Babel preset for all es2015 plugins.
[`babel-preset-react`](https://github.com/babel/babel/tree/master/packages/babel-preset-react) | Babel preset for all React plugins.
[`babel-plugin-transform-object-rest-spread`](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spreadhttps://github.com/facebook/react/tree/master/packages/react-dom) | Babel plugin for [Object Rest/Spread Properties in ECMAScript](https://github.com/sebmarkbage/ecmascript-rest-spread) <br/> _(Optional, but really, this is like having cake on a Monday)_ 

```bash
$ npm install --save-dev babel-core \
                         babel-preset-es2015 \
                         babel-preset-react \
                         babel-plugin-transform-object-rest-spread
```

---

### Webpack
Essential module bundling using Webpack.

Library | Description
------------ | -------------
[`webpack`](https://github.com/webpack/webpack) | Webpack module bundler
[`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) | Development-only server for you webpack app.

```bash
$ npm install --save-dev webpack \
                         webpack-dev-server
```

---

### Webpack Loaders
Essential webpack loaders.

_(Note: Do remember to update `webpack.loaders.js` file if you decide to add/remove the below recommended loaders)_

Webpack Loaders | Description
------------ | -------------
[`url-loader`](https://github.com/webpack/url-loader) | URL loader for webpack
[`css-loader`](https://github.com/webpack/css-loader) | CSS loader for webpack
[`file-loader`](https://github.com/webpack/file-loader) | File loader for webpack
[`json-loader`](https://github.com/webpack/json-loader) | JSON file loader for webpack
[`style-loader`](https://github.com/webpack/style-loader) | Style loader for webpack, adds CSS to the DOM by injecting a `<style>` tag
[`babel-loader`](https://github.com/babel/babel-loader) | Babel loader for webpack; allows you to transpile ES6 and React/JSX files as well.
[`react-hot-loader`](https://github.com/gaearon/react-hot-loader) | React hot loader for webpack; allows instantaneous live refresh without losing state while editing React components.

```bash
$ npm install --save-dev url-loader \
                         css-loader \
                         file-loader \
                         json-loader \
                         style-loader \
                         babel-loader \
                         react-hot-loader
```


---

### Unit tests for React using Tape
Essentials for pragmatic unit tests, free of magic.

Read this article on [why you'd want to use `tape` instead of unit-test frameworks such as `mocha` and `jasmine`](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)

#### Essential Tape + ES6/ES2015
Library | Description
------------ | -------------
[`tape`](https://github.com/substack/tape) | Tap-producing test harness for node and browsers
[`babel-tape-runner`](https://github.com/wavded/babel-tape-runner) | A test runner for tape that utilizes babel in order to run test suites that include ESNext/Harmony features.
[`faucet`](https://github.com/substack/faucet) | Human-readable TAP summarizer. Transform output from `tape` into something you would actually want to read from running tests.

```bash
$ npm install --save-dev tape \
                         babel-tape-runner \
                         faucet
```

#### Testing Utilities for React components

Choose one of the following utilities to help with testing React components. Or use all of them. Your call.

_(But really, `enzyme` is probably what you need)_

Library | Description
------------ | -------------
[`enzyme`](https://github.com/airbnb/enzyme) | Airbnb JavaScript Testing utilities for React that makes it easier to assert, manipulate, and traverse your React Components' output. _(Recommended)_
[`react-addons-test-utils`](https://github.com/airbnb/enzyme) | Implicit dependency for `enzyme`. Refer to https://github.com/airbnb/enzyme#installation
                                                                     

```bash
$ npm install --save-dev enzyme \
                         react-addons-test-utils
```


---

### Optional
Other useful but non-core libraries for your React project that you might want to consider.

_(Not included by default)_

Library | Description
------------ | -------------
[`classnames`](https://github.com/JedWatson/classnames) | A simple javascript utility for conditionally joining classNames together.
[`autoprefixer`](https://github.com/postcss/autoprefixer) | PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
[`react-router`](https://github.com/reactjs/react-router) | For better or worse,  de-facto routing library for React. (Some [alternatives discussed here](https://auth0.com/blog/2016/04/19/react-router-alternatives/))


---


## License
MIT.
