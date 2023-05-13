import data from "../../heliverse_mock_data.json";

const initialState={
    data: data,
    filteredData: [],
    filters:{
        search:"",
        domain:"All",
        gender:"All",
        available:"All"
    }
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "DISPLAY_ALL": return {...state,filteredData:action.payload};
        case "CUR_CATEGORY": 
        const {value,property}=action.payload;
        let filteredData=state.data;
        // for search filter
            if(property==="search")
            {
                if(value==="")
                {
                    return{...state,filteredData:filteredData};
                }
                else
                {
                    filteredData=filteredData.filter((curData)=>{
                        const name=curData.first_name+" "+curData.last_name;
                        return name.includes(value)||name.toLowerCase().includes(value)
                    })
                    return {...state,
                        filteredData:filteredData,
                        filters:{
                            ...state.filters,
                            [property]:value
                        }}
                }
            }
            // for availaible filter
            if(property==="available")
            {
                if(value==="Yes")
                {
                    filteredData=filteredData.filter((curData)=>{
                        return curData.available
                    })
                }
            }
            else if(value==="All"){
                filteredData=state.data;
            }
            else{
                filteredData=filteredData.filter((data)=>{
                    return data[property]===value
                })
            }
            return {...state,
                filteredData:filteredData,
                filters:{
                    ...state.filters,
                    [property]:value
                }}
        default: return state;
    }
}

export default reducer;