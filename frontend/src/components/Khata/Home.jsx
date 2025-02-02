import React from 'react';
import { Link } from "react-router-dom"


function Home() {
    return(
        <>
            <div>This is Khata Home</div>
            <Link to='/'> 
            <button>
                Back
            </button>
            </Link>
        </>
    )

}

export default Home;