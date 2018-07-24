import React from 'react';

const PassMeData = props => <span>{GetName(props)}</span>;

const GetName = props => {
  return props.title + ' ' + props.name;
};

export default PassMeData;
