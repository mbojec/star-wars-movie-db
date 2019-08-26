import React from 'react'

const Sort = () => (
  <svg className={'table__header__icon__sort-icon'} width={6} height={12} fill="none">
    <path className={'table__header__icon__sort-icon--highest'} d="M3 0L0 5.143h6L3 0z" fill="#474747" />
    <path className={'table__header__icon__sort-icon--lowest'} d="M3 12l3-5.143H0L3 12z" fill="#474747" />
  </svg>
);

export {Sort}