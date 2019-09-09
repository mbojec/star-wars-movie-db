import React, { Component } from 'react';
import { ArrowOpen } from '../../assets/svg';
import { Form } from './Form';
import classNames from 'classnames';

class AddForm extends Component {
  state = {
    opened: false,
  };

  onCollapse() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const cardClass = classNames({
      card: true,
      'card--opened': this.state.opened,
    });

    return (
      <div className={'card-container'}>
        <div className={cardClass}>
          <div className={'card__title'}>
            <p>Add</p>
            <div className={'card__icon'} onClick={() => this.onCollapse()}>
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
  }
}

export { AddForm };
