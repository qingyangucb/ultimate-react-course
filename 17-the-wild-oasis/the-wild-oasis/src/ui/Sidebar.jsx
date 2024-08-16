import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: blue;
  padding: 3.2rem 2.4rem;
  border: 1 solid var(--color-grey-100);
  grid-row: 1 / -1;
`;

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
