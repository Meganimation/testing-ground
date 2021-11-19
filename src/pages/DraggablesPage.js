import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import fakeData from "../fakeData.json";
import "../App.css";

//create a styled component that takes up all the space on the page
const DraggablePage = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80vw;
  height: 80vh;
  background-color: darkGray;
`;

const Ele = styled.div`
  background: red;
  cursor: move;
  margin: 10px;
  position: relative;
  height: 5rem;
  width: 5rem;
  resize: both;
`;
const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
`;

const StyledBoard = styled(Board)`
display: flex;
flex-direction: column;
width: 100%;
max-width: 300px;
background-color: #313131;
padding: 15px;


.card{
  padding: 15px
  background-color: white;
  resize: horizontal;
}
`;

const GroupTitle = styled.h3`
  text-align: left;
  margin-button: 0.5rem;
  font-size: 0.5rem;
  color: white;
  padding: 10px;
`;

const DragNDrop = styled.div`
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, 300px);
  align-items: start;
  gap: 0.5rem;
`;

const DndGroup = styled.div`
  background-color: #49505e;
  border-radius: 5px;
  padding: 0.5rem;
`;

//above: unless it is the last element in the dnditem list, give it a margin-bottom of 0.5rem;

function ThirdDragExample() {
  let localFakeData = [
    { title: "group 1", items: ["1", "2", "3"] },
    { title: "group 2", items: ["4", "5"] },
  ];

  function DragNDropComponent({ data }) {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
      setList(data);
    }, [setList, data]);

    const dragItem = useRef();
    const dragNode = useRef();

    const DndItem = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 150px;

      border-radius: 5px;
      color: #282c34;
      font-weight: bold;

      * {
        margin: 0;
        font-size: 1.2rem;
      }

      p {
        color: red;
      }

      &:not(:last-of-type) {
        margin-bottom: 0.5rem;
      }
    `;

    const DndItemCurrent = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 150px;

      border-radius: 5px;
      color: black;
      font-weight: bold;

      * {
        margin: 0;
        font-size: 1.2rem;
      }

      p {
        color: red;
      }

      &:not(:last-of-type) {
        margin-bottom: 0.5rem;
      }
    `;

    const handleDragStart = (e, params) => {
      console.log("drag start", params);
      dragItem.current = params;
      dragNode.current = e.target;
      dragNode.current.addEventListener("dragend", handleDragEnd);

      setTimeout(() => {
        setDragging(true);
      }, 0);
    };

    const handleDragEnter = (e, params) => {
      console.log("enter drag", params);

      const currentItem = dragItem.current;


      if (e.target !== dragNode.current) {
        console.log("target is not the same");
        setList((oldList) => {
          let newList = JSON.parse(JSON.stringify(oldList));

          newList[params.grpI].items.splice(
            params.itmI,
            0,
            newList[dragItem.current.grpI].items.splice(
              dragItem.current.itmI,
              1
            )
          );

          dragItem.current = params;

          return newList;
        });
      }
    };

    const handleDragEnd = () => {
      console.log("drag end");
      setDragging(false);

      dragNode.current.removeEventListener("dragend", handleDragEnd);
      dragItem.current = null;
      dragNode.current = null;

      // dragItem.current = params;
    };

    const getStyles = (item) => {
      if (
        dragItem.current.grpI === item.grpI &&
        dragItem.current.itmI === item.itmI
      ) {
        return "dnd-item current";
      }
      return "dnd-item";
    };

    return data.map((grp, grpI) => {
      return (
        <>
          <DndGroup>
            <GroupTitle>{grp.title}</GroupTitle>
            {grp.items.map((item, itmI) => (
              <div
                draggable
                key={item}
                onDragStart={(e) => handleDragStart(e, { grpI, itmI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { grpI, itmI });
                      }
                    : null
                }
                className={dragging ? getStyles({ grpI, itmI }) : "dnd-item"}
              >
                {item}
              </div>

              // <DndItem
              //   draggable
              //   key={itmI}
              //   id={`${grpI}-${itmI}`}
              //   dragging={dragging}
              //   onDragEnter={dragging ? (e)=>handleDragEnter(e, {grpI, itmI}) : null}
              //   onDragStart={(e) => {
              //     handleDragStart(e, { grpI, itmI });
              //   }}
              //   key={item}
              // >
              //   <p>{item}</p>
              // </DndItem>
            ))}
          </DndGroup>
        </>
      );
    });
  }

  return (
    <DraggablePage>
      i am the third page
      <DragNDrop>
        <DragNDropComponent data={localFakeData} />
      </DragNDrop>
    </DraggablePage>
  );
}

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
    <DraggablePage>
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
    </DraggablePage>
  );
}

function SecondDragExample() {
  return (
    <DraggablePage>
      <Flexbox>
        <StyledBoard id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </StyledBoard>

        <StyledBoard id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <p>Card three</p>
          </Card>
        </StyledBoard>
      </Flexbox>
    </DraggablePage>
  );
}

function Board(props) {
  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        className={props.className}
      >
        {props.children}
      </div>
    </>
  );
}

function Card(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={props.className}
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={props.draggable}
    >
      {props.children}
    </div>
  );
}

function DraggablesPage() {
  const [draggableComponentIsVisible, setDraggableComponentIsVisible] =
    useState(false);
  const [draggableComponentIsVisible2, setDraggableComponentIsVisible2] =
    useState(false);
  const [draggableComponentIsVisible3, setDraggableComponentIsVisible3] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setDraggableComponentIsVisible(!draggableComponentIsVisible)
        }
      >
        click to show draggable component
      </button>
      <br />
      {draggableComponentIsVisible && <FirstDragExample />}
      <button
        onClick={() =>
          setDraggableComponentIsVisible2(!draggableComponentIsVisible2)
        }
      >
        click to show draggable component 2
      </button>
      {draggableComponentIsVisible2 && <SecondDragExample />}
      <br />
      <button
        onClick={() =>
          setDraggableComponentIsVisible3(!draggableComponentIsVisible3)
        }
      >
        click to show draggable component 3
      </button>
      {draggableComponentIsVisible3 && <ThirdDragExample />}
    </>
  );
}

export default DraggablesPage;
