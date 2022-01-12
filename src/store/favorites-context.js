import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: ((favoriteMeetup) => {}),
    removeFavorite: ((meetupId) => {}),
    itemIsFavorite: ((meetupId)=> {})
});

export function FavoritesContextProvider(props) { //Måste vara wrappad runt alla klomponenter som vill interagera med detta context.
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => { //Vi använder oss av en funktion som argument eftersom vi lutar oss till dess tidigare state när vi ändrar staten. Jag vet, jag fattar inte heller.
            return prevUserFavorites.concat(favoriteMeetup);//concat är som push men ger tillbaka en ny array. Det är den nya arrayen med vår nya meetup som vi sätter som vårt nya state
        })
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);//Filter returnerar en ny array där vi har filterat ut items. Filter är en inbyggd metod som tar en funktion som argument.Returnerad array kommer sakna det item som har meetupId.
        }))
    }
    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId); //funktionen görs för varje item i arrayen. Om funktionen returnerar true eller false, kommer some returnera true eller false. Vi returnerar här ut true om vi har ett meetup med meetupId i vår userFavorites.
    }
    
    const context = {
        favorites: userFavorites, //När state ändras ändras detta värdet 
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler, //addFavorite blir nyckeln/key till addFavoriteHandler funktionen.
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    //alla childkomponenter kommer få tillgång till context, vilket är favorites och totalFavorites.
    return <FavoritesContext.Provider value={context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;