import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 656925282}
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(({name}) => name === noteObject.name)) {
      window.alert(noteObject.name + "is already added to phonebook")
    } else {
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const peopleToShow = 
  showAll
  ? persons
  : persons.filter(p => p.name.includes(newFilter))

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setShowAll(false)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input value={newFilter}
          onChange={handleFilter}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handlePersonNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map(p => 
          <Person key={p.name} person={p} />
      )}
    </div>
  )
}

export default App

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState("")
//   const [showAll, setShowAll] = useState(true)

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }
  
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote}
//           onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>  
//     </div>
//   )
// }

// export default App 