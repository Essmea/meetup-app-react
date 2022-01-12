import MeetupItem from './MeetupItem';
import cssClasses from './MeetupList.module.css';

// vi renderar ett meetup item per objekt i meetupsarrayen
function MeetupList(props){ 
    return <ul className={cssClasses.list}>
        {props.meetups.map(meetup => (
        <MeetupItem 
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image} 
        title={meetup.title} 
        address={meetup.address} 
        description={meetup.description}
        />
        ))}
    </ul>
}

export default MeetupList;