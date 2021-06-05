import React from 'react';
import ConfLogo from '../images/badge-header.svg';
import '../styles/Badge.css';

class Badge extends React.Component{

    render(){
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={ConfLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="badge_section-name">
                    <img className="badge_avatar" src={this.props.avatarUrl} alt="Avatar"></img>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="badge_footer">
                    #platziConf
                </div>
            </div>
        );     
    }
}

export default Badge;