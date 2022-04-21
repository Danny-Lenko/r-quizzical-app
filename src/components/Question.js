import React from "react";
import {nanoid} from "nanoid";
import {decode} from "html-entities";
import Answer from "./Answer";

export default function Question(props) {

    const allAnswers = props.answers.map(item => (
        <Answer key={nanoid()} content={item} />
    ))

    return (
        <section className="Question">

            <h3 className="Question__ask">
                {decode(props.question)}
            </h3>

            <div className="Question__options">
                {allAnswers}
            </div>

            <hr/>
        </section>
    )
}