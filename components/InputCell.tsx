import React, { useState } from "react";

export type CharStatus = 'match' | 'partial' | 'miss' | null;

type Props = {
  id: string;
  value: string;
  status?: CharStatus;
  editing: string;
  toggleEditing: Function;
};

const InputCell = ({ id, value, status, editing, toggleEditing }: Props) => {
  const [isEditing, setEditing] = useState(editing);
  const toggleEdit = () => {
    setEditing(id);
    toggleEditing(id);
  };

  return isEditing === id ? (
    <button
      className={
        'flex items-center justify-center w-16 h-16 m-0.5 text-lg font-bold border-2 border-gray-500 ' +
        (status === 'match'
          ? 'bg-green-500 border-green-500'
          : status === 'partial'
          ? 'bg-yellow-500 border-yellow-500'
          : status === 'miss' && 'bg-gray-500')
      }
      onClick={() => toggleEdit()}
    >
      {value.toUpperCase().match(/[A-Z]/)}
    </button>
  ) : (
    <>idk</>
  );
};

export default InputCell;
