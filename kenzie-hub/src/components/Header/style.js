import styled from "styled-components";

const Header = styled.header`
  max-width: 1500px;
  margin: 0 auto;
  width: 90%;

  > div {
    margin-top: 10px;
    padding: 13px;

    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  h1 {
    font-weight: 700;
    font-size: 1.15rem;

    text-align: center;
    margin-bottom: 20px;
    color: var(--color-primary);
  }

  button {
    width: 4.97rem;
    height: 2rem;

    font-weight: 600;
    font-size: 0.6rem;

    border: none;
    border-radius: 4px;
    color: var(--grey-0);
    background-color: var(--grey-3);
  }

  @media (min-width: 1000px) {
    width: 80%;

    h1 {
      font-size: 1.5rem;
    }

    button {
      font-size: 0.75rem;
    }
  }
`;

export default Header;
