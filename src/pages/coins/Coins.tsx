import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../@shared/hooks/useStore/useStore";
import CoinList from "./coinList/CoinList";
import { CoinArea, CoinSearchBar } from "./Coin.style";

export const Coins = observer(() => {
  const {
    list,
    getCoinList,
    per_page,
    changePerPage,
    viewFilter,
    changeVsCurrency,
    changeViewFilter,
    vs_currency,
    loading,
    bookmarks,
    updateBookmark,
    getMoreCoins,
    moreLoading
  } = useStore("crypto");

  React.useEffect(() => {
    getCoinList();
  }, [getCoinList]);

  return (
    <CoinArea>
      <CoinSearchBar>
        <select
          name="viewFilter"
          id="viewFilter"
          value={viewFilter}
          onChange={(e) => changeViewFilter(e.target.value)}
        >
          <option value="all">전체보기</option>
          <option value="bookmark">북마크보기</option>
        </select>
        <select
          name="vsCurrency"
          id="vsCurrency"
          value={vs_currency}
          onChange={(e) => changeVsCurrency(e.target.value)}
        >
          <option value="krw">KRW 보기</option>
          <option value="usd">USD 보기</option>
        </select>
        <select
          name="perPage"
          id="perPage"
          value={per_page}
          onChange={(e) => changePerPage(e.target.value)}
        >
          <option value={10}>10개 보기</option>
          <option value={30}>30개 보기</option>
          <option value={50}>50개 보기</option>
        </select>
      </CoinSearchBar>
      <CoinList
        item={list}
        loading={loading}
        vs_currency={vs_currency}
        bookmarks={bookmarks}
        updateBookmark={updateBookmark}
        moreCoins={getMoreCoins}
        viewFilter={viewFilter}
        moreLoading={moreLoading}
      />
    </CoinArea>
  );
});
