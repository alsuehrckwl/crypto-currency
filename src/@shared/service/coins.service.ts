import { AxiosResponse } from "axios";
import api from "../api";

export const getCoins = () =>
  api
    .get("coins/list")
    .then((res: AxiosResponse) => res.data)
    .catch((err) => err.reponse);

export const getCoinsMarkets = (params: any) =>
  api
    .get("coins/markets", { params })
    .then((res: AxiosResponse) => res.data)
    .catch((err) => err.reponse);

export const getCoinById = (id: string) =>
  api
    .get(`coins/${id}`)
    .then((res: AxiosResponse) => res.data)
    .catch((err) => err.reponse);
