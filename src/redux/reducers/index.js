import data from "../../heliverse_mock_data.json";

const initialState={
    data: data,
    filteredData: [],
    filters:{
        search:"",
        domain:"All",
        gender:"All",
        available:"All"
    },
    teamData: []

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

        case "ADD_TO_TEAM":
            const toTeam=state.data.filter((curElem)=>curElem.id===action.payload)
            let teamData=state.teamData;
            const existingPerson=state.teamData.find((curElem)=>curElem[0].id===action.payload);
            if(existingPerson)
            {
                return state;
            }
            teamData.push(toTeam);

            return {
                ...state,teamData:teamData
            };

        case "REMOVE_FROM_TEAM":
            const newTeam=state.teamData.filter((curElem)=>{
                return curElem[0].id!==action.payload
            });
            console.log("updated team",newTeam);
            return {
                ...state,
                teamData:newTeam
            }
        default: return state;
    }
}

export default reducer;