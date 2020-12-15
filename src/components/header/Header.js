import classes from './Header.module.css';
import withAppContext from "../../context/withAppContext";
import {NavLink} from 'react-router-dom';

function Header({context}){
    return (
        <div className={classes.header}>
            <ul className={classes['header-nav']}>
                <li><NavLink to='/list'>Back</NavLink></li>
            </ul>
        </div>
    )
}

export default withAppContext(Header);