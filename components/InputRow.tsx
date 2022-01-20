import InputCell, { CharStatus } from './InputCell';

type Props = {
  input: string;
  onInput: Function;
  type: CharStatus;
  editing: string;
  setEditing: Function;
};

const InputRow = ({ input, onInput, type, editing, setEditing }: Props) => {
  const splitLetters = input.toString().split('');
  const onChange = (id, value) => {
    splitLetters[Number(id.replace(/[^\d.-]/g, ''))] = value;
    // add misses row if current row is full
    if (type === 'miss' && splitLetters.length < 20 && !splitLetters.includes('_')) {
      splitLetters.push('_', '_', '_', '_', '_');
    }
    onInput(splitLetters.join(''));
    setEditing(null);
  };

  return (
    <div className="grid justify-center w-full max-w-md grid-cols-5 px-12 mx-auto my-1 gap-y-2">
      {splitLetters.map((letter, index) => (
        <InputCell
          key={index}
          id={type + index}
          value={letter}
          changeValue={onChange}
          status={letter.match(/[A-Z]/) ? type : null}
          editing={editing}
          setEditing={setEditing}
        />
      ))}
    </div>
  );
};

export default InputRow;
