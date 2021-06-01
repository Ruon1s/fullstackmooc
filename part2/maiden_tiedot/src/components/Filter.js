import React from 'react';

const Filter = ({value, onChangeText}) => {
return(
<p>find countries <input onChange={onChangeText} value={value}/></p>
);
}

export default Filter