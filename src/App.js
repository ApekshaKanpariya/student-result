import React, { useState } from 'react';
import StudentForm from './components/studentForm';
import DisplayResult from './components/displayResult';
import SaveData from './components/saveData';
import Card from './components/card';


const App = () => {

  const [student, setStudent] = useState([]);
  const [studentData, setStudentData] = useState();
  const [stud, setStud] = useState();
  let localMode;

  const getResult = (data , mode) =>{
    localMode = mode;
    // console.log(mode)
    if(mode === true){
      const updatedStudentData = student.map((student) => {
        return student.id === data.id ? {...data, 'TotalMarks': TotalMarks(data),'Average': Average(data),'Result': Result(data)} : student;
      });
      setStudentData({...data, 'TotalMarks': TotalMarks(data),'Average': Average(data),'Result': Result(data)});
      setStudent(updatedStudentData);
      
    }else{ 
      if(existData(data)){  
      setStudentData({...data, 'TotalMarks': TotalMarks(data),'Average': Average(data),'Result': Result(data)});
      }
    }

  }

  const existData = (data) =>{
    const updatedStudentData = student.filter((student) => {
      return student.id === data.id;
    });

    if(!updatedStudentData.length > 0) {
      return true;
    } else {
      alert('this record alredy exist...');
      return false;
    }
  }

  const TotalMarks = (data) =>{
    return parseInt(data.eng) + parseInt(data.maths) + parseInt(data.sci);
  }

  const Average = (data) =>{
    return (TotalMarks(data)/3);
  }

  const Result = (data) =>{
    if(Average(data) > 35){
      return 'pass';
    }else{
      return 'fail';
    }
  }

  const allData = (data) =>{
    if(existData(data)){  
    if(!localMode){
    setStudent([...student, studentData]);
    }
  }
  }

  const onDelete = (index) =>{
    student.splice(index, 1)
    setStudent([...student]);   
  }

  const onEdit = (stud) =>{
    setStud(stud);
  }

  const onSearch = (search) =>{
    // console.log(search);
  }
  return (
    <Card>
      <StudentForm getResult={getResult} StudData={stud}/>
      {studentData && (<DisplayResult studentData={studentData} allData={allData}/>)}
      {/* {studentData && (<button onClick={allData}>Save</button>)} */}
      <SaveData student={student} onDelete={onDelete} onEdit={onEdit} onSearch={onSearch}/>     
    </Card>
  )
}

export default App;