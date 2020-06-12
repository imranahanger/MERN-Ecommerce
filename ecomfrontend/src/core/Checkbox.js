import React,{useState,useEffect} from "react";

const Checkbox = ({categories}) =>{

    const [checked,setChecked] = useState([])
    const handleToggle = c =>()=>{
        // returns the first index or -1
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryIds = [...checked]
        // if current checked was not alredy in checked state > push
        // else pull/ take off
        if(currentCategoryId===-1){
            newCheckedCategoryIds.push(c)
        }else{
            newCheckedCategoryIds.splice(currentCategoryId,1)
        }
        console.log(newCheckedCategoryIds)
        console.log(checked)
        setChecked(newCheckedCategoryIds)
    }
    return categories.map((c,i)=>(
        <li key = {i} className="custom-control custom-checkbox">
            <input onChange={handleToggle(c._id)} value={checked.indexOf(c._id)!==-1} type="checkbox" className="form-check-input"/>
             <label className="form-check-label">{c.name}</label>
        </li>
    ))
}
export default Checkbox
