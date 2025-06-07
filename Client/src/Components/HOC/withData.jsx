import React, { useEffect, useState } from 'react';
    
function withData(WrappedComponent ) {
  return function DataComponent(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
    fetch('http://localhost:5000/getAllItems').then(res => res.json().then(setItems));

    },[]);

    return <WrappedComponent {...props} items={items} />;
  };
}

export default withData;