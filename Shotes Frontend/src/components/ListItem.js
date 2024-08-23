import React from 'react'
import { Link } from 'react-router-dom'
const ListItem = ({note}) => {
  const getTitle = (note) =>{
    let title = note.body.split('\n')[0]
    if (title.length > 40){
      return title.slice(0,40)
    }
    return title
  }
  const getDate = (note)=> {
    return new Date(note.updated).toLocaleDateString()
  }
  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>
      <h3>{getTitle(note)}</h3>
      <span>{getDate(note)}</span>
      </div>
      
    </Link>
  )
}

export default ListItem