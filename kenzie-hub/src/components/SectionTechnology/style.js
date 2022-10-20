import styled from "styled-components";

const SectionTechnology = styled.div`
  color: var(--grey-0);
  max-width: 60rem;
  width: 100%;

  margin: 16px auto;
  padding: 12px;

  .add__Technology button {
    border-radius: 4px;
    border: none;

    height: 2rem;
    width: 2.03rem;

    font-size: 1.25rem;
    color: var(--grey-0);
    background-color: var(--grey-3);
  }

  .add__Technology,
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list__Technology {
    background-color: var(--grey-3);
    border-radius: 4px;

    margin-top: 20px;
    padding: 23px;

    li {
      background-color: var(--grey-4);
      margin-bottom: 16px;
      border-radius: 4px;

      padding: 12px;
      height: 3rem;

      p {
        font-weight: 700;
        font-size: 0.888rem;
      }

      span {
        color: var(--grey-1);
        font-weight: 400;
        font-size: 0.761rem;
      }

      h2 {
        margin: 0 auto;
        font-size: 0.95rem;
        line-height: 1.25rem;
      }

      svg {
        display: none;
      }
    }
  }

  @media (min-width: 1000px) {
    #remove {
      display: block;
      cursor: pointer;
    }

    .element__Trash {
      display: flex;
      gap: 1.375rem;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export default SectionTechnology;
