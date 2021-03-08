import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  SearchBar from './components/SearchBar'
import { connect } from 'react-redux'
import MattersContainer from './containers/MattersContainer';
import Sidebar from './components/Sidebar';
import { fetchMatters } from './redux/actions/mattersActions';
import MatterForm from './components/matters/MatterForm';
import Matter from './components/matters/Matter'
import Home from './components/home';
import TasksContainer from './containers/TasksContainer';


class App extends React.Component {

  state = {
    filteredMatter: [],
  }

  componentDidMount(){
    this.props.fetchMatters();
  }

 


  render() {
 
    

    return (

      <React.Fragment>
        
        <Router>      
            <NavBar matters={this.state.matters}/>
            
            <Sidebar />
            <Switch>
              <div className="matters-container">
                <Route exact path='/' component={Home} />
                <Route exact path="/matters">
                    <MattersContainer />
                </Route>
                <Route exact path="/matters/new" render={(routerProps) => <MatterForm {...routerProps} />} />
                <Route exact path="/matters/:id" render={(routerProps) => {
                  const matterId = parseInt(routerProps.match.params.id)
                  // debugger
                  const matterObj = this.props.matters.find(matterArrObj => matterArrObj.id === matterId)
                  
                  if (matterObj) {
                    return (
                      <Matter key={matterObj.id}
                              matters={matterObj}
                              {...routerProps}
                      />
                      )
                  } 
                }
                }/>
                <Route path='/tasks' component={TasksContainer} />
              </div> 
                  
            </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return ({
    matters: state.matterReducer.matters
  })
}


// const mDTP = dispatch => {
//   return {
//     fetchMatters: () => dispatch(fetchMatters()),

//     // deleteMatter: () => dispatch(deleteMatter())
//   }
// }


export default connect(mapStateToProps, {fetchMatters})(App)
