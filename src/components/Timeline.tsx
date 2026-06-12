import React from 'react'
import Icon from '@rsuite/icons/Icon';
import { FaHeart } from 'react-icons/fa';
import { Timeline as Timeliners, Text } from 'rsuite';
import { AsyncImage } from './AsyncImage';

const { Item } = Timeliners;

const events = [
  {
    date: 'May 17, 2025',
    title: 'O dia que trocamos olhares',
    desc: "O dia em que trocamos nosso olhares ela primeira vez",
  },
  {
    date: 'May 31, 2025',
    title: 'Nosso primeiro encontro',
    desc: 'A gente morrendo de medo de desagradar um ao outro (Nós dois estavamos tinindo)',
  },
  {
    date: 'Jun 12, 2025',
    title: 'Nosso primeiro dia dos namorados',
    desc: 'A gente nem namorados eramos ainda :v',
  },
  {
    date: 'Ago 2, 2025',
    title: 'Pedido de Namoro',
    desc: 'Você não esperava, mas naquele sabado já tinha tudo de acordo com o plano',
  },
  {
    date: 'Ago 3, 2025',
    title: 'Nossa aliança',
    desc: 'Que aliança mais linda diga-se de passagem rsrs',
  },
  {
    date: 'Ago 23, 2025',
    title: 'Nosso primeiro show',
    desc: 'Aquele dia foi tão legal, deveriamos ir mais vezes hihih',
  },
  {
    date: 'Set 2, 2025',
    title: 'Primeiro aniversário de namoro',
    desc: 'O primeiro de muitos <3',
  },
  {
    date: 'Out 25, 2025',
    title: 'Nosso primeiro Hellween',
    desc: 'O deste ano vai ser mais babilonico ainda hein',
  },
  {
    date: 'Nov 08, 2025',
    title: 'Minha esposa modelo',
    desc: 'Bonita sem fazer esforço algum, como pode?',
  },
  {
    date: 'Dez 02, 2025',
    title: 'Nossa vespera de Natal',
    desc: 'Estamos tão lindos affff',
  },
  {
    date: 'Dez 29, 2025',
    title: 'Nossa primeira viagem ebaaaaa',
    desc: 'Passamos o ano novo juntinhos e grudadinhos hihihi',
  },
  {
    date: 'Jan 24, 2026',
    title: 'A gente bem sonsos',
    desc: 'Aqui a gente só tava sendo endeota mesmo hehe',
  },
  {
    date: 'Fev 15, 2026',
    title: 'Nossa primeira zombie walk',
    desc: 'Nosso primeiro cosplay!!!',
  },
  {
    date: 'Abr 18, 2026',
    title: 'Nosso primeiro casamento juntos',
    desc: 'Aff não foi o nosso',
  },
  {
    date: 'Mai 27, 2026',
    title: 'O dia que a gente ficou super caseiro',
    desc: 'E quase roubei o tangerino pra mim',
  },
  {
    date: 'Hoje',
    title: 'To be continue...',
    desc: '',
  }
]

const Timeline: React.FC = () => {
  return (
    <section id="timeline" aria-label="Timeline">
      <Timeliners className="custom-timeline" align='alternate'>
        {events.map((e, i, arr) => (
          <Item key={i} dot={<Icon as={FaHeart} color={i === arr.length - 1 ? "#fa4c69" : ""} />} className='item'>
            <Text muted>{(i+1) > 0 && <AsyncImage src={`event${i+1}`} alt={e.title} className="event-img" />}</Text>
            <Text muted>{e.date} - {e.title}</Text>
            <Text>{e.desc}</Text>
          </Item>
        ))}
      </Timeliners>
    </section>
  )
}

export default Timeline
