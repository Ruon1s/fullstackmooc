import React from 'react';

const Countries = ({countries, onPress}) => {
    return(
    <p>{countries.name} <button onClick={() => {onPress(countries)}}>show</button></p>

    );
}

export default Countries