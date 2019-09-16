import React, { useState } from 'react';
import { ArrowOpen } from '../../assets/svg';
import { Form } from './Form';
import classNames from 'classnames';

const AddForm = () => {
  const [opened, setOpened] = useState(false);

  function onCollapse() {
    setOpened(!opened);
  }

  const cardClass = classNames({
    card: true,
    'card--opened': opened,
  });

  return (
    <div className={'card-container'}>
      <div className={cardClass}>
        <div className={'card__title'}>
          <p>Add</p>
          <div className={'card__icon'} onClick={() => onCollapse()}>
            <ArrowOpen />
          </div>
        </div>
        <div className={'card__inner'}>
          <div className={'card__inner__content form'}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddForm };
