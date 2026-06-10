import React from 'react'
import Icon from '@rsuite/icons/Icon';
import { FaHeart } from 'react-icons/fa';
import { Timeline as Timeliners, Text } from 'rsuite';
import { AsyncImage } from './AsyncImage';

const { Item } = Timeliners;

const events = [
  {
    id: 1,
    date: 'May 17, 2025',
    title: 'O dia que trocamos olhares',
    desc: "O dia em que trocamos nosso olhares ela primeira vez",
  },
  {
    id: 2,
    date: 'May 31, 2025',
    title: 'Nosso primeiro encontro',
    desc: 'A gente morrendo de medo de desagradar um ao outro (Nós dois estavamos tinindo)',
  },
  {
    id: 3,
    date: 'Jun 12, 2025',
    title: 'Nosso primeiro dia dos namorados',
    desc: 'A gente nem namorados eramos ainda :v',
  },
  {
    id: 4,
    date: 'Ago 2, 2025',
    title: 'Pedido de Namoro',
    desc: 'Você não esperava, mas naquele sabado já tinha tudo de acordo com o plano',
  },
  {
    id: 5,
    date: 'Ago 3, 2025',
    title: 'Nossa aliança',
    desc: 'Que aliança mais linda diga-se de passagem rsrs',
  },
  {
    id: 6,
    date: 'Ago 23, 2025',
    title: 'Nosso primeiro show',
    desc: 'Aquele dia foi tão legal, deveriamos ir mais vezes hihih',
  },
  {
    id: 7,
    date: 'Set 2, 2025',
    title: 'Primeiro aniversário de namoro',
    desc: 'O primeiro de muitos <3',
  },
  {
    id: 8,
    date: 'Out 25, 2025',
    title: 'Nosso primeiro Hellween',
    desc: 'O deste ano vai ser mais babilonico ainda hein',
  },
  {
    id: 9,
    date: 'Nov 08, 2025',
    title: 'Minha esposa modelo',
    desc: 'Bonita sem fazer esforço algum, como pode?',
  },
  {
    id: 10,
    date: 'Dez 02, 2025',
    title: 'Nossa vespera de Natal',
    desc: 'Estamos tão lindos affff',
  },
]

const Timeline: React.FC = () => {
  return (
    <section id="timeline" aria-label="Timeline">
      <Timeliners className="custom-timeline" align='alternate'>
        {events.map((e) => (
          <Item key={e.id} dot={<Icon as={FaHeart} />} className='item'>
            <Text muted>{e.id && <AsyncImage src={`event${e.id}`} alt={e.title} className="event-img" />}</Text>
            <Text muted>{e.date}</Text>
            <Text>{e.desc}</Text>
          </Item>
        ))}
      </Timeliners>
    </section>
  )
}

export default Timeline
