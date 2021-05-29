import React from 'react';
import Input from './Input';

const Filter = ({value, handleChange}) => {
    return(
      <Input value={value} handleChange={handleChange}/>
    );  
};

export default Filter;