import PersonRow from './PersonRow';

const Persons = ({ filteredPeople, handleDeletePerson }) => filteredPeople.map(person => {
  return <PersonRow key={person.id} person={person} handleDeletePerson={handleDeletePerson} />;
});

export default Persons;
