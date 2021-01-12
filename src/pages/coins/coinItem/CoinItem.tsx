import * as React from "react";
import { observer } from "mobx-react-lite";
import { ICoinStore } from "../../../@shared/interface/coin";
import {
  ListItem,
  CoinIdItem,
  Price,
  Bookmark,
  Percentage,
  Volume,
} from "../Coin.style";
import { ReactComponent as StarIcon } from "../../../assets/svg/start.svg";
import { Link } from "react-router-dom";

interface IProps {
  item: ICoinStore;
  vs_currency: string;
  isBookmark: boolean;
  updateBookmark(id: string, isBookmark: boolean): void;
}

const CoinItem: React.FC<IProps> = observer(
  ({ item, vs_currency, isBookmark, updateBookmark }) => {
    const {
      name,
      symbol,
      priceKrw,
      priceUsd,
      percentage,
      totalVolumeKrw,
      totalVolumeUsd,
      id,
    } = item;

    const onClickBookmark = () => {
      updateBookmark(id, isBookmark);
    };

    return (
      <ListItem>
        <Bookmark isBookmark={isBookmark} onClick={onClickBookmark}>
          <StarIcon />
        </Bookmark>
        <CoinIdItem>
          <Link to={`/coins/${id}`}>{name}</Link>
          <span>{symbol}</span>
        </CoinIdItem>
        <Price>{vs_currency === "krw" ? priceKrw : priceUsd}</Price>
        <Percentage isUp={percentage["1h"].isUp}>
          {percentage["1h"].value}
        </Percentage>
        <Percentage isUp={percentage["24h"].isUp}>
          {percentage["24h"].value}
        </Percentage>
        <Percentage isUp={percentage["7d"].isUp}>
          {percentage["7d"].value}
        </Percentage>
        <Volume>
          {vs_currency === "krw" ? totalVolumeKrw : totalVolumeUsd}
        </Volume>
      </ListItem>
    );
  }
);

export default CoinItem;
