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

  .box__Lottie {
    display: none;
  }

  @media (min-width: 767px) {
    .divForm h1 {
      font-size: 1.5rem;
    }

    .headerForm button {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 1000px) {
    .section__Login {
      margin: 0;
    }

    .box__Lottie {
      width: 450px;
      display: block;

      @keyframes animate {
        0% {
          background-position: -500%;
        }
        100% {
          background-position: 500%;
        }
      }

      h1 {
        color: var(--grey-4);
        line-height: 30px;

        font-weight: 700;
        font-size: 1.5rem;

        overflow: hidden;
        background: linear-gradient(
          90deg,
          var(--grey-4),
          var(--white),
          var(--grey-4)
        );
        background-repeat: no-repeat;
        background-size: 80%;

        animation: animate 3s linear infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: #0e060882;
      }
    }

    .container__Wrap {
      width: 100%;
      height: 100vh;

      padding: 0.5rem;
      gap: 10rem;

      display: flex;
      flex-wrap: wrap;
      flex: 1 1 100%;
      align-items: center;
      justify-content: center;

      background: linear-gradient(
        60deg,
        var(--color-primary) 55%,
        var(--grey-4) 55%
      );
    }
  }
`;

export default Container;
