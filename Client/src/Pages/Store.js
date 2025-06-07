import React from 'react';
import withData from "../Components/HOC/withData";

const Item = ({name, description}) => (
    <li className="list-group-item">      
    {name}
    <p>{description}</p>
  </li>
)


const Store = (props) => {
    console.log('props',props)
    return (
        <>
        <h1>Welcome at OUR Store!</h1>
        <ul className="list-group w-75">
        {props.items&& props.items.response.map((rest, i) => (
          <Item {...rest} />
        ))}
        </ul>
        </>
        
    )
}

export default withData(Store)