import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'

class Achievement extends Component {
    render() {

        const { name, icon, icon_var, description, value } = this.props.options;
        const { disabled } = this.props;

        library.add(Icons[icon_var]);
        
        const achievement_body = (
            <React.Fragment>
                <span className="achievements__item__information">
                    <FontAwesomeIcon className='achievements__item__information__image__icon' icon={icon} /> 
                    <h3>{name}</h3>
                    <p>{description}</p>
                </span>

                <div className='achievements__item__value'>
                    <FontAwesomeIcon className='achievements__item__image__icon' icon={icon} />
                    <p>{value}</p>
                </div>
                
            </React.Fragment>
        )

        const achievement_body_disabled = (<React.Fragment>???</React.Fragment>)

        return (
            <div className={ !disabled ? 'achievements__item ': 'achievements__item achievements__item--disabled'}>
                {!disabled ? achievement_body : achievement_body_disabled}
            </div>
        );
    }
}

export default Achievement;