import { useRef } from 'react'; //För att skapa ett referensobjekt

import cssClasses from './NewMeetupForm.module.css';
import Card from '../UI/Card';

function NewMeetupForm(props){
    const titleInputRef = useRef(); //Vi förvarar vår referens i en constant. Vi får nu tillgång till vårt input title element genom titleInputRef eftersom vi använt ref={titleInput} i vår input tag i formen.
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef(); 

    function submitHandler(event) {
        event.preventDefault(); //Förhindrar browser default reloading vid trigggat event så att vi helt kan handtera submittat form med js och react
        
        const enteredTitle = titleInputRef.current.value; //Värdet av current/nuvarande title input förvarat i constanten enteredTitle
        const enteredImage = imageInputRef.current.value;  
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData);
    }


    return <Card>
        <form className={cssClasses.form} onSubmit={submitHandler}>
            <div className={cssClasses.control}> 
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef} /> 
            </div>
            <div className={cssClasses.control}> 
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={cssClasses.control}> 
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef} />
            </div>
            <div className={cssClasses.control}> 
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef} ></textarea>
            </div>
            <div className={cssClasses.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;