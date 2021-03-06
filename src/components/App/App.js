import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { renderRoutes } from "react-router-config";
// import { hot } from "react-hot-loader";
import PopMessage from "containers/PopMessage";
import { appContainer } from "./styles.scss";

const config = {
  htmlAttributes: { lang: "en" },
  title: "Webpack-React-Boilerplate",
  titleTemplate: "SSR - %s",
  meta: [
    {
      name: "description",
      content: "The best react universal starter boilerplate in the world."
    }
  ]
};

export const App = ({ route: { routes } }) => (
  <div className={appContainer}>
    <Helmet {...config} />
    <PopMessage />
    {renderRoutes(routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.shape({
    component: PropTypes.func,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        exact: PropTypes.bool,
        component: PropTypes.func,
        loadReduxStore: PropTypes.func,
        loadInitState: PropTypes.func
      })
    )
  })
};

// export default hot(module)(App);
export default App;
