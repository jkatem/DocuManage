import React from 'react';
import { connect } from 'react-redux'
import MattersContainer from '../containers/MattersContainer';
import '../css/Home.css';

class Home extends React.Component {

    render() {
        return (
           <>
               {/* <MattersContainer /> */}
           </>
        )
    }
}

const mapStateToProps = state => {
    return {
        matters: state.matterReducer.matters
    }
}

export default connect(mapStateToProps)(Home)