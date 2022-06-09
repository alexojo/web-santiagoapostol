import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid'
import { Table } from "../../components/Table";
import { UserDetails } from "../../components/UserDetails";
/* const people = [
  { name: 'Administrador' },
  { name: 'Docente' },
  { name: 'Secretaria' },
  { name: 'Estudiante' }
]
const tabs = [
  {
      target: "#tabs-home3",
      text: "Información",
      icon: "fa-solid fa-circle-info",
      component: <Input />
  },
  {
      target: "#tabs-profile3",
      text: "Registrar",
      icon: "fa-solid fa-pen",
      component: <InputSearch />
  },
  {
      target: "#tabs-messages3",
      text: "Option 3",
      icon: "fa-solid fa-message",
      component: <Input />
  }
]; */

export const AdminScreen = () => {

    return (
      <div className='pl-60 h-screen bg-gray-100 overflow-auto'>
        <div className="w-full h-full flex flex-col">
        <div className="bg-red-500 h-10">
            
          </div>
          <div className="bg-red-400 h-10">
            
          </div>
          <>
            <div className="bg-red-300 h-5">
              
            </div>

            <div className="flex overflow-auto h-full">
              <div className="w-full sm:px-6 overflow-auto mb-5">
                <Table />
              </div>
              <div className="w-96 mr-6  mb-5">
                <UserDetails />
              </div>
            </div>
          </>
        </div>


      
      </div>
    )
}

/* const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = {
  ["Requested"]: {
    name: "Requested",
    items: itemsFromBackend
  },
  ["To do"]: {
    name: "To do",
    items: []
  },
  ["In Progress"]: {
    name: "In Progress",
    items: []
  },
  ["Done"]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
if (!result.destination) return;
const { source, destination } = result;

if (source.droppableId !== destination.droppableId) {
  const sourceColumn = columns[source.droppableId];
  const destColumn = columns[destination.droppableId];
  const sourceItems = [...sourceColumn.items];
  const destItems = [...destColumn.items];
  const [removed] = sourceItems.splice(source.index, 1);
  destItems.splice(destination.index, 0, removed);
  setColumns({
    ...columns,
    [source.droppableId]: {
      ...sourceColumn,
      items: sourceItems
    },
    [destination.droppableId]: {
      ...destColumn,
      items: destItems
    }
  });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};
const [columns, setColumns] = useState(columnsFromBackend);

useEffect(() => {
  console.log( columns )
}, [columns]) */

{/* <div style={{ display: "flex", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="bg-red-500"
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div> */}