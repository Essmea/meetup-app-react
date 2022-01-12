import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    //Vi returnerar värdet av vår content variabel.
    return <section>
        <h1>My Favorites</h1>
        {content} 
    </section>

}

export default FavoritesPage;