import React ,{useState} from "react";

const Selection= ({applyColor})=>{

    const [bgColor, setBgColor]= useState("");
    // console.log(bgColor);

    function updateSelectionStyle(bgColor){
        setBgColor(bgColor)

    }

    return(
        <div style={{backgroundColor:bgColor.background}} className="fix-box" onClick={(e)=>applyColor(updateSelectionStyle)}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection