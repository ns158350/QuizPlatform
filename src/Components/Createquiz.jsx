import React, { useState } from "react"

import { Navbar } from '../Components/Navbar';


export function Createquiz() {
    const [popup, setPopup] = useState(false);
    const [mcqshow, setmcqshow] = useState(false);
    const [mcqshow1, setmcqshow1] = useState(false);
    const [shortshow, setshortshow] = useState(false);
    const [longshow, setlongshow] = useState(false);

    const mcqClick = () => {
        return (
            setmcqshow(true), setmcqshow1(false), setshortshow(false), setlongshow(false)
        )
    }

    const mcqClick1 = () => {
        return (
            setmcqshow(false), setmcqshow1(true), setshortshow(false), setlongshow(false)
        )
    }

    const shortClick = () => {
        return (
            setmcqshow(false), setmcqshow1(false), setshortshow(true), setlongshow(false)
        )
    }

    const longClick = () => {
        return (
            setmcqshow(false), setmcqshow1(false), setshortshow(false), setlongshow(true)
        )
    }

    const popupClick = () => {
        return (
            setPopup(true)
        )
    }

    return (
        <div className="maindiv">
             {popup ? <div className="createquizdiv">
                    <div className="overlay">
                        <input type="Radio" />MCQ Type
                        <input type="Radio" style={{marginLeft:'10px'}}/>Short Type
                        <input type="Radio" style={{marginLeft:'10px'}}/>Long Type
                        
                    </div>  
                </div> : null}
            <Navbar />
            
            <div className="quizdiv fixed">
                <h1>Create New Quiz</h1>
                <label>Title : </label>
                <input type="text" placeholder="Quiz Title" />

                <label>Description : </label>
                <input type="text" placeholder="Quiz Description" />

                <button onClick={popupClick}>Select Type</button>
               

            </div>
            {/* <div className="createquizdiv">
                <div className="overlay">

                </div>
            </div> */}
        </div>


        // <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        //     <div>
        //         <button onClick={mcqClick}>MCQ (Single)</button>
        //         <button onClick={mcqClick1}>MCQ (Multiple)</button>
        //         <button onClick={shortClick}>Short Questions</button>
        //         <button onClick={longClick}>Long Questions</button>
        //     </div>

        //     <div style={{border:'2px solid black', height:'40vh', width:'98vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
        //         {mcqshow ? <h1>MCQ Single</h1>: null}
        //         {mcqshow1 ? <h1>MCQ Multiple</h1>: null}
        //         {shortshow ? <h1>Short Questions</h1>: null}
        //         {longshow ? <h1>Long Questions</h1>: null}
        //     </div>
        // </div>
    )
}