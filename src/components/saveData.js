import React, { useState } from 'react';

const SaveData = (props) =>{
    const tableDatas = props.student;
    const [search , setSearch] = useState();

    const onTextChange = (e) =>{
        if(e.target.name === 'search'){
            setSearch(e.target.value);
        }
    }
   
    const onSearch = (data) =>{
        const SearchIteam = tableDatas.filter((value) => {
            return value === data;
            });
            console.log(SearchIteam);
    }

    return (
        <div>
            {console.log(search)}
            <h4>Student Result Data  <input type="text" name={'search'} placeholder="Typing..." value={search} onChange={onTextChange}/><button onClick={() => (props.onSearch({search : search}))}>Search</button></h4>
            <table>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Name</th>
                        <th>English</th>
                        <th>Maths</th>
                        <th>Computer</th>
                        <th>Total Marks</th>
                        <th>Average</th>
                        <th>Result</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {tableDatas.map((tableData,index) => (
                    <tr key={index}>
                      <td>{tableData.id}</td>
                      <td>{tableData.name}</td>
                      <td>{tableData.eng}</td>
                      <td>{tableData.maths}</td>
                      <td>{tableData.sci}</td>
                      <td>{tableData.TotalMarks}</td>
                      <td>{tableData.Average}</td>
                      <td>{tableData.Result}</td>
                      <td><button onClick={() => (props.onDelete(index))}>delete</button></td>
                      <td><button onClick={() => (props.onEdit(tableData))}>Edit</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
                
        </div>
    )
}

export default SaveData;