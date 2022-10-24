import styled from "styled-components";

const Card = styled.div`
  box-shadow: inset 0 -1px 0 var(--grey-3);

  width: 100%;
  gap: 0.625rem;
  height: 8.18rem;
  padding-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--grey-0);
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    color: var(--grey-1);
    font-size: 0.75rem;
  }

  @media (min-width: 767px) {
    padding: 0;
    gap: 25rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 800px) {
    gap: 40rem;
  }
`;

export default Card;
