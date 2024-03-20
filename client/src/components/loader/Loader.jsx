import React from 'react'
import { ClipLoader } from 'react-spinners';

function Loader() {
    return (
        <div>
            <ClipLoader color="red" size={50} />
        </div>
    )
}

export default Loader