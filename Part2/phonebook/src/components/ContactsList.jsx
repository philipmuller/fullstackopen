const Contact = ({ name, number }) => {
    return (
      <p><b>{name}</b> {number}</p>
    )
  }
  
const ContactsList = ({ persons, filter }) => {
    return (
        <>
            {persons
            .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => 
            <Contact key={person.id} name={person.name} number={person.number}/>
            )}
        </>
    )
}

export default ContactsList