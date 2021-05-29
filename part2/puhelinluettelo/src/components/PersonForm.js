import React from 'react';
import Input from './Input'

const PersonForm = ({onSubmitForm, newPerson, onChangeName, onChangeNumber}) => {

return (
<form onSubmit={onSubmitForm}>
<div>
  name: <Input value={newPerson.name} handleChange={onChangeName} />
</div>
<div>
  number: <Input value={newPerson.number} handleChange={onChangeNumber} />
</div>
<div>
  <button type="submit">add</button>
</div>
</form>
);
}

export default PersonForm;