import React, { useState } from 'react';

const DisplayResult = (props) =>{
    console.log(props)
    return (
        <div>
            <h4>Student Result</h4>
            id : {props.studentData.id}<br/>
            Name : {props.studentData.name}<br/>
            English : {props.studentData.eng}<br/>
            Maths : {props.studentData.maths}<br/>
            Science : {props.studentData.sci}<br/>
            TotalMarks : {props.studentData.TotalMarks}<br/>
            Average : {props.studentData.Average}<br/>
            Result : {props.studentData.Result}<br/>
            <button onClick={() => (props.allData(props.studentData))}>Save</button>
        </div>
    )
}

export default DisplayResult;