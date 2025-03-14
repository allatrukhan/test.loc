import React from "react";
import './FactsVideoBlock.scss';
import Facts from "./Facts/Facts";
import Video from "./Video/Video";

function FactsVideoBlock(){

    return(
        <div className="facts-video-block">
            <Facts/>
            <Video/>
        </div>
    )
}

export default FactsVideoBlock;   