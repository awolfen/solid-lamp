import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image={'https://upload.wikimedia.org/wikipedia/commons/c/c4/Cabot_Tower_%28600px%29.jpg'}
            title={'First Meetup'}
            address={'Some adress'}
            description={'This is a first meetup'}
        />
    )
};

export default MeetupDetails;