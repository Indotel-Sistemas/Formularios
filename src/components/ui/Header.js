import React from 'react'
import logo from '../../images/logo.png'


export const Header = () => {
    return (
        <div>
            <div className="ui__topBanner">
                <img src={logo} className="ui__headerLogo" alt="logo"></img>
            </div>

            <div className="ui__headerNav"></div>
        </div>        
    )
}
