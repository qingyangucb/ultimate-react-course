import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  numQuestions: 0,
  maxPossiblePoints: 0,
  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      const length = action.payload.length;
      const maxPoints = action.payload.reduce(
        (prev, cur) => prev + cur.points,
        0
      );
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        numQuestions: length,
        maxPossiblePoints: maxPoints,
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "ready":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
      status,
      numQuestions,
      maxPossiblePoints,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        status,
        dispatch,
        numQuestions,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  return useContext(QuizContext);
}

export { QuizProvider, useQuiz };
