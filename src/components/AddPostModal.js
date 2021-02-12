import React, { useState } from 'react'
import axios from 'axios'

const AddPostModal = () => {
    const [showModal, setShowModal] = React.useState(false);
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
      <div>
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add New Post
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-600 text-lg leading-relaxed"></p>
                  {/* FORM BEGINS HERE */}
                  <form id="myForm" action="#" method="post">

  <div>
    <label for="name">Todays Date:</label>
    <input type="text" name="date" id="date" value={date} tabindex="1" />
  </div>

  <div>
    <h4>Radio Button Choice</h4>

    <label for="radio-choice-1">Choice 1</label>
    <input type="radio" name="radio-choice" id="radio-choice-1" tabindex="2" value="choice-1" />

    <label for="radio-choice-2">Choice 2</label>
    <input type="radio" name="radio-choice" id="radio-choice-2" tabindex="3" value="choice-2" />
  </div>

  <div>
    <label for="select-choice">Select Dropdown Choice:</label>
    <select name="select-choice" id="select-choice">
      <option value="Choice 1">Choice 1</option>
      <option value="Choice 2">Choice 2</option>
      <option value="Choice 3">Choice 3</option>
    </select>
  </div>
	
  <div>
    <label for="textarea">Textarea:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
  </div>
	
  <div>
    <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox" />
  </div>

  <div>
    <input type="submit" value="Submit" />
  </div>

</form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  
      </div>
    )
}
export default AddPostModal