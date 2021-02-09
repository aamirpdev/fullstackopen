import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Phonebook from './components/Phonebook';
import person from './services/person';
import personService from './services/person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find((p) => p.name === newName);
        const updatedPerson = { ...person, number: newNumber };
        personService
          .update(updatedPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((p) => (p.id !== person.id ? p : returnedPerson)));
            setNewName('');
            setNewNumber('');
            setMessage(`${updatedPerson.name} was successfully updated`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
            setPersons(persons.filter((p) => p.id !== updatedPerson.id));
            setNewName('');
            setNewNumber('');
            setMessage(`[ERROR] ${updatedPerson.name} was already deleted from server`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      const personToAdd = {
        name: newName,
        number: newNumber,
      };
      personService
        .create(personToAdd)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          setMessage(`${newName} was successfully added`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setMessage(`[ERROR] ${error.response.data.error}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          console.log(error.response.data);
        });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`delete ${person.name}?`)) {
      personService
        .deleteIt(person.id)
        .then((response) => {
          setMessage({ text: `Deleted '${person.name}`, class: 'info' });
        })
        .catch((error) => {
          setMessage({ text: `${error.response.data.error}`, class: 'error' });
        });
      setPersons(persons.filter((p) => p.id !== id));
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h1>add a new</h1>
      <h3>Numbers</h3>
      <Phonebook persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
