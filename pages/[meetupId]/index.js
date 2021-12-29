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

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Cabot_Tower_%28600px%29.jpg',
                title: 'First Meetup',
                address: 'Some adress',
                description: 'This is a first meetup'
            }
        }
    }
}

export default MeetupDetails;