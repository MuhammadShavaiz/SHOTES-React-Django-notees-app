import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/left-arrow-svgrepo-com.svg';

const NotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState();

    useEffect(() => {
        const getNote = async () => {
            if (id === 'new') return
            const response = await fetch(`/api/notes/${id}`);
            const data = await response.json();
            setNote(data);
        };
        getNote();
    }, [id]);

    const updateNote = async () => {
            await fetch(`/api/notes/${id}/update/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(note),
            });
    };
    const deleteNote = async() =>{
      fetch(`/api/notes/${id}/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
      });
      navigate('/');
    };

    const submitUpdate = () => {
      if(id !== 'new' && !note.body){
        deleteNote()
      } else if (id !== 'new'){
        updateNote()
      }
            navigate('/')
    }

    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={submitUpdate} />
                </h3>
                {id !== 'new' ? (
                  <button onClick={deleteNote}>Delete</button>
                ):(
                  <button>Done</button>
                )}
                
            </div>
            <textarea
                onChange={(e) => setNote({ ...note, body: e.target.value })}
                value={note?.body}
            ></textarea>
        </div>
    );
};

export default NotePage;
