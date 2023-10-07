'use client';

import React from 'react';

export default function Summary() {
  return (
    <>
      <h1 className="text-lg font-semibold">Resúmen:</h1>
      <div className="py-4">
        <h2 className="font-medium">
          Total:
          {' '}
          <span className="max-sm:text-xs max-lg:text-sm font-semibold flex">
            <p className="text-primary">Q</p>
            4
            .00
          </span>

        </h2>
      </div>
    </>
  );
}
