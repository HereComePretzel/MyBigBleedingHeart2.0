import React, { useState } from 'react'
import axios from 'axios'

const AddPostModal = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [date, setDate] = useState('')
    const [number, setNumber] = useState('')
    const [medsTaken, setMedsTaken] = useState(false)
    const [suicidalThoughts, setSuicidalThoughts] = useState(false)
    const [goodThoughts, setGoodThoughts] = useState('')
    const [badThoughts, setBadThoughts] = useState('')
    const [goals, setGoals] = useState('')
    const [notes, setNotes] = useState('')
    const [happyMemory, setHappyMemory] = useState('')

    const addPost = (e) => {
      axios.post('http://localhost:3000/posts', {
        date, number, medsTaken, suicidalThoughts, goodThoughts, badThoughts, goals, notes, happyMemory
      }).then(resp => {
        console.log(resp)
      }, err => {
        console.log(err)
      })
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
      {/* {showModal ? ( */}
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
    <input onChange={(e) => setDate(e.target.value)} type="text" name="date" id="date" value={date} tabindex="1" />
  </div>
  <div>
    <label for="rating">How was your day?</label>
    <select onChange={(e) => setNumber(e.target.value)} as='select' name="number" id="number" value={number} tabindex="2">
      <option value='1'>1 - Worst. Day. Ever.</option> 
      <option value='2'>2 - Meh.</option> 
      <option value='3'>3 - Far less good than bad.</option> 
      <option value='4'>4 - Life's haze is palpable.</option> 
      <option value='5'>5 - 2 out of 4 stars. Would not recommend.</option> 
      <option value='6'>6 - Not the worst. Def not the best.</option> 
      <option value='7'>7 - Fully average.</option> 
      <option value='8'>8 - Sitting above average.</option> 
      <option value='9'>9 - I'm on top of the world!</option> 
      <option value='10'>10 - Best. Day. Ever.</option> 
      </select>
  </div>

  <div>
    <h4>Did you take your meds today?</h4>

    <label for="medsTaken">Yes</label>
    <input onClick={(e) => setMedsTaken(e.target.value)} type="radio" name="medsTaken" id="medsTaken" tabindex="3" value={medsTaken} />

    <label for="medsTaken">No</label>
    <input onClick={(e) => setMedsTaken(e.target.value)} type="radio" name="medsTaken" id="medsTaken" tabindex="3" value={medsTaken} />
  </div>
  <div>
    <h4>Any thoughts of suicide today?</h4>

    <label for="suicidalThoughts">Yes</label>
    <input onClick={(e) => setSuicidalThoughts(e.target.value)} type="radio" name="suicidalThoughts" id="suicidalThoughts" tabindex="4" value={suicidalThoughts} />

    <label for="suicidalThoughts">No</label>
    <input onClick={(e) => setSuicidalThoughts(e.target.value)} type="radio" name="suicidalThoughts" id="suicidalThoughts" tabindex="4" value={suicidalThoughts} />
  </div>

  <div>
    <label for="textarea">Good thoughts today?</label>
    <br />
    <textarea onChange={(e) => setGoodThoughts(e.target.value)} cols="60" rows="2" name="goodThoughts" id="goodThoughts" value={goodThoughts}></textarea>
  </div>

  <div>
    <label for="textarea">Bad thoughts today?</label>
    < br/>
    <textarea onChange={(e) => setBadThoughts(e.target.value)} cols="60" rows="2" name="badThoughts" id="badThoughts" value={badThoughts}></textarea>
  </div>

  <div>
    <label for="textarea">Future goals:</label>
    < br/>
    <textarea onChange={(e) => setGoals(e.target.value)} cols="60" rows="2" name="goals" id="goals" value={goals}></textarea>
  </div>

  <div>
    <label for="textarea">Other notes:</label>
    < br/>
    <textarea onChange={(e) => setNotes(e.target.value)} cols="60" rows="2" name="notes" id="notes" value={notes}></textarea>
  </div>

  <div>
    <label for="textarea">Happy Memory:</label>
    < br/>
    <textarea onChange={(e) => setHappyMemory(e.target.value)}cols="60" rows="2" name="happyMemory" id="happyMemory" value={happyMemory}></textarea>
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
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                    onClick={() => addPost()} 
                  >
                    Submit
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