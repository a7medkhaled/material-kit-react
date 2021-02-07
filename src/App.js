import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "src/components/GlobalStyles";
import "src/mixins/chartjs";
import theme from "src/theme";
import routes from "src/routes";
import i18n from "./i18/i18n";
import withRoot from "./withroot";

const App = () => {
  document.body.dir = i18n.dir();
  // const theme = useTheme();
  theme.direction = i18n.dir();
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default withRoot(App);
