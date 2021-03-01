import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addData } from "../../Redux"
import "./AddBox.css"

const AddBox = (props) => {

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [isValidEmail,setIsValidEmail] = useState(false)

  const [states,setStates] = useState("")
  const [city,setCity] = useState("")
  const [pincode,setPincode] = useState("")
  const [isValidPincode,setIsValidPincode] = useState(false)


  const dispatch = useDispatch()

  const handleChange = () => {
   
    if(ValidateEmail(email)){
      setIsValidEmail(false)
      if(ValidatePincode(pincode))
      {
        setIsValidPincode(false)
    dispatch(addData(email,firstName,lastName,pincode,city,states))
    var pageValue = "tables";
    props.onSelectPage(pageValue);      
      }
      else{
        setIsValidPincode(true)
      } 
    
    }
    else{
      setIsValidEmail(true)
      
    }
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

function ValidateEmail(mail) {
  
  var pattern = new RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    );

    if (pattern.test(mail)) {
        return true;
    }

  
  return false
}

function ValidatePincode(pincode){
  if(!(pincode.length==5)){
    
    return false;
  }

  return true
}

    return (
      <div className="w5 mt-10">
      <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01"  className="e1">First Name</label>
          <input type="text" name="fname" onChange={(e)=>valueChange(e)} class="form-control" id="validationDefault01" placeholder="First name" required />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02"  className="e1">Last Name</label>
          <input type="text" name="lname" onChange={(e)=>valueChange(e)}  class="form-control" id="validationDefault02" placeholder="Last name" required />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefaultUsername"  className="e1">Email</label>
          <div class="input-group">
            
            <input type="text" name="email" onChange={(e)=>valueChange(e)}  class="form-control" id="validationDefaultUsername" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
            
          </div>
          {isValidEmail ? <span class="error text-danger">Please enter a valid email</span> : null
          }
        </div>
      </div>
      
      <div class="form-row">
      <div class="col-md-4 mb-3">
          <label for="validationDefault04"  className="e1">State</label>
          <select class="form-control"  name="states" onChange={(e)=>valueChange(e)} id="validationDefault04" required>
          <option value=""></option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Goa">Goa</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Delhi">Delhi</option>
        </select>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault03"  className="e1">City</label>
          <input type="text" name="city" onChange={(e)=>valueChange(e)}  class="form-control" id="validationDefault03" placeholder="City" required />
        </div>
        
        <div class="col-md-4 mb-3">
          <label for="validationDefault05" className="e1">Pincode</label>
          <input type="number" name="pincode" onChange={(e)=>valueChange(e)} class="form-control" id="validationDefault05" placeholder="Pincode" required />
          {isValidPincode ? <span class="error text-danger">Please enter pincode of 5 numbers</span> : null
          }
        </div>
      </div>
      
      <div className="bottomContainer">
      <button type="button" class="add-buttons" onClick={()=>handleChange()}>Add</button> 

      <button type="button" class="cancel-buttons"  onClick={()=>handleChange2()}>Cancel</button> 
      </div>

    </form>
    </div>
    )
}
export default AddBox;