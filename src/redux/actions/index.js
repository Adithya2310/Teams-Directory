import data from "../../heliverse_mock_data.json";

const displayAll=()=>{
    return {type:"DISPLAY_ALL",payload:data}
}

const curCategory=(value,property)=>{
    return {type:"CUR_CATEGORY",payload:{value:value,property:property}}
}

const addToTeam=(id)=>{
    return {type:"ADD_TO_TEAM",payload:id}
}

const removeFromTeam=(id)=>{
    return {type:"REMOVE_FROM_TEAM",payload:id}
}

export {displayAll,curCategory,addToTeam,removeFromTeam};