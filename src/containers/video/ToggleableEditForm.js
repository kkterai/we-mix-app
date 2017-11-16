import React from 'react';
import EditForm from '../../containers/forms/EditForm'

export default class ToggleableEditForm extends React.Component { 
    
    render() {
    if (this.props.isOpen) { 
        return (
            <EditForm video={ this.props.video } toggle={ this.props.toggle } editVideo={ this.props.editVideo }/> );
    } else { 
        return (
            <div >
                    
            </div> );
    }}
}