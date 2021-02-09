import React from 'react';
import Persons from './Persons';

const Phonebook = ({ persons, filter, deletePerson }) => {
  const results = !filter
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      {results.map((person) => (
        <Persons key={person.name} person={person} deletePerson={deletePerson} />
      ))}
    </div>
  );
};

export default Phonebook;
