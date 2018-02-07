import React, { Component } from 'react';
import { Breakpoint, BreakpointProvider } from 'react-point-break';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/styles/hljs';

import './App.css';

const Demo = ({ code, children, title }) => (
  <section>
    <h2>{title}</h2>
    <SyntaxHighlighter language="javascript" showLineNumbers style={githubGist}>
      {code}
    </SyntaxHighlighter>
    <div className="demo">
      <div className="container">{children}</div>
    </div>
  </section>
);

class App extends Component {
  render() {
    return (
      <section className="App">
        <header>
          <h1 className="title">react-point-break</h1>
          <a href="https://github.com/mattphillips/react-point-break">Docs</a>
          <ul>
            <li>🌓 css media queries</li>
            <li>🎉 render props</li>
            <li>🎁 connected via react context</li>
            <li>❤️ small API</li>
            <li>⭐️ server side rendering</li>
          </ul>
          <p>
            react-point-break gives you a Breakpoint component and an optional BreakpointProvider used to listen to CSS
            media queries and render the matching query using render props.
          </p>
        </header>
        <Demo
          code={`<Breakpoint
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
</Breakpoint>`}
          title="<Breakpoint />"
        >
          <Breakpoint sm="(max-width: 479px)" md="(min-width: 480px) and (max-width: 767px)" lg="(min-width: 768px)">
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
        </Demo>

        <Demo
          code={`<BreakpointProvider
  sm="(max-width: 479px)"
  md="(min-width: 480px) and (max-width: 767px)"
  lg="(min-width: 768px)"
>
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
</BreakpointProvider>`}
          title="<BreakpointProvider />"
        >
          <BreakpointProvider
            sm="(max-width: 479px)"
            md="(min-width: 480px) and (max-width: 767px)"
            lg="(min-width: 768px)"
          >
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
          </BreakpointProvider>
        </Demo>

        <Demo
          code={`<BreakpointProvider
  sm="(max-width: 479px)"
  md="(min-width: 480px) and (max-width: 767px)"
  lg="(min-width: 768px)"
>
  <Breakpoint lg="(min-width: 768px) and (max-width: 1023px)" xl="(min-width: 1024px)">
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
</BreakpointProvider>`}
          title="<BreakpointProvider /> with xl and lg override"
        >
          <BreakpointProvider
            sm="(max-width: 479px)"
            md="(min-width: 480px) and (max-width: 767px)"
            lg="(min-width: 768px)"
          >
            <Breakpoint lg="(min-width: 768px) and (max-width: 1023px)" xl="(min-width: 1024px)">
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
          </BreakpointProvider>
        </Demo>
      </section>
    );
  }
}

export default App;
