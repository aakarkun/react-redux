import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component {
    render() {
        if(!this.props.user) {
            return (
                <div style={{marginTop: '100px'}}>
                    <img src="https://image.ibb.co/je3uOR/select_icon_01.png" height="64px" width="64px"/>
                    <h4>No user Selected!</h4>
                </div>
            );  
        }
        return(
            <div>
                <img className="circle-image" src={this.props.user.thumbnail} height="200px" width="200px" />
                <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);