import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Calendar from './Calendar'
import AddPostModal from './AddPostModal'
import HMModal from './HMModal'
import PiechartModal from './PiechartModal'
import GraphModal from './GraphModal'

const DashboardContainer = () => {
    const [posts, setPosts] = useState([])
    
    //upon initial rendering of component, all posts are pulled from the backend and stored w/ setPosts (can we find a way to filter these posts before they are pulled?) ie res.data.user_id === signed in user? try using axios params
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then(res => setPosts(res))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <AddPostModal />
            <Calendar posts={posts.data}/>
            <HMModal posts={posts.data}/>
            <PiechartModal posts={posts.data}/>
            <GraphModal posts={posts.data}/>
        </div>
    )
}

export default DashboardContainer