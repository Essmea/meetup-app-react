import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

  /*Vi kallar på vår MeetupList med meetups som vår props med värde DUMMY_DATA */
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{ //vår fetch funktion kallas bara på när react kallar på denna funktionen
    setIsLoading(true);
    fetch('https://react-getting-started-c7c3d-default-rtdb.europe-west1.firebasedatabase.app/.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) { //Alla keys från detta data objekt som vi hämtar från firebase. Key är de random "namnen" de olika objekten har fått.
        const meetup = {
          id:key,
          ...data[key] //spread operator ... för att kopiera alla key-value pairs från det nestade objektet in till detta objektet
         };

         meetups.push(meetup); //Vi pushar upp vår meetup till vår meetups array.
      }

      setIsLoading(false);
      setLoadedMeetups(meetups); //Vår meetups array är satt som vår loaded meetups data.
    });  
  }, []); //Depencencies för när react kallar på funktionen. När värdet av dependencien ändras kallas funktionen. Tom array som här innebär att funktionen bara kommer köras en gång när komponenten blir renderad för första gången.

  if (isLoading) {
    return <section>
        <p>Loading...</p>
    </section>
  }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/> 
    </section>
}

export default AllMeetupsPage;