import autobind from "autobind-decorator";
import { action, computed, observable } from "mobx";
import { asyncAction } from "mobx-utils";
import { ICoinStore } from "../interface/coin";
import { getCoinsMarkets } from "../service/coins.service";
import {
  addKeyLocalStorage,
  getAsyncLocalStorage,
  removeKeyLocalStorage,
} from "../util/loacalStorageUtil";
import CryptoModel from "./model/cryptoModel";

@autobind
export class CryptoStore {
  toast: IToastStore | null = null;
  order = "market_cap_desc";

  @observable
  loading: boolean = false;

  @observable
  moreLoading: boolean = false;

  @observable
  list: ICoinStore[] = [];

  @observable
  viewFilter = "all";

  @observable
  vs_currency = "krw"; // krw || usd

  @observable
  per_page = 50; // 10 | 30 | 50

  @observable
  page = 1;

  @observable
  bookmarks: string[] = [];

  constructor(toast: IToastStore) {
    this.toast = toast;

    getAsyncLocalStorage("bookmark").then((success: any) => {
      this.bookmarks = success;
    });
  }

  /************************************************
   *
   * computed
   *
   ************************************************/
  @computed
  get bookmarkList() {
    return this.list.filter((item) => this.bookmarks.includes(item.id));
  }

  /************************************************
   *
   * action
   *
   ************************************************/
  @action
  changeViewFilter(view: string) {
    this.viewFilter = view;

    this.getCoinList();
  }

  @action
  changeVsCurrency(currency: string) {
    this.vs_currency = currency;

    this.getCoinList();
  }

  @action
  changePerPage(value: string) {
    let size = +value;

    this.per_page = size;

    this.getCoinList();
  }

  @action
  updateBookmark(id: string, isBookmark: boolean) {
    if (isBookmark) {
      removeKeyLocalStorage("bookmark", id);
    } else {
      addKeyLocalStorage("bookmark", id);
    }

    this.toast?.setToast(isBookmark);

    getAsyncLocalStorage("bookmark").then((success: any) => {
      this.bookmarks = success;
    });
  }

  /************************************************
   *
   * async action
   *
   ************************************************/
  @asyncAction
  async *getCoinList() {
    this.loading = true;

    try {
      const {
        vs_currency,
        per_page,
        order,
        page,
        bookmarks,
        viewFilter,
      } = this;

      let params: {
        vs_currency: string;
        order: string;
        per_page: number;
        page: number;
        price_change_percentage: string;
        ids?: string;
      } = {
        vs_currency,
        order,
        per_page,
        page,
        price_change_percentage: "1h,24h,7d",
      };

      if (viewFilter === "bookmark") {
        params["ids"] = bookmarks.join(",");
      }

      const result = yield getCoinsMarkets(params);

      this.list = result.map((item: ICoinStore) => new CryptoModel(item));
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  @asyncAction
  async *getMoreCoins() {
    this.moreLoading = true;

    try {
      const { vs_currency, per_page, order, page } = this;

      let nextPage = page + 1;

      let params: {
        vs_currency: string;
        order: string;
        per_page: number;
        page: number;
        price_change_percentage: string;
        ids?: string;
      } = {
        vs_currency,
        order,
        per_page,
        page: nextPage,
        price_change_percentage: "1h,24h,7d",
      };

      const result = yield getCoinsMarkets(params);

      const moreList = result.map((item: ICoinStore) => new CryptoModel(item));

      this.list = [...this.list, ...moreList];
    } catch (error) {
      console.log(error);
    } finally {
      this.moreLoading = false;
    }
  }

  @asyncAction
  async *getCoinBookmark() {
    this.loading = true;

    try {
      const { vs_currency, per_page, order, page, bookmarks } = this;

      const result = yield getCoinsMarkets({
        vs_currency,
        order,
        per_page,
        page,
        price_change_percentage: "1h,24h,7d",
        ids: bookmarks.join(","),
      });

      this.list = result.map((item: ICoinStore) => new CryptoModel(item));
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
