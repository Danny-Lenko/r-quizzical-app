import React from "react";
import {nanoid} from "nanoid";
import {decode} from "html-entities";
import Answer from "./Answer";

export default function Question(props) {

    const [answers, setAnswers] = React.useState(generateAllAnswers())

    function generateAnswer(i) {
        return {
            content: props.answers[i],
            isHeld: false,
            id: nanoid()
        }
    }

    function generateAllAnswers() {
        const arr = []
        for (let i=0;i<4;i++) {
            arr.push(generateAnswer(i))
        }
        return arr
    }

    function handleClicks(id) {
        setAnswers(prevState => prevState.map(answer => (
            answer.id === id ?
                {...answer, isHeld: !answer.isHeld} :
                {...answer, isHeld: false}
        )))
    }

    const allAnswers = answers.map(item => (
        <Answer
            key={nanoid()}
            content={item.content}
            isHeld={item.isHeld}
            handleClicks={()=>handleClicks(item.id)}
        />
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