import { memo } from "react";
import { useQuiz } from "../context/QuizContext";

const NextButton = memo(function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuiz();
  console.log("hello");

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        finish
      </div>
    );
});

export default NextButton;
