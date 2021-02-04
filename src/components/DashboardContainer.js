import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Calendar from './Calendar'
import AddPostModal from './AddPostModal'
import HMModal from './HMModal'
import Piechart from './Piechart'
import Graph from './Graph'

const DashboardContainer = () => {
    const [posts, setPosts] = useState([])
    
    //upon initial rendering of component, all posts are pulled from the backend and stored w/ setPosts (can we find a way to filter these posts before they are pulled?) ie res.data.user_id === signed in user? try using axios param

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.error(err))
        // console.log(posts)
    }, [])

    return (
        <div>
            <AddPostModal />
            <Calendar posts={posts}/>
            <HMModal posts={posts}/>
            <Piechart posts={posts}/>
            <Graph posts={posts}/>
        </div>
    )
}

export default DashboardContainer