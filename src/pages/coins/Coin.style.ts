import styled from "styled-components";

export const CoinArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const CoinSearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  width: 100%;

  select {
    margin-right: 20px;
  }
`;

export const More = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  border-top: none;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
`;

export const Lists = styled.ul`
  margin-top: ${(props: { bookmarkView: boolean }) =>
    props.bookmarkView ? "40px" : "0px"};
  list-style: none;
`;

export const ListHeader = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  padding-right: 24px;
  background-color: #fafafa;

  span {
    font-size: 12px;
    font-weight: normal;
    color: #717171;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-right: 24px;
  border-bottom: 1px solid #f2f2f2;

  span {
    font-size: 12px;
  }
`;

export const Bookmark = styled.button`
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
`;

export const CoinIdHeader = styled.span`
  box-sizing: border-box;
  width: 240px;
  padding-left: 40px;
`;

export const CoinIdItem = styled.div`
  display: flex;
  align-items: center;
  width: 200px;

  span,
  a {
    width: 140px;
    color: #000;
    font-size: 12px;
    font-weight: bold;

    &:last-child {
      width: 60px;
      font-weight: normal;
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Price = styled.span`
  width: 120px;
  text-align: right;
  font-weight: bold;
`;

export const PercentageHeader = styled.span`
  width: 80px;
  text-align: right;
`;

export const Percentage = styled.span`
  width: 80px;
  text-align: right;
  color: ${(props: { isUp: boolean }) => (props.isUp ? "#dc3545" : "#007bff")};
`;

export const Volume = styled.span`
  width: 200px;
  text-align: right;
  font-weight: bold;
`;
