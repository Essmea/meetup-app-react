import { useContext } from 'react';
import cssClasses from './MeetupItem.module.css';
import Card from '../UI/Card';
import FavoritesContext from '../../store/favorites-context';

/*Med props får vi data från föräldrakomponenten.
Vi wrappar vårt Card runt om vår Jsx content för att ge det en Card-styling*/

function MeetupItem(props) { 
    const favoritesCtx = useContext(FavoritesContext); //Nu förvarar vi FavoritesContext objektet från vår favorites-context.js i favoritesCtx constanten

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id); //Vi ser om itemIsFavorite genom att kalla på itemIsFavorite från context. Vi använder oss av props.id då vi har ett id på objektet från MeetupList.js. Returnerar true eller false.

    function toggleFavoriteStatusHandler(){
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({ //vi addar ett nytt meetup item
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.title,
                description: props.description
            })
        }
        
    }


    return <li className={cssClasses.item}>
        <Card> 
            <div className={cssClasses.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={cssClasses.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={cssClasses.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add To Favorites'}</button> 
            </div>
        </Card>
    </li>
}

export default MeetupItem;