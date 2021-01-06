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
                  <img src={e?.imgSrc} className="cardImg" alt="cardImg" />
                  <div className="cardTitle">
                    <span className="cardRecommand">{e?.recommand}</span>
                    {e?.title}
                  </div>
                  <div className="cardSubTitle">{e?.subTitle}</div>
                  <div className="cardTag">{e?.tag}</div>
                  <div className="cardRow">
                    <div className="cardStatus">{e?.status}</div>
                    <div className="cardLevel">{e?.level}</div>
                  </div>
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
    grid-gap: 20px;
    .gridItem {
      .card {
      }
      .cardImg {
        width: 600px;
        height: 261px;
        object-fit: cover;
      }
      .cardTitle {
        ${(props) => props.theme.flexHC};
        margin-top: 24px;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: -0.28px;
        .cardRecommand {
          display: inline-block;
          ${(props) => props.theme.centering};
          width: 90px;
          height: 40px;
          border: ${(props) => props.theme.borderMain};
          opacity: 0.92;
          font-family: NotoSansCJKkr;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: -0.18px;
          text-align: center;
          color: #fa6400;
          margin-right: 10px;
        }
      }
      .cardSubTitle {
        margin-top: 14px;
        opacity: 0.8;
        line-height: 1.65;
        letter-spacing: -0.23px;
      }
      .cardTag {
        margin-top: 12px;
        color: ${(props) => props.theme.MainColor2};
      }
      .cardRow {
        ${(props) => props.theme.flexH}
        justify-content:space-between;
        align-items: center;
        margin-bottom: 20px;
        .cardStatus {
          ${(props) => props.theme.centering}
          height: 38px;
          margin: 14px 392px 0 0;
          padding: 4px 20px 7px;
          border-radius: 20px;
          border: solid 0.5px rgba(255, 255, 255, 0.4);
          background-color: ${(props) => props.theme.MainColor3};
          color: #ffffff;
        }
        .cardLevel {
          font-family: AppleSDGothicNeo;
          font-weight: 600;
          letter-spacing: -0.2px;
          text-align: right;
          color: #c0c0c0;
        }
      }
    }
  }
`;
