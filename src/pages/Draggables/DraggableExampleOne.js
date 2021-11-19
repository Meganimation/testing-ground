import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import fakeData from "../../fakeData.json";



const Ele = styled.div`
  background: red;
  cursor: move;
  margin: 10px;
  position: relative;
  height: 5rem;
  width: 5rem;
  resize: both;
`;



function FirstDragExample() {
    const [characters, updateCharacters] = useState(fakeData);
  
    function handleOnDragEnd(result) {
      if (!result.destination) return;
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCharacters(items);
    }
  
    return (
      <>
        You can rearrange the blocks by dragging them around.
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id.toString()} index={index}>
                      {(provided) => (
                        <Ele
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <p>hello I am {name}</p>
                        </Ele>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }

export default FirstDragExample;