import data from "../../heliverse_mock_data.json";

const displayAll=()=>{
    return {type:"DISPLAY_ALL",payload:data}
}

const curCategory=(value,property)=>{
    console.log("value",value,property)
    return {type:"CUR_CATEGORY",payload:{value:value,property:property}}
}


export {displayAll,curCategory};