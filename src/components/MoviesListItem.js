import React, { Component } from 'react';
import {ArrowOpen} from "../assets/svg";
import PropTypes from 'prop-types';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab ' +
  'reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

class MoviesListItem extends Component {
  state = {
    opened: false
  };

  render () {
    return (
      <div
        className={`list-item, ${this.state.opened && 'list-item--opened'}`} >
        <div className={'list-item__line'}>
          <p className={'list-item__title'}>
            {this.props.title}
          </p>
          <div className={'list-item__icon'} onClick={() => this.setState({opened: !this.state.opened})}><ArrowOpen/></div>
        </div>
        <div className={'list-item__inner'}>
          <div className={'list-item__content'}>
            <p className={'list-item__paragraph'}>
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

MoviesListItem.propTypes = {
  title: PropTypes.string,
};

export {MoviesListItem};