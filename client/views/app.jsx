import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Homes from "./homes.jsx";
import Lots from "./lots.jsx";
import Modal from "./modal.jsx"
import { loadHomePlans } from '../redux/thunks.js'

const App = () => {

  const dispatch = useDispatch();
  const { homePlans } = useSelector(state => state.homePlans || [])

  useEffect(() => {
    dispatch(loadHomePlans())
  }, [])

  return (
    <div className='mainPage'>
      <div className='nav'>
        <ul>
          <li>
            <Link to="/homes">Home Plans</Link>
          </li>
          <li>
            <Link to="/lots">Lots</Link>
          </li>
        </ul>
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/homes">
            <Homes />
          </Route>
          <Route path="/lots">
            <Lots />
          </Route>
          <Route path="/modal/:id">
            <Modal />
          </Route>
        </Switch>
    </div>
  )
}

export default App;