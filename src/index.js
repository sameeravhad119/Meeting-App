import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

window.store = store;
const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: 'http://smart-meeting.herokuapp.com/',
  // uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
