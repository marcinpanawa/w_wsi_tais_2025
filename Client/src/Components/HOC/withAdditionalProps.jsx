import React from 'react';

const timestamp = Date.now(); // i.e. 1311611577379 // GMT: Monday, 25 July 2011 16:32:57.379

function withAdditionalProps(WrappedInComponent) {
  return function(props) {
    return <WrappedInComponent {...props} timestamp={timestamp} status="timestamped" />;
  };
}

export default withAdditionalProps;
 