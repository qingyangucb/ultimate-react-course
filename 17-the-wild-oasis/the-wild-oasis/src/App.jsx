import styled from "styled-components";

const H1 = styled.h1`
  background-color: yellow;
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem, 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

function App() {
  return (
    <div>
      <H1>Hello World</H1>
      <Button onClick={() => console.log("Checking in")}>Check in</Button>
      <Button onClick={() => console.log("Checking out")}>Check out</Button>
    </div>
  );
}

export default App;
