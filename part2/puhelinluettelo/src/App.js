import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data);
    })
  }, []);

  const handlePersonChange = (event) => {
    setNewName(
      {
      ...newName,
      name: event.target.value
      }
    )

  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log('persons: ', persons)
    console.log('asd', persons.includes({name: newName.name}));
    if(persons.some(person => person.name === newName.name)){
      alert(`${newName.name} is already added to phonebook`);
    } else {
    setPersons(persons.concat(newName))
    setNewName({name: '', number: ''})
  }
  }

  const handleNumberChange = (event) => {
    setNewName({...newName, number: event.target.value});
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const personsToShow = filter !== '' ? persons.filter(person => person.name.includes(filter)) : persons

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmitForm={addPerson} newPerson={newName} onChangeName={handlePersonChange} onChangeNumber={handleNumberChange}/>
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )

}

export default App