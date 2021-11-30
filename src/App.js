import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import About from "./Components/About";
import Blog from "./Components/Blog";
//Components
import Main from "./Components/Main";
import MySkills from "./Components/MySkills";
import { lightTheme } from "./Components/Themes";
import Work from "./Components/Work";
import GlobalStyles from "./globalStyled";

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/skills" component={MySkills} />
        </Switch>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
