import React from 'react';
import classes from './SideDrawerToggle.css'

const SideDrawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default SideDrawerToggle;