import React from "react";
import { Provider } from "./@shared/stores";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Coins } from "./pages/coins";
import { Bookmark } from "./pages/bookmark";
import { Header } from "./@shared/components/header";
import styled from "styled-components";
import { CoinDetail } from "./pages/coinDetail";
import { Toast } from "./@shared/components/toast";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Contents = styled.div`
  height: 100%;
  width: 820px;
  margin: 32px 0px;
`;

const Main = () => {
  return <Redirect to="/coins" path="/" />;
};

function App() {
  return (
    <Provider>
      <Wrapper>
        <Contents>
          <Router>
            <Switch>
              <Route exact path="/coins/:id" component={CoinDetail} />
              <Route>
                <Header />
                <Route path="/" component={Main} />
                <Route path="/coins" component={Coins} />
                <Route path="/bookmark" component={Bookmark} />
              </Route>
            </Switch>
            <Toast />
          </Router>
        </Contents>
      </Wrapper>
    </Provider>
  );
}

export default App;
