import React from 'react'
import { connect } from 'react-redux'
import Matter from '../components/matters/Matter'

const MattersContainer = (props) => {
  // debugger
  return (
    <div>
      {props.mattersArr.map(matter => 
        <Matter matter={matter} />)}

    </div>
  )
}

const mSTP = state => {

  return {    
    mattersArr: state.matterReducer.matters
    // loading: state.matterReducer.loading
  }
}

export default connect(mSTP)(MattersContainer);