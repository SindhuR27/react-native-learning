import React from "react";
import {DndContext, useSensor, useSensors, PointerSensor} from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy, arrayMove} from "@dnd-kit/sortable";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

const SortableItem = ({id, content}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable ({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: "16px",
        margin: "8px 0",
        background: "#ffffff",
        border: "1px solid #dfe6f2",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "#0056b3",
        cursor: "grab",
      };

      return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
          {content}
        </div>
      );
};

const List = ({items, setItems}) => {
    const sensors = useSensors(
        useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const {active, over} = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                setItems(arrayMove(items, oldIndex, newIndex));
            });
        }
    };

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                    <SortableItem key={item.id} id={item.id} content={item.content} />
                ))}
            </SortableContext>
        </DndContext>
    );
};

export default List;