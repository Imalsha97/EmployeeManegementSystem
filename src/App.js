
import './App.css';

import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import ListComponent from './components/ListComponent';
import FooterComponent from './components/FooterComponent';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';
import ViewComponent from './components/ViewComponent';

function App() {
  return (
    <div>
      <Router>
       
            <HeaderComponent />
              <div className="container">
                <Switch>
                  <Route path = "/" exact component = {ListComponent}></Route>
                  <Route path = "/departures" component = {ListComponent}></Route>
                  <Route path = "/add-departure" component = {CreateComponent}></Route>
                  <Route path = "/update-departure/:departureId" component = {UpdateComponent}></Route>
                  <Route path = "/view-departure/:departureId" component = {ViewComponent}></Route>
                
                </Switch>
                
              </div>
            <FooterComponent/>
        
      </Router>
    </div>
    
  );
}

export default App;
