import React from "react";
import Header from "./header/Header.component";
import QuizComponent from "./quiz/Quiz.components";
import { Route, Switch } from "react-router-dom";
import CreateComponent from "./create/Create.components";
import NotFoundComponent from "./notFound/NotFound.component";
import NavBar from "./navbar/NavBar.component";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Switch>
        <Route exact path="/" component={QuizComponent}></Route>
        <Route path="/create" component={CreateComponent}></Route>
        <Route component={NotFoundComponent} />
      </Switch>
    </>
  );
}

export default App;
