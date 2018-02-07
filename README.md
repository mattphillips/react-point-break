<div align="center">
  <h1>react-point-break</h1>

  React CSS media queries with breakpoint render props Component and Provider.

  ![point-break-gif](https://media.giphy.com/media/mdvIKTVV8NxAI/giphy.gif)
</div>

<hr />

[![Build Status](https://img.shields.io/travis/mattphillips/react-point-break.svg?style=flat-square)](https://travis-ci.org/mattphillips/react-point-break)
[![Code Coverage](https://img.shields.io/codecov/c/github/mattphillips/react-point-break.svg?style=flat-square)](https://codecov.io/github/mattphillips/react-point-break)
[![version](https://img.shields.io/npm/v/react-point-break.svg?style=flat-square)](https://www.npmjs.com/package/react-point-break)
[![downloads](https://img.shields.io/npm/dm/react-point-break.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-point-break&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/react-point-break.svg?style=flat-square)](https://github.com/mattphillips/react-point-break/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](https://github.com/mattphillips/react-point-break/blob/master/docs/ROADMAP.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/mattphillips/react-point-break/blob/master/docs/EXAMPLES.md)

 - 🌓 css media queries
 - 🎉 render props
 - 🎁 connected via react context
 - ❤️ small API
 - ⭐️ server side rendering

`react-point-break` gives you a `<Breakpoint>` component and an optional `<BreakpointProvider>` used to listen to CSS
media queries and render the matching query using render props.

[Demo](http://react-point-break.mattphillips.io)

## Installation

With npm:

```sh
npm install react-point-break
```

With yarn:

```sh
yarn add react-point-break
```

## Usage

`react-point-break` can be used on its own or with a provider to give your app access to the queries anywhere in the
tree.

### `Breakpoint`

Props:
 - Media queries to match, the given prop name will be passed into the render prop function, for example: `sm=""`.
 - `render` or `children`: a function that will be called with the given prop names as boolean values for the queries
 that matches.

**Note you can supply the render prop function using `render` or via `children` but not both.**

```js
import { Breakpoint } from 'react-point-break';

const App = () => {
  return (
    <Breakpoint
      sm="(max-width: 479px)"
      md="(min-width: 480px) and (max-width: 767px)"
      lg="(min-width: 768px)"
    >
      {({ sm, md, lg }) => {
        if (sm) {
          return <h1>This is a small view</h1>;
        }
        if (md) {
          return <h1>This is a medium view</h1>;
        }
        if (lg) {
          return <h1>This is a large view</h1>;
        }
        return <h1>Default view</h1>;
      }}
    </Breakpoint>
  )
};
```

### `BreakpointProvider`

Props:
 - Media queries to match, the given prop name will be passed into the render prop function of any child `Breakpoint`
 components, for example: `sm=""`.
 - `children` to be rendered.

```js
import { Breakpoint, BreakpointProvider } from 'react-point-break';

const App = () => {
  return (
    <BreakpointProvider
      sm="(max-width: 479px)"
      md="(min-width: 480px) and (max-width: 767px)"
      lg="(min-width: 768px)"
    >
      <Header />
      <Main>
        <Breakpoint>
          {({ sm, md, lg }) => {
            if (sm) {
              return <h1>This is a small view</h1>;
            }
            if (md) {
              return <h1>This is a medium view</h1>;
            }
            if (lg) {
              return <h1>This is a large view</h1>;
            }
            return <h1>Default view</h1>;
          }}
        </Breakpoint>
      </Main>
      <Footer />
    </BreakpointProvider>
  )
};
```

#### Additional queries and overriding

Any queries supplied to the `Breakpoint` component will be passed down into the render prop function with the queries
defined in the `BreakpointProvider`. If the additional queries share the same prop name as defined in the provider then
they will override the matching provider query.

```js
import { Breakpoint, BreakpointProvider } from 'react-point-break';

const App = () => {
  return (
    <BreakpointProvider
      sm="(max-width: 479px)"
      md="(min-width: 480px) and (max-width: 767px)"
      lg="(min-width: 768px)"
    >
      <Header />
      <Main>
        <Breakpoint
          lg="(min-width: 768px) and (max-width: 1023px)"
          xl="(min-width: 1024px)"
        >
          {({ sm, md, lg, xl }) => {
            if (sm) {
              return <h1>This is a small view</h1>;
            }
            if (md) {
              return <h1>This is a medium view</h1>;
            }
            if (lg) {
              return <h1>This is a large view</h1>;
            }
            if (xl) {
              return <h1>This is an extra large view</h1>;
            }
            return <h1>Default view</h1>;
          }}
        </Breakpoint>
      </Main>
      <Footer />
    </BreakpointProvider>
  )
};
```

## Other solutions

 - [react-meida](https://github.com/ReactTraining/react-media)
 - [react-responsive](https://github.com/contra/react-responsive)
 - [...]()

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5610087?v=4" width="100px;"/><br /><sub><b>Matt Phillips</b></sub>](http://mattphillips.io)<br />[💻](https://github.com/mattphillips/react-point-break/commits?author=mattphillips "Code") [💡](#example-mattphillips "Examples") [🤔](#ideas-mattphillips "Ideas, Planning, & Feedback") [🚇](#infra-mattphillips "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/mattphillips/react-point-break/commits?author=mattphillips "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

[MIT](/LICENSE)
