const PersonRow = ({ person, handleDeletePerson }) => {
  return (
    <li>
      {person.name} - {person.number} <button onClick={() => handleDeletePerson(person)}>Delete</button>
    </li>
  );
};

export default PersonRow;