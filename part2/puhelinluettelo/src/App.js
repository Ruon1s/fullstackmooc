import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personsService.getAll()
    .then(response => {
      setPersons(response);
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

  const delPerson = (person) => {
    const result = window.confirm(`Do you really want to delete ${person.name}?`);
    if(result){
    personsService
    .del(person.id)
    .then(returnedPerson => {
      console.log('deleted: ', returnedPerson)
      setPersons(persons.filter(p => p.id !== person.id))
      
    })

  }
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log('persons: ', persons)
    if(persons.some(person => person.name === newName.name)){
      console.log('persons.some = true')
      const personToUpdate = persons.find(person => person.name === newName.name);
      console.log('person to update: ', personToUpdate);
      const result = window.confirm(`${newName.name} is already added to phonebook, replace the old number with a new one?`)
      if(result){
        const newPerson = {...personToUpdate, number: newName.number}
      
      personsService
      .updatePerson(personToUpdate.id, newPerson)
      .then(updatedPerson => {
        setPersons(persons.map(person => person.id !== personToUpdate.id ? person : updatedPerson))
      })
      }
    } else {
    personsService
    .create(newName)
    .then(returnedNote => {
      setPersons(persons.concat(returnedNote))
      setNewName({name: '', number: ''})
    });
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
      <p>filter</p>
      <Filter value={filter} handleChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmitForm={addPerson} newPerson={newName} onChangeName={handlePersonChange} onChangeNumber={handleNumberChange}/>
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.name} person={person} del={()=> {delPerson(person)}}/>)}
    </div>
  )

}

export default App