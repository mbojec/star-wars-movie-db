import React from 'react';
import {Logo, LogoMobile} from "../assets/svg/";

export function Header (){
  let width = window.innerWidth;
  return <>{width > 576? <Logo/> : <LogoMobile/> }</>
}