import React from 'react'
import Icon from '@rsuite/icons/Icon';
import { FaCreditCard } from 'react-icons/fa';
import { Timeline as Timeliners, Text } from 'rsuite';

const { Item } = Timeliners;

const events = [
  {
    id: 1,
    date: 'June 14, 2022',
    title: 'The first hello',
    desc: "A rainy afternoon, a borrowed umbrella, and a conversation that didn't want to end.",
    image: 'https://via.placeholder.com/320x200?text=Event+1',
  },
  {
    id: 2,
    date: 'Aug 02, 2022',
    title: 'Our first trip',
    desc: 'A weekend by the coast — we learned each other\'s quiet.',
    image: 'https://via.placeholder.com/320x200?text=Event+2',
  },
  {
    id: 3,
    date: 'Dec 24, 2022',
    title: 'First Christmas',
    desc: 'Fairy lights, hot cocoa, and a promise whispered at midnight.',
    image: 'https://via.placeholder.com/320x200?text=Event+3',
  },
]

const Timeline: React.FC = () => {
  return (
    <section id="timeline" aria-label="Timeline">
      <Timeliners className="custom-timeline" align='alternate'>
        {events.map((e) => (
          <Item key={e.id} dot={<Icon as={FaCreditCard} />} className=''>
            <Text muted>{e.image && <img src={e.image} alt={e.title} />}</Text>
            <Text>{e.image && <img src={e.image} alt={e.title} />}</Text>
          </Item>
        ))}
      </Timeliners>

    </section>
  )
}

export default Timeline
