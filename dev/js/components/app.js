import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

require('../../css/style.css');

export default class App extends React.Component {
    render() {
        return(
            <div>
                <div className="card" style= {{float: 'left'}}>
                    <img src="https://image.ibb.co/bAkVxm/user_icon_01.png" height="64px" width="64px" style= {{float: 'left', marginRight: "10px"}}/><h2>Users</h2>
                    <UserList />
                    <hr />
                </div>
                <div className="card" style= {{float: 'right', textAlign: 'center', height: '460px'}}>
                <div>
                    <img src="https://image.ibb.co/c3OYHm/details_icon_01.png" height="64px" width="64px" style= {{float: 'left', marginRight: "10px"}}/><h2 style= {{float: 'left', marginRight: "10px"}}>User Details</h2>
                </div>
                <div style= {{paddingTop: '80px'}}>
                    <UserDetail />
                </div>
                </div>
            </div>
        );
    }
    
}