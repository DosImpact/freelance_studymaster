import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GridCard = ({ CardItems, title, more, moreRoute }) => {
  return (
    <Container>
      <InnerContainer>
        <div className="titleRow">
          <div className="title">{title}</div>
          <Link to={moreRoute}>
            <div className="moreButton">{more}</div>
          </Link>
        </div>

        <div className="gridContainer">
          {Array.from(CardItems).map((e, idx) => {
            return (
              <div className="gridItem" key={idx}>
                <div className="card">
                  <img src={e?.src} className="cardImg" alt="cardImg" />
                  <div className="cardTitle">{e?.title}</div>
                  <div className="cardSubTitle">{e?.subTitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default GridCard;

const Container = styled.div`
  padding: 125px 0px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  /* padding: 0 30px; */

  & .titleRow {
    display: flex;
    flex-direction: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    & .title {
      font-size: 32px;
      font-weight: 500;
      letter-spacing: -0.32px;
      color: #000000;
    }
    & .moreButton {
      color: #342e19;
    }
  }

  & .gridContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    .gridItem {
      .card {
      }
      .cardImg {
        width: 600px;
        height: 320px;
      }
      .cardTitle {
        margin-top: 24px;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: -0.28px;
      }
      .cardSubTitle {
        margin-top: 14px;
        opacity: 0.8;
        line-height: 1.65;
        letter-spacing: -0.23px;
      }
    }
  }
`;
