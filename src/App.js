import React from "react";
import Preface from "./components/Preface";
import Action from "./components/Action";

function App() {

    const [hasBegun, setHasBegun] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [restart, setRestart] = React.useState(false)

    React.useEffect(function() {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }, [restart])


    function beginQuiz() {
        setHasBegun(prevState => !prevState)
    }

    function restartGame() {
        setRestart(prevState => !prevState)
        beginQuiz()
    }

    console.log(questions)

    const allAnswers = questions.map(item => {

        const randomNum = Math.floor(Math.random() * 4)
        const correctAnswer = item.correct_answer
        const answers = [...item.incorrect_answers]

        answers.splice(randomNum, 0, correctAnswer)
        return answers
    })


    return (
        <div className="App">
            { hasBegun
                ? <Action
                    questions={questions}
                    answers={allAnswers}
                    restartGame={ ()=>restartGame() }
                />
                : <Preface beginQuiz={ ()=>beginQuiz() } />
            }
        </div>
    )
}

export default App;
