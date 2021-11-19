import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";


//create a styled component that takes up all the space on the page




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
    const [ogList, setOgList] = useState(data);
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

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

      document.addEventListener('dragover', function(e) { e.preventDefault() })

      const currentItem = dragItem.current;

      if (e.target !== dragNode.current) {
        console.log("target is not the same");
       
        let x = ogList[params.grpI].items.splice(
          params.itmI,
          0,
          ogList[dragItem.current.grpI].items.splice(
            dragItem.current.itmI,
            1
          )[0]
        );
        dragItem.current = params;
        setList(x);
      

        
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
          <DndGroup onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itmI: 0}):null}>
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
    <>
      i am the third page
      <DragNDrop>
        <DragNDropComponent data={localFakeData} />
      </DragNDrop>
    </>
  );
}

export default ThirdDragExample;