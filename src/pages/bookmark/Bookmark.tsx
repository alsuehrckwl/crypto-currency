import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../@shared/hooks/useStore/useStore";
import { CoinArea } from "../coins/Coin.style";
import CoinList from "../coins/coinList/CoinList";

export const Bookmark = observer(() => {
  const store = useStore("crypto");

  React.useEffect(() => {
    store.getCoinBookmark();
  }, []);

  return (
    <CoinArea>
      <CoinList
        item={store.bookmarkList}
        loading={store.loading}
        vs_currency={store.vs_currency}
        bookmarks={store.bookmarks}
        updateBookmark={store.updateBookmark}
        moreCoins={store.getMoreCoins}
        viewFilter={store.viewFilter}
        moreLoading={store.moreLoading}
        bookmarkView={true}
      />
    </CoinArea>
  );
});
