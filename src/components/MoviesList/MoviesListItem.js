import React, { Component } from 'react';
import {ArrowOpen, Loader} from "../../assets/svg";
import PropTypes from 'prop-types';
import {PlanetsTable} from "../PlanetTable";
import {withRedux} from "../../redux/wrapper";


class MoviesListItem extends Component {

  state = {
    opened: false
  };

  onCollapse(){
    const {index, planets} = this.props;
    this.setState({opened: !this.state.opened});
    if(planets.length === 0){
      this.props.onPress(index);
    }
  }

  render () {
    let content;
    if(this.props.isLoadingPlanetData && this.props.planets.length ===0){
      content = <span className={'card__inner__content__loader'}><Loader/></span>;
    } else if (this.props.planets.length === 0 && !this.props.isLoadingPlanetData){
      content = (
        <span className={'card__inner__content__error-msg'}>
          <p>An error has occurred while fetching data</p>
        </span>
      )
    } else {
      content = <PlanetsTable index={this.props.index} planets={this.props.planets}/>
    }

    return (
      <div
        className={`card ${this.state.opened && 'card--opened'}`} >
        <div className={'card__title'} onClick={() => this.onCollapse()}>
          <p>
            {this.props.title}
          </p>
          <div className={'card__icon'} ><ArrowOpen/></div>
        </div>
        <div className={'card__inner'}>
          <div className={'card__inner__content'}>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

MoviesListItem.propTypes = {
  title: PropTypes.string,
  planets: PropTypes.array,
  index: PropTypes.number,
  onPress: PropTypes.func,
  isLoadingPlanetData: PropTypes.bool
};

const connectedComponent = withRedux(MoviesListItem);
export {connectedComponent as MoviesListItem}