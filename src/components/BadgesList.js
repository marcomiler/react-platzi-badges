import React from 'react'; 
import '../styles/BadgesList.css';

class BadgesList extends React.Component{

    render(){
        return(
            <ul className="list-unstyled badge_list">
                {this.props.badges.map((badge) => {
                    return(//es importante colocar un identificador unico en una lista, para evitar errores
                        <li key={badge.id} className="badge_list-item"> 
                            <div className="container">
                                <div className="row">
                                    <div className="col-2 badge_img-container">
                                        <img className="badge_list-img" src={badge.avatarUrl} alt="avatar" />
                                    </div>
                                    <div className="col fw-bold badge_item-info">
                                        <span>{badge.firstName} {badge.lastName}</span>
                                        <a href="/">{badge.email}</a>
                                        <p>{badge.jobTitle}</p>
                                    </div>
                                </div>
                            </div>                           
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default BadgesList;