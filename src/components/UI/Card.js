//Vi använder Card för att wrappa om divs och ge dem en card look, denna kan vi använda på flera platser.

import cssClasses from './Card.module.css';

/*props.children är en speciell prop som varje komponent får by default. 
Children håller alltid vårt content av det som finns emellan öppen och stängd tag i som vi har i en annan komponent, alltså <Card>Detta värdet</Card> som då är förvarat i vår children prop i denna komponenten.
Genom att outputta värdet förvarat i props.children får vi alltså värdet inom <Card></Card> som vi skrivit i vår MeetupItem komponent*/
function Card(props) {
    return <div className={cssClasses.card}>
        {props.children} 
    </div>
}

export default Card;