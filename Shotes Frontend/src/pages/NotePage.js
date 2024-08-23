import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/left-arrow-svgrepo-com.svg'

const NotePage = () => {
    const {id} = useParams()
const [note, setNote] = useState(null)
useEffect(() =>{
    const getNote = async() => {
        const response = await fetch(`/api/notes/${id}`)
        const data = await response.json()
        setNote(data)
    }
    getNote()
},[id])
  return (
    <div className='note'>
        <div className="note-header">
            <h3>
                <Link to='/'>
                <ArrowLeft/>
                </Link>
            </h3>
        </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
