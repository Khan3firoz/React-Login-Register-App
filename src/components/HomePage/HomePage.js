import React,{useEffect} from 'react';
import './HomePage.css';

const HomePage = ({ setLoginUser }) => {
    // useEffect(() => {
    //     fetch('http://localhost:9002/api').then(response => response.json())
    //         .then(data => {
    //         console.log(data)
    //     })
    // })
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default HomePage
