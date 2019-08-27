import React, { Component } from 'react';
import {ArrowOpen} from "../../assets/svg";
import {Form} from "./Form";

class AddForm extends Component{

  state = {
    opened: false
  };

  onCollapse(){
    this.setState({opened: !this.state.opened});
  }

  render() {
    return(
      <div className={'list__item'}>
        <div
          className={`list-item ${this.state.opened && 'list-item--opened'}`} >
          <div className={'list-item__line'}>
            <p className={'list-item__title'}>
              Add
            </p>
            <div className={'list-item__icon'} onClick={() => this.onCollapse()}><ArrowOpen/></div>
          </div>
          <div className={'list-item__inner--form'}>
            <div className={'list-item__content form'}>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export {AddForm}