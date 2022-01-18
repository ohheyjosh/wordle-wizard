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
        'w-16 h-16 text-3xl font-bold border-2 border-gray-600 ' +
        (status === 'match'
          ? 'bg-green-600 border-green-600'
          : status === 'partial'
          ? 'bg-yellow-600 border-yellow-600'
          : status === 'miss' && 'bg-gray-600')
      }
      onClick={() => setEditing(id)}
    >
      {value.toUpperCase().match(/[A-Z]/)}
    </button>
  ) : (
    <input
      className="w-16 h-16 text-3xl font-bold text-center uppercase bg-transparent border-2 border-gray-600"
      type="text"
      onChange={(event) => changeValue(id, event.target.value)}
      autoFocus
    />
  );
};

export default InputCell;
