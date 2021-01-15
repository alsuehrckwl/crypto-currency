import autobind from "autobind-decorator";
import { computed, observable } from "mobx";
import { ICoinStore } from "../../interface/coin";
import { makeComma } from "../../util";

@autobind
class CryptoModel implements ICoinStore {
  @observable id: string;
  @observable symbol: string;
  @observable name: string;
  @observable current_price: number;
  @observable total_volume: number;
  @observable price_change_percentage_1h_in_currency: number;
  @observable price_change_percentage_7d_in_currency: number;
  @observable price_change_percentage_24h_in_currency: number;

  constructor(data: ICoinStore) {
    this.id = data.id;
    this.symbol = data.symbol;
    this.name = data.name;
    this.current_price = data.current_price;
    this.total_volume = data.total_volume;
    this.price_change_percentage_1h_in_currency =
      data.price_change_percentage_1h_in_currency;
    this.price_change_percentage_7d_in_currency =
      data.price_change_percentage_7d_in_currency;
    this.price_change_percentage_24h_in_currency =
      data.price_change_percentage_24h_in_currency;
  }

  /************************************************
   *
   * computed
   *
   ************************************************/
  @computed
  get priceKrw() {
    const { current_price } = this;

    return `₩${makeComma(current_price)}`;
  }

  @computed
  get priceUsd() {
    const { current_price } = this;

    return `$${makeComma(+current_price.toFixed(2))}`;
  }

  @computed
  get totalVolumeKrw() {
    const { total_volume } = this;

    return `₩${makeComma(total_volume)}`;
  }

  @computed
  get totalVolumeUsd() {
    const { total_volume } = this;

    return `$${makeComma(+total_volume.toFixed(2))}`;
  }

  @computed
  get percentage() {
    const h1 = +this.price_change_percentage_1h_in_currency;
    const h24 = +this.price_change_percentage_24h_in_currency;
    const d7 = +this.price_change_percentage_7d_in_currency;

    let result = {
      "1h": {
        value: h1.toFixed(1),
        isUp: false,
      },
      "24h": {
        value: h24.toFixed(1),
        isUp: false,
      },
      "7d": {
        value: d7.toFixed(1),
        isUp: false,
      },
    };

    for (let [, v] of Object.entries(result)) {
      v.isUp = Math.sign(+v.value) > 0 ? true : false;
      v.value = `${v.value}%`;
    }

    return result;
  }

  /************************************************
   *
   * action
   *
   ************************************************/
}

export default CryptoModel;
