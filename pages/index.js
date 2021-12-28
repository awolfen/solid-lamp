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

const HomePage = (props) => {
    return (
        <>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from api, not exposed to client

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

// this code does not execute on the client side, it fetches data during build for pre-loading, this is helpful for SearchEngineOptimization
export async function getStaticProps() {
    //fetch data from api
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}

export default HomePage;