import React from 'react';
import Person from './Person';

const Phonebook = ({ persons, newFilter }) => {
  const results = !newFilter
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()));

  return (
    <ul>
      {results.map((person) => (
        <Person person={person} key={person.name} />
      ))}
    </ul>
  );
};

export default Phonebook;
