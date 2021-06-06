import React from 'react';

import '../styles/BadgeNew.css'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Header from '../images/badge-header.svg';

class BadgeNew extends React.Component{

    state = {
        // form: {}
    //   form: {
        // firstname: "",
        // lastname: "",
        // email: "",
        // jobTitle: "",
        // twitter: ""
    //   }
    };

    handleChange = e => {
        //primera manera de resolver el problema para guardar la informacion
        //de todo el form y q no se borre cada state al escribir en diferentes cajas de texto
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        // //
        // this.setState({
        //     form: nextForm
        // });
        //Segunda manera:
        this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew_hero">
                    <img className="img-fluid" src={Header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            //{...this.state.form.value}
                            firstName={this.state.firstname}
                            lastName={this.state.lastname}
                            twitter={this.state.twitter}
                            jobTitle={this.state.jobTitle}
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col">
                            <BadgeForm onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;