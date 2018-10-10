import React from "react";




const  TitleSelect = ({ name,list,chooseOption}) =>(
    //(console.log(name,list,setSelected,setSelectedActive)),
    <label> {name}
        <select size="1" onChange={chooseOption}>
            {list.map((results) => {
                return <option value={results} key={results}>{results}</option>
           })
            }
        </select>
    </label>
)



export default TitleSelect;