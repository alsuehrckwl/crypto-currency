import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../@shared/hooks/useStore/useStore";
import CoinList from "./coinList/CoinList";
import { CoinArea, CoinSearchBar } from "./Coin.style";

export const Coins = observer(() => {
  const store = useStore("crypto");

  React.useEffect(() => {
    store.getCoinList();
  }, []);

  return (
    <CoinArea>
      <CoinSearchBar>
        <select
          name="viewFilter"
          id="viewFilter"
          value={store.viewFilter}
          onChange={(e) => store.changeViewFilter(e.target.value)}
        >
          <option value="all">전체보기</option>
          <option value="bookmark">북마크보기</option>
        </select>
        <select
          name="vsCurrency"
          id="vsCurrency"
          value={store.vs_currency}
          onChange={(e) => store.changeVsCurrency(e.target.value)}
        >
          <option value="krw">KRW 보기</option>
          <option value="usd">USD 보기</option>
        </select>
        <select
          name="perPage"
          id="perPage"
          value={store.per_page}
          onChange={(e) => store.changePerPage(e.target.value)}
        >
          <option value={10}>10개 보기</option>
          <option value={30}>30개 보기</option>
          <option value={50}>50개 보기</option>
        </select>
      </CoinSearchBar>
      <CoinList
        item={store.list}
        loading={store.loading}
        vs_currency={store.vs_currency}
        bookmarks={store.bookmarks}
        updateBookmark={store.updateBookmark}
        moreCoins={store.getMoreCoins}
        viewFilter={store.viewFilter}
        moreLoading={store.moreLoading}
      />
    </CoinArea>
  );
});
