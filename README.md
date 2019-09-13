This is a sandbox for trying out a minimal setup for the following:

- Build a UI library that use React Hooks
   - React Hooks requires a singleton of React in memory
- Consume the library in a few ways:
   - Full Babel: Consume UI library as NPM package
   - Babel Standalone: Consume UI library as CDN bundle, with JSX
   - Pure JavaScript: Consume UI library as CDN bundle, without JSX
- Developers can load a version of React/ReactDOM they want to use to `window.React` and `window.ReactDOM`, the UI library must obey
   - UI library include a version of React, which it will fallback to

We are not testing Full Babel in this repository because it is relatively easy to done.

We are testing the following matrix:
- Babel Standalone
   - With React loaded
   - Without loading React
- Pure JavaScript
   - With React loaded
   - Without loading React
