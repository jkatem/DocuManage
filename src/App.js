import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getMatters } from './redux/actions/mattersActions';
import { connect } from 'react-redux'
import MattersContainer from './containers/MattersContainer'; 
import Sidebar from './components/Sidebar';
import { Home } from './components/home'


class App extends React.Component {

  componentDidMount() {
    // fetch('http://localhost:3000/api/v1/matters')
    this.props.getMattersWithDispatch()
  }

 
  render() {
    // console.log(this.props)

    return (
      <React.Fragment>
        <Router>
       
            <NavBar />

            <Sidebar />

            <Switch>
              <Route exact path="/matters" render={props => ( <MattersContainer { ...props} /> )} />
            </Switch>


        </Router>
      </React.Fragment>

    )
  }
}

// const mSTP = (state) => ({ state })


const mDTP = (dispatch) => {
  return {
    getMattersWithDispatch: () => dispatch(getMatters())
  }
}


export default connect(null, mDTP)(App)
