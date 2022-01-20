import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentySlicing() {
  return <div>aasd</div>;
}

function HotSlices() {
  return <div>aasd</div>;
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <div>
        <CurrentySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </div>
    </div>
  );
}
