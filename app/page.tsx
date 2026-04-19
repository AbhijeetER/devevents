import React from 'react'
import ExploreBtn from './components/ExploreBtn'

const page = () => {
  return (
    <section>
      <h1 className='text-center '>The Hub for every Dev <br/> Event You Can't Miss</h1>
      <p className='text-center mt-5'>hackathons, meetups and conferences all in one place</p>
      <ExploreBtn/>

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {[1,2,3,4,5].map((e)=>(
            <li key={e}>Event {e}</li>
          ))}
        </ul>
      </div>
    </section>
)}

export default page