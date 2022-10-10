import styled from "styled-components";

const Container = styled.main`
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;

  .divForm h1 {
    font-weight: 700;
    font-size: 1.15rem;

    text-align: center;
    margin-bottom: 20px;
    color: var(--color-primary);
  }

  .headerForm {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .headerForm button {
    width: 4.97rem;
    height: 2rem;

    font-weight: 600;
    font-size: 0.6rem;

    border: none;
    border-radius: 4px;
    color: var(--grey-0);
    background-color: var(--grey-3);
  }

  .section__Container {
    margin: 25px 0px;
  }

  .container__Users {
    width: 100%;
    margin: 0 auto;
    max-width: 1500px;
  }

  .section__Login {
    margin-top: 80px;
  }

  @media (min-width: 767px) {
    .divForm h1 {
      font-size: 1.5rem;
    }

    .headerForm button {
      font-size: 0.75rem;
    }
  }
`;

export default Container;
