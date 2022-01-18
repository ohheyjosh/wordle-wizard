import InputCell, { CharStatus } from './InputCell';

type Props = {
  input: string;
  onInput: Function;
  type: CharStatus;
  editing: string;
  setEditing: Function;
};

const InputRow = ({ input, onInput, type, editing, setEditing }: Props) => {
  const splitLetters = input.split('');
  const changeValue = (id, value) => {
    console.log(id.slice(-1) + ' ' + value);
  }

  return (
    <div className="flex justify-center my-1">
      {splitLetters.map((letter, index) => (
        <InputCell
          key={index}
          id={type + index}
          value={letter}
          changeValue={changeValue}
          status={letter.toUpperCase().match(/[A-Z]/) ? type : null}
          editing={editing}
          setEditing={setEditing}
        />
      ))}
    </div>
  );
};

export default InputRow;
