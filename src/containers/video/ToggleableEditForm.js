import React, { Component } from 'react';
import EditForm from '../../containers/forms/EditForm'

export default class ToggleableEditForm extends React.Component { 
    
    render() {
    if (this.props.isOpen) { 
        return (
            <EditForm videoId={ this.props.videoId } editVideo={ this.props.editVideo }/> );
    } else { 
        return (
            <div >
                    
            </div> );
    }}
}