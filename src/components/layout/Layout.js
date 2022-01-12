import cssClasses from './Layout.module.css';
import MainNavigation from './MainNavigation';

/*props.children är en speciell prop som varje komponent får by default. 
Children håller alltid vårt content av det som finns emellan öppen och stängd tag i som vi har i en annan komponent,
i detta fallet App.js där vi wrappar all kontent, alla routes i <Layout></Layout>*/
function Layout(props){
    return <div>
        <MainNavigation />
        <main className={cssClasses.main}>
        {props.children}
        </main>
    </div>
}

export default Layout;