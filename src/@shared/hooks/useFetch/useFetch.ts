import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

export interface Response<T = object> {
  loading: boolean;
  data: T | null;
  error: boolean;
  status: number;
  message?: string;
}

export const useFetch = <T>(fetchData: Promise<AxiosResponse<T>>) => {
  const [fetched, setFetched] = useState<Response<T>>({
    loading: true,
    data: null,
    error: false,
    status: 200,
    message: '',
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await fetchData;
        const { data, status } = result;

        setFetched({
          loading: false,
          data,
          error: false,
          message: 'OK',
          status,
        });
      } catch (error) {
        if (!error.response) {
          setFetched({
            loading: false,
            data: error,
            error: true,
            message: error.message,
            status: 400,
          });
        }

        const { data, status } = error.response;
        const message = Array.isArray(data.errors)
          ? data.errors[0].msg || data.errors[0]
          : data.errors;

        setFetched({
          loading: false,
          data,
          error: true,
          message,
          status: status,
        });
      }
    };

    fetch();
  }, [fetchData]);

  return fetched;
};
