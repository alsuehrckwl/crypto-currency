import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../@shared/hooks/useStore/useStore";
import { CoinArea } from "../coins/Coin.style";
import CoinList from "../coins/coinList/CoinList";

export const Bookmark = observer(() => {
  const {
    getCoinBookmark,
    bookmarkList,
    loading,
    vs_currency,
    bookmarks,
    updateBookmark,
    getMoreCoins,
    viewFilter,
    moreLoading
  } = useStore("crypto");

  React.useEffect(() => {
    getCoinBookmark();
  }, [getCoinBookmark]);

  return (
    <CoinArea>
      <CoinList
        item={bookmarkList}
        loading={loading}
        vs_currency={vs_currency}
        bookmarks={bookmarks}
        updateBookmark={updateBookmark}
        moreCoins={getMoreCoins}
        viewFilter={viewFilter}
        moreLoading={moreLoading}
        bookmarkView={true}
      />
    </CoinArea>
  );
});
