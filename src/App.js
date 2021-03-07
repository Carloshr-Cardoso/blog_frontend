// Necessary Libraries & CSS
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Screens
import Home from './screens/home';
import AddingPost from './screens/addingPost';

//Components
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/home"> <Home/> </Route>
          <Route path="/create"> <AddingPost/> </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
