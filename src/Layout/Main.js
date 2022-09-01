import React from "react";
import styled from "styled-components";
import building from "../images/building.svg";
import logo from "../images/logo.svg";

const Main = () => {
  return (
    <MainStyled className="container">
      <SectionStyled>
        <div className="building-container">
          <div className="building">
            <img src={building} alt="" />
          </div>
          <p>
            We are building{" "}
            <span className="span-heading">our next website</span> where you
            will be able to find
            <span className="span-heading"> the answers to your needs.</span>
          </p>
        </div>
      </SectionStyled>
      <ContactStyled>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="contact-container">
          <div className="contact phone">
            <i className="fas fa-phone-square"></i>
            <p>
              <a href="tel:+447857331990" rel="noreferrer">
                +44 7857 331990
              </a>
            </p>
          </div>

          <div className="contact email">
            <i className="fas fa-envelope"></i>
            <p>
              <a
                href="mailto:susan.annie2022@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                susan.annie2022@gmail.com
              </a>
            </p>
          </div>
        </div>
      </ContactStyled>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  height: auto;
  min-height: 100vh;
  width: 100%;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;

  padding: 2rem 10%;
  padding-top: 3rem;
  @media (max-width: 700px) {
    height: 80vh;
  }
`;
const SectionStyled = styled.section`
  display: grid;
  place-items: center;
  height: 50%;
  div.building-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div.building {
      display: grid;
      place-items: center;
    }
    p {
      font-size: 1.3rem;
      margin-left: 2rem;
      @media (max-width: 600px) {
        margin-left: 0.5rem;
        margin-top: 1rem;
      }
    }
    span.span-heading {
      font-size: 1.4rem;
      color: var(--highlight);
    }
    img {
      width: 70%;
    }
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;
const ContactStyled = styled.section`
  height: 70%;
  width: 100%;
  div.logo-container {
    width: 100%;
    display: grid;
    place-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    img {
      width: 40%;
      @media (max-width: 700px) {
        width: 90%;
      }
    }
  }
  div.contact-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    width: 100%;
    div.contact {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      p,
      a {
        font-family: var(--roboto);
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--text-dark);
        @media (max-width: 700px) {
          font-size: 1.6rem;
        }
      }
      i {
        color: var(--highlight);
        margin-right: 0.5rem;
      }
      @media (max-width: 700px) {
        margin-bottom: 1rem;
      }
    }
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;
export default Main;
