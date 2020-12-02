import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'
import MattersContainer from './containers/MattersContainer'; 

import Sidebar from './components/Sidebar';
import { fetchMatters } from './redux/actions/mattersActions';
import MatterForm from './components/matters/MatterForm';
import Matter from './components/matters/Matter'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchMatters()
  }

 
  render() {
    // console.log(this.props)

    return (
      <React.Fragment>
        <Router>      
            <NavBar />
            <Sidebar />
            <Switch>
              <div className="matters-container">
                {/* <Route exact path="/matters" render={(routerProps) => {(<MattersContainer { ...routerProps}/>}/> */}
                <Route exact path="/matters" component={MattersContainer} />
                <Route exact path="/matters/new" render={(routerProps) => <MatterForm {...routerProps} />} />
                <Route exact path="/matters/:id" render={(routerProps) => {
                  const matterId = parseInt(routerProps.match.params.id)
                  // debugger
                  const matterObj = this.props.state.matterReducer.matters.find(matterArrObj => matterArrObj.id === matterId)
                  
                  if (matterObj) {
                    return (
                      <Matter key={matterObj.id}
                              matters={matterObj}
                               />
                    )
                  }
                }
                } />
              </div>
             

            </Switch>


        </Router>
      </React.Fragment>

    )
  }
}

const mSTP = (state) => ({ state })


const mDTP = dispatch => {
  return {
    fetchMatters: () => dispatch(fetchMatters())
  }
}


export default connect(mSTP, mDTP)(App)
