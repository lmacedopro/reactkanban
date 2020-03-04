import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { MdRemoveCircle } from 'react-icons/md';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';


export default function Card({ data, index, listIndex }) {

  const ref = useRef();
  const { move, moveEnd } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { 
      type: 'CARD', 
      listIndex,
      index,
      id: data.id
    },
    end: (item, monitor) => {

      const dropResult = monitor.getDropResult()

      const draggedListIndex = item.listIndex;
      const targetListIndex = dropResult.listIndex;

      const draggedIndex = item.index;

      if(!monitor.isDragging()){
        return;
      }else{
        moveEnd(draggedListIndex, targetListIndex, draggedIndex);

        item.index = draggedIndex;
        item.listIndex = targetListIndex;
      }
      
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex)
        return;


      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetCenter)
        return;

      if(draggedIndex > targetIndex && draggedTop > targetCenter)
        return;
      
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;

    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging} priority={data.priority}>
      <header>
        {data.labels.map( label => <Label key={label} color={label} /> )} 
        <button type='button' title="Remover Tarefa">
          <MdRemoveCircle size={18} color="#7109C2" />
        </button>
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}
