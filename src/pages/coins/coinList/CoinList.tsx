import * as React from "react";
import CoinItem from "../coinItem/CoinItem";
import { ICoinStore } from "../../../@shared/interface/coin";
import {
  ListHeader,
  CoinIdHeader,
  Price,
  PercentageHeader,
  Volume,
  More,
  Lists,
} from "../Coin.style";
import { Loader, SmallLoader } from "../../../@shared/components/loader";

interface IProps {
  item: ICoinStore[];
  loading: boolean;
  vs_currency: string;
  bookmarks: string[];
  updateBookmark(id: string, isBookmark: boolean): void;
  moreCoins(): void;
  viewFilter: string;
  moreLoading: boolean;
  bookmarkView?: boolean;
}

const CoinList: React.FC<IProps> = ({
  item,
  loading,
  vs_currency,
  bookmarks,
  updateBookmark,
  moreCoins,
  viewFilter,
  moreLoading,
  bookmarkView = false,
}) => {
  const [items, setItems] = React.useState<ICoinStore[]>([]);

  React.useEffect(() => {
    if (!loading) {
      setItems(item);
    }
  }, [loading, item]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Lists bookmarkView={bookmarkView}>
      <ListHeader>
        <CoinIdHeader>자산</CoinIdHeader>
        <Price>price</Price>
        <PercentageHeader>1H</PercentageHeader>
        <PercentageHeader>24H</PercentageHeader>
        <PercentageHeader>7D</PercentageHeader>
        <Volume>24H Volume</Volume>
      </ListHeader>
      {items.map((item) => (
        <CoinItem
          key={item.id}
          item={item}
          vs_currency={vs_currency}
          isBookmark={bookmarks.includes(item.id)}
          updateBookmark={updateBookmark}
        />
      ))}
      {viewFilter === "all" && items.length > 0 && (
        <More onClick={moreCoins}>
          {moreLoading ? <SmallLoader /> : "더보기"}
        </More>
      )}
    </Lists>
  );
};

export default CoinList;
