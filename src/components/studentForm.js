import React, { useState } from 'react';
import './studentData.css'

const StudentForm = (props) =>{
    
    console.log(props.StudData)
    const[id, setId] = useState();
    const[name, setName] = useState();
    const[eng, setEng] = useState();
    const[maths, setMaths] = useState();
    const[sci, setSci] = useState();
    const[isEdit, setIsEdit] = useState(false);

    
    const onTextChange = (e) =>{
        if(e.target.name === 'id'){
            setId(e.target.value)
        }
        if(e.target.name === 'name'){
            setName(e.target.value)
        }
        if(e.target.name === 'eng'){
            setEng(e.target.value)
        }
        if(e.target.name === 'maths'){
            setMaths(e.target.value)
        }
        if(e.target.name === 'sci'){
            setSci(e.target.value)
        }
    }
    const onUpdate = () =>{
        setIsEdit(true)
        setId(props.StudData.id)
        setName(props.StudData.name)
        setEng(props.StudData.eng)
        setMaths(props.StudData.maths)
        setSci(props.StudData.sci)
    }
    
    React.useEffect(() => {
        if(props.StudData) {
            onUpdate();
        }
    },[props.StudData])

    const saveData = () =>{
        props.getResult({
            id: id,
            name: name,
            eng: eng,
            maths: maths,
            sci: sci
        }, isEdit);
        setId("");
        setName("");
        setSci("");
        setEng("");
        setMaths("");
        setIsEdit(false);  
    }
    return(
        <div className="StudentBox">
            <p className="StudentData">Student Information</p>
            Id : <input type="number" disabled={isEdit} value={id} onChange={onTextChange} name="id"/><br/><br/>
            Name : <input type="text" value={name} onChange={onTextChange} name="name"/><br/><br/>
            English : <input type="text" value={eng} onChange={onTextChange} name="eng"/><br/><br/>
            Maths : <input type="text" value={maths} onChange={onTextChange} name="maths"/><br/><br/>
            Science : <input type="text" value={sci} onChange={onTextChange} name="sci"/><br/><br/>
            <button className="StudentBtn" onClick={saveData}>Submit</button>
        </div>
    )
}

export default StudentForm;