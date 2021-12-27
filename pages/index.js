import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Cabot_Tower_%28600px%29.jpg',
        title: 'First Meetup',
        address: 'Brandon Hill Park, Park St, Bristol BS1 5RR, United Kingdom',
        description: 'This is a meetup at Bristol'
    },
    {
        id: 'm2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Cabot_Tower_%28600px%29.jpg',
        title: 'Second Meetup',
        address: 'Brandon Hill Park, Park St, Bristol BS1 5RR, United Kingdom',
        description: 'This is also a meetup at Bristol'
    }
]

const HomePage = () => {
    return (
        <>
            <MeetupList meetups={DUMMY_MEETUPS} />
        </>
    )
}

export default HomePage;