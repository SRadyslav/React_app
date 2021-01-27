import { render } from '@testing-library/react';
import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state={
        editMode: false,
        status: this.props.status,
    };
    onStatusChange=(e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    activateEditMode= () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode= () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
        }
    }
    
    render() {
        return (
            <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;