import axios from "axios";
import {FETCH_DATA} from './dashboardTypes'
import { store } from './../store'
import { useSelector, useDispatch } from "react-redux"


export const getData = () => {
    return (dispatch) => {
        let data = []
      let url = new URL("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch")
        Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
        var decoded = decodeURIComponent(url)
        axios({
            method: "get",
            url: decoded,
        })
            .then(response => {
                
                dispatch({type:FETCH_DATA,dataArray: response.data.data})
            })
           
            .catch(error => {
                try {
                   
                } catch (e) {
                }
            });
    }
}


export const addData = (email,first_name,last_name,pincode,city,states) => {
  return (dispatch) => {
      let data = []
      data.param1 = email
      data.param2 = first_name
      data.param3 = last_name
      data.param4 = pincode
      data.param5 = city
      data.param6 = states

    let url = new URL("https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add")
      Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
      var decoded = decodeURIComponent(url)
      axios({
          method: "get",
          url: decoded,
      })
          .then(response => {
             
              dispatch(getData())
          })
         
          .catch(error => {
              try {
                 
              } catch (e) {
              }
          });
  }
}


 export const editData = (email,first_name,last_name,pincode,city,states) => {
  return (dispatch) => {
    let data = []
    data.param1 = email
    data.param2 = first_name
    data.param3 = last_name
    data.param4 = pincode
    data.param5 = city
    data.param6 = states
      
    let url = new URL("https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit")
      Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
      var decoded = decodeURIComponent(url)
      axios({
          method: "get",
          url: decoded,
      })
          .then(response => {
              dispatch(getData())
          })
         
          .catch(error => {
              try {
                 
              } catch (e) {
              }
          });
  }
}

export const deleteData = (email) => {
  return (dispatch) => {
      let data = []
      data.param1 = email
      
      
    let url = new URL("https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete")
     Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
      var decoded = decodeURIComponent(url)
      axios({
          method: "get",
          url: decoded,
          
      })
          .then(response => {
             
              dispatch(getData())
          })
         
          .catch(error => {
              try {
                 
              } catch (e) {
              }
          });
  }
}

export const updateSearchChanged =value =>{
    

    return (dispatch, getState) => {

    const dataArray = getState().dashboard.dataArray

    const searchKey=value.toLowerCase()
    let obj = dataArray.filter(item => item.first_name.toLowerCase() === searchKey || 
    item.last_name.toLowerCase() === searchKey ||  item.email.toLowerCase() === searchKey ||
     item.states.toLowerCase() === searchKey 
    ||  item.city.toLowerCase() === searchKey || item.pincode.toLowerCase() === searchKey)

        dispatch({ type: "SEARCH_DATA", dataArray2:obj })
    
    

    }
}

