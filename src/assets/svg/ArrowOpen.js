import React from 'react';

const ArrowOpen = () => (
  <svg className={'card__icon__arrow'} width={18} height={18} fill="none">
    <circle className={'card__icon__arrow--background'} cx={9} cy={9} r={9} fill="#00687F" />
    <path d="M5.25 7.313L9 11.26l3.75-3.947" stroke="#fff" strokeWidth={4} strokeLinecap="square" />
  </svg>
);

export { ArrowOpen };
