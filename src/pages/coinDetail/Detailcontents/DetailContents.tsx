import * as React from "react";
import { ReactComponent as StarIcon } from "../../../assets/svg/start.svg";
import { ReactComponent as ExchangeIcon } from "../../../assets/svg/exchange.svg";
import {
  DetailContent,
  DetailHeader,
  DetailInfo,
  CoinTable,
  CoinSummary,
  DetailDescription,
  DetailCalc,
  DetailCalcItems,
  DetailCalcItem,
} from "../CoinDetail.style";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

interface IProps {
  item: any;
}

export const DetailContents: React.FC<IProps> = observer(({ item }) => {
  const {
    coinId,
    image,
    rank,
    homepage,
    price,
    description,
    name,
    changeCurrency,
    currentCurrency,
    priceForBtc,
    percentFor24h,
    percentForAth,
    totalVolume,
    marketCap,
    calcArr,
    currenyInput,
    onChangeCalcValue,
    cryptoInput,
    isBookmark,
    onClickBookmark,
  } = item;
  const [openDescription, toggleDescription] = React.useState(false);

  return (
    <DetailContent>
      <DetailHeader isBookmark={isBookmark}>
        <div>
          <button onClick={() => onClickBookmark(coinId, isBookmark)}>
            <StarIcon />
          </button>
          <img src={image} alt={name} />
          <span>{name}</span>
        </div>
        <select
          name="currency"
          id="curreny"
          value={currentCurrency}
          onChange={(e) => changeCurrency(e.target.value)}
        >
          <option value="krw">KRW 보기</option>
          <option value="usd">USD 보기</option>
        </select>
      </DetailHeader>

      <DetailInfo>
        <CoinTable>
          <div className="row">
            <div>시가총액 Rank</div>
            <div>{`Rank #${rank}`}</div>
          </div>
          <div className="row">
            <div>웹사이트</div>
            <div>
              <a href={homepage}>{homepage}</a>
            </div>
          </div>
        </CoinTable>
        <CoinSummary>
          <div>
            <div className="price">
              <span className="priceBold">{price}</span>
              <span>{priceForBtc}</span>
            </div>
            <div className="percentage">
              <span className={clsx(percentFor24h.isUp ? "up" : "down")}>
                {percentFor24h.value}
              </span>
              <span className={clsx(percentForAth.isUp ? "up" : "down")}>
                {percentForAth.value}
              </span>
            </div>
          </div>
          <div>
            <div className="totalPrice">
              <span>시가총액</span>
              <span>{marketCap}</span>
            </div>
            <div className="totalPrice">
              <span>24시간 거래대금</span>
              <span>{totalVolume}</span>
            </div>
          </div>
        </CoinSummary>
      </DetailInfo>

      <DetailCalc>
        <p>가격 계산</p>
        <DetailCalcItems>
          <DetailCalcItem className="left">
            <div>{calcArr[0]}</div>
            <div>
              <input
                type="text"
                value={cryptoInput}
                onChange={(e) => onChangeCalcValue(e.target.value, "crypto")}
              />
            </div>
          </DetailCalcItem>
          <ExchangeIcon />
          <DetailCalcItem>
            <div>{calcArr[1]}</div>
            <div>
              <input
                type="text"
                value={currenyInput}
                onChange={(e) => onChangeCalcValue(e.target.value, "currency")}
              />
            </div>
          </DetailCalcItem>
        </DetailCalcItems>
      </DetailCalc>

      <DetailDescription>
        <button onClick={() => toggleDescription(!openDescription)}>
          설명보기
        </button>

        {openDescription && <span>{description}</span>}
      </DetailDescription>
    </DetailContent>
  );
});
