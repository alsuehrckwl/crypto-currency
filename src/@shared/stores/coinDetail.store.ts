import autobind from "autobind-decorator";
import { action, computed, observable } from "mobx";
import { asyncAction } from "mobx-utils";
import { getCoinById } from "../service/coins.service";
import { makeComma } from "../util";
import {
  addKeyLocalStorage,
  getAsyncLocalStorage,
  removeKeyLocalStorage,
} from "../util/loacalStorageUtil";

@autobind
export class CoinDetailStore {
  toast: IToastStore | null = null;

  @observable
  loading = true;

  @observable
  detail: any = {};

  @observable
  currentCurrency = "krw";

  @observable
  cryptoInput = "";

  @observable
  currenyInput = "";

  @observable
  bookmarks: string[] = [];

  @observable
  coinId = "";

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
  get name() {
    const { detail } = this;

    return `${detail.localization.ko} (${detail.symbol.toUpperCase()})`;
  }

  @computed
  get image() {
    const { detail } = this;

    return detail.image.thumb;
  }

  @computed
  get rank() {
    const { detail } = this;

    return detail.market_data.market_cap_rank;
  }

  @computed
  get homepage() {
    const { detail } = this;

    return detail.links.homepage[0];
  }

  @computed
  get price() {
    const { detail, currentCurrency } = this;
    const { market_data } = detail;
    const { current_price } = market_data;
    const { krw, usd } = current_price;

    if (currentCurrency === "krw") {
      return `₩${makeComma(krw)}`;
    } else {
      return `$${makeComma(usd)}`;
    }
  }

  @computed
  get priceForBtc() {
    const { detail } = this;
    const btc = detail.market_data.current_price.btc;

    return `${btc.toFixed(8)} BTC`;
  }

  @computed
  get percentFor24h() {
    const { detail } = this;
    const { market_data } = detail;
    const { price_change_percentage_24h } = market_data;

    return {
      value: `${price_change_percentage_24h.toFixed(1)}%`,
      isUp: Math.sign(price_change_percentage_24h) > 0 ? true : false,
    };
  }

  @computed
  get percentForAth() {
    const { detail } = this;
    const { market_data } = detail;
    const { price_change_24h_in_currency } = market_data;
    const { btc } = price_change_24h_in_currency;

    return {
      value: `${btc.toFixed(1)}%`,
      isUp: Math.sign(btc) > 0 ? true : false,
    };
  }

  @computed
  get marketCap() {
    const { detail, currentCurrency } = this;
    const { market_data } = detail;
    const { market_cap } = market_data;
    const { krw, usd } = market_cap;

    if (currentCurrency === "krw") {
      return `₩${makeComma(krw)}`;
    } else {
      return `$${makeComma(usd)}`;
    }
  }

  @computed
  get totalVolume() {
    const { detail, currentCurrency } = this;
    const { market_data } = detail;
    const { total_volume } = market_data;
    const { krw, usd } = total_volume;

    if (currentCurrency === "krw") {
      return `₩${makeComma(krw)}`;
    } else {
      return `$${makeComma(usd)}`;
    }
  }

  @computed
  get description() {
    const { detail } = this;

    return detail.description.ko;
  }

  @computed
  get calcArr() {
    const { currentCurrency, detail } = this;
    const symbol = detail.symbol.toUpperCase();

    if (currentCurrency === "krw") {
      return [symbol, "KRW"];
    } else {
      return [symbol, "USD"];
    }
  }

  @computed
  get calcValue() {
    const { detail, currentCurrency, cryptoInput } = this;
    const { market_data } = detail;
    const { current_price } = market_data;
    const { krw, usd } = current_price;

    if (+cryptoInput > 0) {
      if (currentCurrency === "krw") {
        return makeComma(+cryptoInput * +krw);
      } else {
        return makeComma(+cryptoInput * +usd);
      }
    } else {
      return "";
    }
  }

  @computed
  get isBookmark() {
    return Boolean(~this.bookmarks.indexOf(this.coinId));
  }

  /************************************************
   *
   * action
   *
   ************************************************/
  @action
  changeCurrency(currency: string) {
    this.currentCurrency = currency;

    this.onChangeCalcValue(this.cryptoInput, "crypto");
  }

  @action
  onChangeCalcValue(value: string, type: string) {
    const { detail, currentCurrency, cryptoInput } = this;
    const { market_data } = detail;
    const { current_price } = market_data;
    const { krw, usd } = current_price;
    const currency = currentCurrency === "krw" ? krw : usd;
    const regexOnlyNumber = /[^0-9.]/g;
    const regexFloatEight = /[0-9]*\.?[0-9]{8}/g;
    const text = value.replace(regexOnlyNumber, "");

    if (text.length > 0) {
      const split = text.split("");
      let dotCount = 0;

      for (let i = 0; i < split.length; i++) {
        if (split[i] === ".") {
          dotCount++;
        }

        if (dotCount > 1) {
          break;
        }
      }

      if (dotCount > 1) {
        alert("소수점은 한번만 입력 가능합니다.");
        return;
      }
    }

    if (type === "crypto" && regexFloatEight.test(text)) {
      alert("소수점은 최대 8자리까지 가능합니다.");
      return;
    }

    if (type === "currency" && currentCurrency === "krw" && +text <= 0) {
      alert("krw는 0으로 시작할 수 없습니다.");
      return;
    }

    if (type === "crypto") {
      const cryptoValue = text;

      this.cryptoInput = cryptoValue;
      this.currenyInput = makeComma(+cryptoValue * currency);
    } else {
      const calcCrypto = +text / currency;

      this.cryptoInput = calcCrypto.toFixed(8);
      this.currenyInput = text;
    }
  }

  @action
  onClickBookmark(id: string, isBookmark: boolean) {
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
  async *getCoinDetail(coinId: string) {
    this.loading = true;
    this.coinId = coinId;

    try {
      const result = yield getCoinById(coinId);

      this.detail = result;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
