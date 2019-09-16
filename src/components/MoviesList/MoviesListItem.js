import React, { useState } from 'react';
import { ArrowOpen, Loader } from '../../assets/svg';
import PropTypes from 'prop-types';
import { PlanetsTable } from '../PlanetTable';
import { withRedux } from '../../redux/wrapper';
import classNames from 'classnames';

const MoviesListItem = ({ title, planets, index, onPress, isLoadingPlanetData }) => {
  const [opened, setOpened] = useState(false);

  function onCollapse() {
    setOpened(!opened);
    if (planets.length === 0) {
      onPress(index);
    }
  }

  const cardClass = classNames({
    card: true,
    'card--opened': opened,
  });

  let content;
  if (isLoadingPlanetData && planets.length === 0) {
    content = (
      <span className={'card__inner__content__loader'}>
        <Loader />
      </span>
    );
  } else if (planets.length === 0 && !isLoadingPlanetData) {
    content = (
      <span className={'card__inner__content__error-msg'}>
        <p>An error has occurred while fetching data</p>
      </span>
    );
  } else {
    content = <PlanetsTable index={index} planets={planets} />;
  }

  return (
    <div className={cardClass}>
      <div className={'card__title'} onClick={() => onCollapse()}>
        <p>{title}</p>
        <div className={'card__icon'}>
          <ArrowOpen />
        </div>
      </div>
      <div className={'card__inner'}>
        <div className={'card__inner__content'}>{content}</div>
      </div>
    </div>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string,
  planets: PropTypes.array,
  index: PropTypes.number,
  onPress: PropTypes.func,
  isLoadingPlanetData: PropTypes.bool,
};

const connectedComponent = withRedux(MoviesListItem);
export { connectedComponent as MoviesListItem };
