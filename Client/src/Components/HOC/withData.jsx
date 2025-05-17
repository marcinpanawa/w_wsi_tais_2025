import React, { useEffect, useState } from 'react';
    
function withData(WrappedComponent ) {
  return function DataComponent(props) {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
    fetch('http://localhost:5000/getAllItems').then(res => res.json().then(setCategories));

    },[]);

    return <WrappedComponent {...props} items={categories} />;
  };
}

export default withData;