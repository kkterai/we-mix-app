import React, { Component } from 'react';
import EditForm from '../../containers/forms/EditForm'

export default class ToggleableEditForm extends React.Component { 
    
    render() {
    if (this.props.isOpen) { 
        return (
            <EditForm /> );
    } else { 
        return (
            <div >
                    
            </div> );
    }}
}