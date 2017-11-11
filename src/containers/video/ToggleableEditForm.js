import React, { Component } from 'react';
import EditForm from '../../containers/forms/EditForm'

export default class ToggleableEditForm extends React.Component { 
    
    render() {
    if (this.props.isOpen) { 
        return (
            <EditForm video={ this.props.video } editVideo={ this.props.editVideo }/> );
    } else { 
        return (
            <div >
                    
            </div> );
    }}
}