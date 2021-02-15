import React from 'react'

import React, { useState } from 'react'
import axios from 'axios'

const ProfileModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [sexualOrientation, setSexualOrientation] = useState('')
  const [zipcode, setZipcode] = useState('')

    

    const editProfile = (e) => {
      axios.patch('http://localhost:3000/posts', {
        password, email, name, birthday, age, gender, sexualOrientation, zipcode
      }).then(resp => {
        console.log(resp)
      }, err => {
        console.log(err)
      })
    }

    const updateProfileAndClose = () => {
      setShowModal(false);
      editProfile();
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
        Profile
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
                    Update Profile
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

    <label for="name">Name:</label>
    <input onClick={(e) => setName(e.target.value)} type="text" name="name" id="name" tabindex="1" value={name} />

    <label for="email">Email:</label>
    <input onClick={(e) => setEmail(e.target.value)} type="text" name="email" id="email" tabindex="2" value={email} />

    <label for="password">Password:</label>
    <input type="text" name="password" id="password" tabindex="2" value={password} />

    <label for="password">Confirm Password:</label>
    <input onClick={(e) => setPassword(e.target.value)} type="text" name="password" id="password" tabindex="3" value={password} />

    <label for="birthday">Birthday:</label>
    <input onClick={(e) => setBirthday(e.target.value)} type="text" name="birthday" id="birthday" tabindex="4" value={birthday} />

    <label for="age">Age:</label>
    <input onClick={(e) => setBirthday(e.target.value)} type="text" name="birthday" id="birthday" tabindex="5" value={birthday} />

    <label for="gender">Gender:</label>
    <input onClick={(e) => setGender(e.target.value)} type="text" name="gender" id="gender" tabindex="6" value={gender} />

    <label for="sexual orientation">Sexual Orientation:</label>
    <input onClick={(e) => setSexualOrientation(e.target.value)} type="text" name="sexual orientation" id="sexual orientation" tabindex="7" value={sexualOrientation} />

    <label for="zipcode">Zipcode:</label>
    <input onClick={(e) => setZipcode(e.target.value)} type="text" name="zipcode" id="zipcode" tabindex="8" value={zipcode} />

    
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
                    onClick={() => updateProfileAndClose()}
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
export default ProfileModal

export default Profile