import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">

            <NavLink exact to="/" activeClassName="selected" className="link">
              Acceuil
            </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected" className="link">
              History
            </NavLink>
            </div>
        )
    }
    
}

export default Header