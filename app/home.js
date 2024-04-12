import React, { useState, useEffect } from 'react';

export function StartHome(s) {
  function g(i) {
    const c = document.querySelectorAll(`.full tr td:nth-child(${i}):not(.greyed-out)`);
    if (c.length === 0) return null;
    const t = c[0];
    const p = t.parentElement.previousElementSibling.querySelector(`td:nth-child(${Array.from(t.parentElement.cells).indexOf(t) + 1})`);
    const n = t.parentElement.nextElementSibling.querySelector(`td:nth-child(${Array.from(t.parentElement.cells).indexOf(t) + 1})`);
    return [p.textContent, t.textContent, n.textContent];
  }

  const h = Array.from(document.querySelectorAll(".full th")).map(e => e.textContent);
  const fc = [h[0], ...(g(1) || ['N/A', 'N/A', 'N/A'])];
  const sc = [h[1], ...(g(2) || ['N/A', 'N/A', 'N/A'])];
  const tc = [h[2], ...(g(3) || ['N/A', 'N/A', 'N/A'])];
  console.log(fc);
  s([fc, sc, tc]);
}

export default function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      StartHome(setData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
{data && data.map((arr, index) => (
  <div key={index}>
    {arr.map((item, i) => (
      <p key={i}>{item}<br /></p>
    ))}
  </div>
))}

    </>
  );
}
