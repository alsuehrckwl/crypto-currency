import styled from "styled-components";

export const DetailArea = styled.div`
  height: 100%;
  width: 100%;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    height: 100%;

    button {
      width: 32px;
      margin: 0px 4px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      svg {
        height: 18px;
        width: 18px;
        fill: ${(props: { isBookmark: boolean }) =>
          props.isBookmark ? "#F6B306" : "#C4C4C4"};
      }
    }

    img {
      margin-left: 0;
    }

    span {
      margin-left: 8px;
      font-weight: bold;
    }
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  width: 100%;

  div {
    flex: 1;
  }
`;

export const CoinTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;

  .row {
    display: flex;
    height: 48px;
    min-height: 48px;

    div {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 12px;
      border-bottom: 1px solid #dcdcdc;

      &:first-child {
        width: 116px;
        max-width: 116px;
        padding-left: 16px;
        background-color: #ececec;
        font-weight: bold;
      }

      &:last-child {
        flex: 1;
        padding-left: 16px;
      }
    }
  }
`;

export const CoinSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    justify-content: flex-end;

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 38px;

      .priceBold {
        font-size: 18px;
        font-weight: bold;
        color: #000;
      }

      span {
        margin-top: 4px;
        font-size: 12px;
        color: #8a8a8a;
      }
    }

    .percentage {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 38px;
      max-width: 60px;
      font-size: 12px;

      span {
        margin-top: 4px;

        &:first-child {
          font-size: 14px;
          font-weight: bold;
          line-height: 18px;
        }

        &:last-child {
          font-size: 12px;
        }

        &.up {
          color: #dc3545;
        }

        &.down {
          color: #007bff;
        }
      }
    }

    .totalPrice {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      span {
        font-size: 12px;

        &:first-child {
          margin-bottom: 4px;
        }
      }
    }
  }
`;

export const DetailCalc = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
  padding: 16px 16px 32px 16px;
  background-color: #d3d3d3;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const DetailCalcItems = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin-top: 16px;

  svg {
    height: 40px;
    width: 40px;
    margin: 0px 16px;
  }
`;

export const DetailCalcItem = styled.div`
  display: flex;
  height: 40px;
  width: 100%;

  &.left {
    justify-content: flex-end;
  }

  .calcResult {
    justify-content: flex-end !important;
    font-size: 12px;
    padding-right: 16px;
  }

  div {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #fff;

    &:first-child {
      width: 100px;
      max-width: 100px;
      padding-left: 16px;
      font-size: 14px;
      font-weight: bold;
      background-color: #ececec;
    }

    &:last-child {
      display: flex;
      justify-content: space-between;
      width: 200px;
    }

    input {
      height: 100%;
      width: 100%;
      padding-right: 16px;
      border: none;
      font-size: 12px;
      text-align: right;
    }
  }
`;

export const DetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;

  button {
    height: 40px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    margin-bottom: 16px;
  }
`;
