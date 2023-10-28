import React from 'react';
import dynamic from 'next/dynamic';

// Import fullPage.js dynamically to avoid server-side rendering issues
const ReactFullpage = dynamic(
  () => import('@fullpage/react-fullpage').then((mod) => mod.default),
  { ssr: false }
);

const ScrollSetup = () => (
  <ReactFullpage
    // fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <h3>Section 1</h3>
          </div>
          <div className="section">
            <h3>Section 2</h3>
          </div>
          <div className="section">
            <h3>Section 3</h3>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ScrollSetup;