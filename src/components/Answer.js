import React from "react";
import {decode} from "html-entities";

export default function Answer(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : "#F5F7FB"
    }
    return (
        <div
            className="Answer"
            style={styles}
            onClick={props.handleClicks}
        >
            {decode(props.content)}
        </div>
    )
}