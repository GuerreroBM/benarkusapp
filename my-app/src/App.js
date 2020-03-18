import React from 'react';
import './App.css';
import ContactLists from './components/ContactLists.tsx';
import ViewContact from './components/ViewContact.tsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <div className="App">
          <Route path="/" component={ContactLists} exact />          
          <Route path="/contact/:id" component={ViewContact} />
        </div>
      </Switch>
    </main>
  )
}

export default App;
