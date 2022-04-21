import React from "react";
import {decode} from "html-entities";

export default function Answer(props) {
    return (
        <div
            className="Answer"
        >
            {decode(props.content)}
        </div>
    )
}