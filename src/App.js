import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import MattersContainer from './containers/MattersContainer';
import Sidebar from './components/Sidebar';
import { fetchMatters } from './redux/actions/mattersActions';
import { getTasks } from './redux/actions/tasksActions'
import MatterForm from './components/matters/MatterForm';
import Matter from './components/matters/Matter'
import Home from './components/home';
import TasksContainer from './containers/TasksContainer';
import TaskItem from './components/tasks/TaskItem'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchMatters();
  }


  render() {

    return (
      <React.Fragment>          
            <NavBar />
            <Sidebar />
            <div className="matters-container">
            <Switch>
             
                <Route exact path='/' component={Home} />
                <Route exact path="/matters">
                  <MattersContainer matters={this.props.matters}/>
                </Route>
                <Route path="/matters/new" component={MatterForm} />
                <Route path="/matters/:id" render={(routerProps) => {
                  const matterId = parseInt(routerProps.match.params.id)
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
                <Route exact path='/tasks' component={TasksContainer} />
                <Route path="/tasks/:id" render={(routerProps) => {
                  const taskId = parseInt(routerProps.match.params.id)
                  const taskObj = this.props.tasks.find(taskArrObj => taskArrObj.id === taskId)
                  if (taskObj) {
                    return (
                      <TaskItem 
                        key={taskObj.id}
                        tasks={taskObj}
                        {...routerProps}
                      />
                    )} 
                  }
                }/>
                             
            </Switch>
            </div>   
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return ({
    matters: state.matterReducer.matters,
    tasks: state.tasksReducer.tasks
  })
}


export default connect(mapStateToProps, {fetchMatters, getTasks })(App)
