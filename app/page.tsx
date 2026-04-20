import ExploreBtn from './components/ExploreBtn'
import { title } from 'process'
import EventCard from '@/components/EventCard'

import { IEvent } from '@/database/event.model'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const page = async() => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const {events} = await response.json();
   return (
    <section>
      <h1 className='text-center py-8 '>The Hub for every Dev <br/> Event You Can't Miss</h1>
      <p className='text-center mt-5'>hackathons, meetups and conferences all in one place</p>
      <ExploreBtn/>

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events && events.length>0 && events.map((e:IEvent)=>(
            <li key={e.title}>
              <EventCard {...e}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
)}

export default page