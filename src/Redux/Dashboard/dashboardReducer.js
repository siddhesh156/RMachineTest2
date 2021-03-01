import {FETCH_DATA} from './dashboardTypes'

const initialState = {
    dataArray: [],
    dataArray2: [],
    selectedIndex: 0

}
const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA: return {
            ...state,
            dataArray: action.dataArray
        }

        case "SEARCH_DATA": return {
            ...state,
            dataArray2: action.dataArray2
        }

        case "SET_INDEX": return {
            ...state,
            selectedIndex: action.selectedIndex
        }

       
        default: return state
    }
}

export default dashboardReducer