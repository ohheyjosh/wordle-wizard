export type CharStatus = 'match' | 'partial' | 'miss' | null;

type Props = {
  id: string;
  value: string;
  changeValue: Function;
  status?: CharStatus;
  editing: string;
  setEditing: Function;
};

const InputCell = ({
  id,
  value,
  changeValue,
  status,
  editing,
  setEditing,
}: Props) => {
  return editing !== id ? (
    <button
      className={
        'flex items-center justify-center w-16 h-16 m-0.5 text-lg font-bold border-2 border-gray-500 ' +
        (status === 'match'
          ? 'bg-green-500 border-green-500'
          : status === 'partial'
          ? 'bg-yellow-500 border-yellow-500'
          : status === 'miss' && 'bg-gray-500')
      }
      onClick={() => setEditing(id)}
    >
      {value.toUpperCase().match(/[A-Z]/)}
    </button>
  ) : (
    <input
      className="flex items-center justify-center w-16 h-16 m-0.5 text-lg font-bold border-2 bg-transparent border-gray-500 uppercase text-center"
      type="text"
      onChange={(event) => changeValue(id, event.target.value)}
      autoFocus
    />
  );
};

export default InputCell;
