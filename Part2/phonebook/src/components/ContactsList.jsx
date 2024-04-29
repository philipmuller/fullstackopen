const Contact = ({ name, number, onDelete }) => {
    return (
        <p>
            <b>{name+" | "}</b> 
            {number+" | "}
            <button onClick={onDelete}>Delete</button>
        </p>
    )
}
  
const ContactsList = ({ persons, filter, onDelete }) => {

    const handleDeletion = (person) => {
        if (window.confirm(`Delete ${person.name} from your contacts?`)) {
            onDelete(person.id)
        }
    }
    
    return (
        <>
            {persons
            .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => 
            <Contact key={person.id} name={person.name} number={person.number} onDelete={() => handleDeletion(person)}/>
            )}
        </>
    )
}

export default ContactsList