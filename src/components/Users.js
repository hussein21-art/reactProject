import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
//import IconButton from '@material-ui/core/IconButton';
import {  deleteUser } from '../actions/index';
import getUsers1 from '../actions/index';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { getUsers } from "../api/Users";




function Users( props) {
    getUsers().then( response =>
    {
        const myUsers = response.data;
        props.getUsers( myUsers );
    } 
);
    return <div>
      <ul>
            {props.users.map( ( user, id )=> 
            <li key = {user.name}>
            {user.name}{' '} <Button onClick = {() => { props.deleteUser( id ) }}  color="secondary">
            
            <DeleteIcon /></Button>
            </li>
            )
            }
          </ul>
        </div>;
}

const mapStateToProps = ( state ) => {
    return {
      users: state.users
    }
  };
  
const mapDispatchToProps = ( dispatch ) => {
 return {
      getUsers: ( users ) => dispatch( getUsers1( users ) ),
      deleteUser: ( id ) => dispatch( deleteUser( id ) )
    }
  }

export default connect( mapStateToProps, mapDispatchToProps )(Users);