import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as HDDcoinIcon } from './images/littlelambocoin.png';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={HDDcoinIcon} viewBox="0 0 48 58" {...props} />;
} 