import React, { useEffect, useState } from "react"
import "./Tables.css"
import {deleteData, getData, updateSearchChanged} from '../../Redux'
import { useSelector, useDispatch } from "react-redux"

const Tables = (props) =>{

    const dispatch = useDispatch()
    var dataArray = useSelector(state => state.dashboard.dataArray);
    var dataArray2 = useSelector(state => state.dashboard.dataArray2);
    const selectedIndex = useSelector(state => state.dashboard.selectedIndex);
    const [name,setName] = useState("")

    if(dataArray2.length>0){
        dataArray=dataArray2
    }

    useEffect(()=>{
        dispatch(getData())
    },[])

    const handleChange = (index) => {
        dispatch({type:"SET_INDEX",selectedIndex:index})
        var pageValue = "editBox";
        props.onSelectPage(pageValue);            
    }

    const handleChange2 = () => {
        
        var pageValue = "addBox";
        props.onSelectPage(pageValue);            
    }

    const setIndex=(index)=>{
        dispatch({type:"SET_INDEX",selectedIndex:index})
        let n = dataArray[index].first_name+" "+ dataArray[index].last_name
        setName(n)
    }

    const deleteItem =()=>{
        dispatch(deleteData(dataArray[selectedIndex].email))
    }

    const textChange=(e)=>{
        e.persist();
        if(e.target.value === ""){
            dispatch(getData())
        }else{
        dispatch(updateSearchChanged(e.target.value));
        }
    }

    return(
        <div>
            <div className="d-f j-sb topContainer">
               
                <div className="d-f f-c cp" onClick={()=>handleChange2()}>    
                    <div className="d-f df-1">
                    <div className="f4">+</div>
                    <div className="f3">Add record</div>
                    </div>
                    <div className="bar"></div>
                </div>

            <div class="search-container">
            <input type="text" placeholder="search" onChange={(e)=>textChange(e)} name="search" />
            </div>
                   
            
            </div>
            <table class="table" >
                <thead class="table-dark" style={{background: "#3500d3"}}>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">State</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>

                {dataArray.map((data, index)=>
                     <tbody>
                     <tr>
                     <th scope="row">{index+1}</th>
                     <td>{data.first_name}</td>
                     <td>{data.last_name}</td>
                     <td>{data.email}</td>
                     <td>{data.states}</td>
                     <td>{data.city}</td>
                     <td>{data.pincode}</td>
                     <td>
                     <button type="button" class="edit-buttons" 
                     onClick={()=>handleChange(index)}>EDIT</button>  
                     
                     <button type="button" onClick={()=>setIndex(index)} class="delete-buttons"
                     data-toggle="modal" data-target="#exampleModalCenter">DELETE</button>  
                     </td>
                     </tr>
                 </tbody> 
                ) }
                </table>

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:"800px"}}>
            <div class="modal-content"  style={{height:"300px"}}>
            <div class="modal-header" style={{justifyContent:"center", border:"none", height:"50%"}}>
                <h5 class="modal-title f3a" id="exampleModalLongTitle">Are You Sure to Delete {name} </h5>
                 
            </div>
            
            <div class="modal-footer" style={{justifyContent:"center", border:"none"}}>
            <button type="button" class="delete-buttons" data-dismiss="modal"
                     onClick={()=>deleteItem()}>DELETE</button>  
                <button type="button" class="cancel-buttons" 
                   data-dismiss="modal">CANCEL</button>  
              
            </div>
            </div>
        </div>
        </div>
                </div>
    )
}
export default Tables