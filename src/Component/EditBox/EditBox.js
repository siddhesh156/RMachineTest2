import React,{useState} from "react"
import {useSelector, useDispatch } from "react-redux"
import { editData } from "../../Redux"

import "./EditBox.css"

const EditBox = (props) => {

    const dispatch = useDispatch()
    const dataArray = useSelector(state => state.dashboard.dataArray);
    const selectedIndex = useSelector(state => state.dashboard.selectedIndex);

    const [firstName,setFirstName] = useState(dataArray[selectedIndex].first_name)
    const [lastName,setLastName] = useState(dataArray[selectedIndex].last_name)
    const [email,setEmail] = useState(dataArray[selectedIndex].email)
    const [states,setStates] = useState(dataArray[selectedIndex].states)
    const [city,setCity] = useState(dataArray[selectedIndex].city)
    const [pincode,setPincode] = useState(dataArray[selectedIndex].pincode)
    const [isValidPincode,setIsValidPincode] = useState(false)


const handleChange = () => {
   
  if(ValidatePincode(pincode))
      {
  dispatch(editData(email,firstName,lastName,pincode,city,states))
  var pageValue = "tables";
  props.onSelectPage(pageValue);            
}
else{
  setIsValidPincode(true)
} 

}

function ValidatePincode(pincode){
  if(!(pincode.length==5)){
    
    return false;
  }

  return true
}

const handleChange2 = () => {
 
  var pageValue = "tables";
  props.onSelectPage(pageValue);            
}

const valueChange = (e) =>{
  if(e.target.name=="fname"){
    setFirstName(e.target.value)
  }

  if(e.target.name=="lname"){
    setLastName(e.target.value)
  }

  if(e.target.name=="email"){
    setEmail(e.target.value)
  }


  if(e.target.name=="states"){
    setStates(e.target.value)
  }

  if(e.target.name=="city"){
    setCity(e.target.value)
  }

  if(e.target.name=="pincode"){
    setPincode(e.target.value)
  }
}

    return (
        <div className="w5 mt-10">
        <form>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01"  className="e1">First Name</label>
            <input type="text" name="fname" value={firstName} onChange={(e)=>valueChange(e)} class="form-control" id="validationDefault01" placeholder="First name" required />
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault02"  className="e1">Last Name</label>
            <input type="text" name="lname" value={lastName}  onChange={(e)=>valueChange(e)}  class="form-control" id="validationDefault02" placeholder="Last name" required />
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefaultUsername"  className="e1">Email</label>
            <div class="input-group">
              
              <input type="text" disabled value={email}  name="email" onChange={(e)=>valueChange(e)}  class="form-control" id="validationDefaultUsername" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
        </div>
        
        <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="validationDefault04"  className="e1">State</label>
            <select class="form-control" value={states}   name="states" onChange={(e)=>valueChange(e)} id="validationDefault04" required>
            <option value=""></option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Goa">Goa</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Delhi">Delhi</option>
          </select>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault03"  className="e1">City</label>
            <input type="text" name="city" value={city}  onChange={(e)=>valueChange(e)}  class="form-control" id="validationDefault03" placeholder="City" required />
          </div>
          
          <div class="col-md-4 mb-3">
            <label for="validationDefault05" className="e1">Pincode</label>
            <input type="number" value={pincode}  name="pincode" onChange={(e)=>valueChange(e)} class="form-control" id="validationDefault05" placeholder="Pincode" required />
            {isValidPincode ? <span class="error text-danger">Please enter pincode of 5 numbers</span> : null
          }
          </div>
        </div>
        
        <div className="bottomContainer">
        <button type="button" class="add-buttons" onClick={()=>handleChange()}>Update</button> 
  
        <button type="button" class="cancel-buttons"  onClick={()=>handleChange2()}>Cancel</button> 
        </div>
  
      </form>
      </div>
    )
}
export default EditBox;