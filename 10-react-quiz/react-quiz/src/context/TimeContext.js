// import { createContext, useContext, useState } from "react";
// import { useQuiz } from "./QuizContext";
// import { flushSync } from "react-dom";

// const TimeContext = createContext();
// const SECS_PER_QUESTION = 30;

// function TimeProvider({ children }) {
//   const { numQuestions } = useQuiz();
//   const [secondsRemaining, setSecondsRemaining] = useState(
//     SECS_PER_QUESTION * numQuestions
//   );
//   return (
//     <TimeContext.Provider value={{ secondsRemaining, setSecondsRemaining }}>
//       {children}
//     </TimeContext.Provider>
//   );
// }

// function useTime() {
//   return useContext(TimeContext);
// }
