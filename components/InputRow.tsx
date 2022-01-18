import InputCell, { CharStatus } from './InputCell';

type Props = {
  input: string;
  type: CharStatus;
  editing: string;
  toggleEditing: Function;
};

const InputRow = ({ input, type, editing, toggleEditing }: Props) => {
  const splitLetters = input.split('');

  return (
    <div className="flex justify-center my-1">
      {splitLetters.map((letter, index) => (
        <InputCell
          key={index}
          id={type + index}
          value={letter}
          status={letter.toUpperCase().match(/[A-Z]/) ? type : null}
          editing={editing}
          toggleEditing={toggleEditing}
        />
      ))}
    </div>
  );
};

export default InputRow;
