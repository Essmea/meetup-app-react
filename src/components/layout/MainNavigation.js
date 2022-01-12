import { Link } from 'react-router-dom'; //fungerar som en <a> tag </a> som använder sig av en clicklistener som förhindrar att det skickas en request vid klick, istället ändras bara URLen till den sidan användaren vill gå till.
import cssClasses from './MainNavigation.module.css'; //Vi importerar vår cssfil kopplad till egenpåhittade namnet cssClasses, eftersom det är klasser vi konnektar sidorna med.
import { useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext)

    return <header className={cssClasses.header}> 
        <div className={cssClasses.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li> 
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li> 
                <li>
                    <Link to='/favorites'>My Favorites <span className={cssClasses.badge}>{favoritesCtx.totalFavorites}</span> </Link>
                </li> 
            </ul>
        </nav>
    </header>
}

export default MainNavigation;