import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';

import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

import Card from '../Card';

export default function List({ data, index: listIndex }) {
  const ref = useRef();

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ listIndex }),
    collect: monitor => ({}),
  })

  drop(ref)

  return (
    <Container ref={ref} done={data.done}> 
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
            <button className="btadd" type="button">
              <MdAdd size={18} color="#FFF" />
            </button>
        )}     
      </header>

      <ul>
        { data.cards.map((card, index) => (
        <Card 
          key={card.id}
          listIndex={listIndex} 
          index={index} 
          data={card} 
        />)) }
      </ul>
    </Container>
  );
}
