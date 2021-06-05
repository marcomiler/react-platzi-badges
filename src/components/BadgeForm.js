import React from 'react';

class BadgeForm extends React.Component{

    state = {}; //es importante declararlo como vacio para evitar errores null

    // handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value//se imprime el valor que ingresamos
    //     // });
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });//guardamos el valor de las cajas de texto
    // }

    handleClick = e => {
        console.log("Button was clicked");
    }

    handleSubmit = e => {
        e.preventDefault();//detenemos el submit para que no se recargue la pagina
        console.log("Form was submitted");
        console.log(this.state);//imprimiendo los valores del form
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="form-group">
                        {/* Colocando la propiedad value = ... controlamos que la informacion ingresada a las cajas sean guardadas por el setstate, 
                        sino habría un error, ya q la informacion se estaria guardando en dos lugares */}
                        <label htmlFor="">Fisrt Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" />
                    </div>
                    <br />
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;