import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DropdownProps {}

const StyledDropdown = styled.div`
  color: pink;
`;

export function Dropdown(props: DropdownProps) {
  return (
    <StyledDropdown>
      <h1>Welcome to Dropdown!</h1>
    </StyledDropdown>
  );
}

export default Dropdown;
