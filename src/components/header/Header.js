import classes from './Header.module.css';
import withAppContext from "../../context/withAppContext";

function Header({context}){
    return (
        <div className={classes.header}>
            <ul className={classes['header-nav']}>
                <li onClick={() => context.goToPath('list')}>Back</li>
            </ul>
        </div>
    )
}

export default withAppContext(Header);