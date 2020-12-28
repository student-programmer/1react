import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, toogleIsFetching, setCurrentPage } from "../../Redux/usersReducer";
import Users from "./Users";
import preloader from "./../../asseds/images/preloader.gif";
class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.toogleIsFetching(true)
  //           axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
  //           .then(response => console.log("response", response.drinks))
    }
      render(){
        return( 
      //  {this.props.isFetching ? <img src={preloader}/> : null}
          <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} currentPage={this.props.currentPage}
         users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
         
         /> 
        )
      }
  }
 let mapStateToProps = (state) =>{
     return{ 
         users: state.usersPage.users,
         pageSize:state.usersPage.pageSize,
         totalUsersCount:state.usersPage.totalUsersCount,
         currentPage:state.usersPage.currentPage,
         isFetching:state.usersPage.isFetching
     }
    }
    export default connect(mapStateToProps,{follow, unfollow,setUsers,
    toogleIsFetching,setCurrentPage})(UsersContainer);
