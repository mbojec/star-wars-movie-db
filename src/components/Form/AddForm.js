import React, { Component } from 'react';
import { ArrowOpen } from '../../assets/svg';
import { Form } from './Form';

class AddForm extends Component {
  state = {
    opened: false,
  };

  onCollapse() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    return (
      <div className={'card-container'}>
        <div className={`card ${this.state.opened && 'card--opened'}`}>
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
