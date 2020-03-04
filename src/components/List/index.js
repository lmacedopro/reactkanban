import React, { useRef, useContext } from 'react';
import { useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';

export default function List({ data, index: listIndex }) {
  const ref = useRef();
  const { moveEnd } = useContext(BoardContext);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ listIndex }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  drop(ref)

  return (
    <Container ref={ref} done={data.done}> 
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
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
