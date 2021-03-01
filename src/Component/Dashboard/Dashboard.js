import { Tab } from "bootstrap"
import React, { useState } from "react"
import "./Dashboard.css"
import Tables from "../Tables/Tables"
import EditBox from "../EditBox/EditBox"
import AddBox from "../AddBox/AddBox"

const Dashboard = () =>{
const [mainPage,setMainPage] = useState("tables")

const handlePage = (pageValue,data) => {
    setMainPage(pageValue)
}

    return(
        <div className="w">
            <div className="m1">
                {
                  mainPage == "tables" ? <Tables  onSelectPage={handlePage}  /> : null
                }
                {
                  mainPage == "editBox" ? <EditBox  onSelectPage={handlePage}  /> : null
                }
                {
                  mainPage == "addBox" ? <AddBox  onSelectPage={handlePage}  /> : null
                }
           </div>
        </div>
    )
}
export default Dashboard