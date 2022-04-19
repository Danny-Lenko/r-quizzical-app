import React from "react";
import Preface from "./components/Preface";
import Action from "./components/Action";

function App() {

    const [hasBegun, setHasBegun] = React.useState(false)
    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        return setQuestions(() => {

        })
    }, [])

    function beginQuiz() {
        setHasBegun(prevState => !prevState)
    }



    return (
        <div className="App">
            { hasBegun
                ? <Action  />
                : <Preface beginQuiz={ ()=>beginQuiz() } />
            }
        </div>
    )
}

export default App;
