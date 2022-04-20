import React from "react";
import Preface from "./components/Preface";
import Action from "./components/Action";

function App() {

    const [hasBegun, setHasBegun] = React.useState(false)
    const [questions, setQuestions] = React.useState([])

    React.useEffect(function() {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }, [])

    console.log(questions)

    function beginQuiz() {
        setHasBegun(prevState => !prevState)
    }



    return (
        <div className="App">
            { hasBegun
                ? <Action questions={questions} />
                : <Preface beginQuiz={ ()=>beginQuiz() } />
            }
        </div>
    )
}

export default App;
