import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Header from "./components/common/Header";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

const App = () => {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/courses' component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
};

export default App;
