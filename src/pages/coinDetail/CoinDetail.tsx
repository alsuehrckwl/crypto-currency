import * as React from "react";
import { useStore } from "../../@shared/hooks/useStore/useStore";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react-lite";
import { DetailArea } from "./CoinDetail.style";
import { DetailContents } from "./Detailcontents/DetailContents";
import { Loader } from "../../@shared/components/loader";

interface IProps {
  id: string;
}

export const CoinDetail: React.FC<RouteComponentProps<IProps>> = observer(
  (props) => {
    const store = useStore("coinDetail");
    const { getCoinDetail, loading } = store;

    React.useEffect(() => {
      const { id } = props.match.params;

      getCoinDetail(id);
    }, [getCoinDetail, props.match.params]);

    return (
      <DetailArea>
        {loading ? <Loader /> : <DetailContents item={store} />}
      </DetailArea>
    );
  }
);
