import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory(); //hjälper oss att navigera genom browser history användbart efter att datan blivit submittad i formen

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-c7c3d-default-rtdb.europe-west1.firebasedatabase.app/.json',
            {
                method: 'POST', //GET är default
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json' //extra metadata för att förtydliga att denna request bär på JSON data
                }
            }
        ).then(() => {
            history.replace('/'); //navigerar oss vidare till startsidan/defaultsidan. Replace förhindrar oss också från att gå tillbaka till formen.
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;