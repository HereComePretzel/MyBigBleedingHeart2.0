import React, { useState } from 'react'
import axios from 'axios'

const AddPostModal = () => {

    //how do we make dynamic fields? User created fields?
    const [show, setShow] = useState(false)
    const [date, setDate] = useState('')
    const [rating, setRating] = useState('')
    const [medsTaken, setMedsTaken] = useState(false)
    const [suicidalThoughts, setSuicidalThoughts] = useState(false)
    const [goodThoughts, setGoodThoughts] = useState('')
    const [badThoughts, setBadThoughts] = useState('')
    const [goals, setGoals] = useState('')
    const [notes, setNotes] = useState('')
    const [happyMemory, setHappyMemory] = useState('')

    const addPost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/posts')
    } 


    return(
    <div>AddPostModal</div>
    )}

export default AddPostModal