import styled from "styled-components";

export const Modal = styled.div`
  margin: 8.5rem auto;
  padding: 0.75rem;

  max-width: 369px;
  height: 342px;
  width: 100%;
  border-radius: 4px;

  @media (min-width: 600px) {
    padding: 0;
  }

  .addTech-Form {
    gap: 1rem;
    display: flex;

    align-items: center;
    flex-direction: column;
    padding: 18px 0px 32px 0px;
  }
`;

export const AddTechnology = styled.div`
  background-color: var(--grey-2);
  color: var(--grey-0);

  font-size: 0.715rem;
  font-weight: 700;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    font-weight: 600;
    color: var(--grey-1);
    background-color: transparent;
  }

  @media (min-width: 767px) {
    font-size: 0.875rem;
  }
`;
