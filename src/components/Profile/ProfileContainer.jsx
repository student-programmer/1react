import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";
class ProfileContainer extends React.Component{
    componentDidMount(){

    }
    render(){
        return (
           <Profile {...this.props} profile={this.props.profile}/>
          );
    }
}
let mapStateToProps = (state) =>({
profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {}) (WithUrlDataContainerComponent)