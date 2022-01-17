import InputCell from './InputCell';

type Props = {
  matches: string;
};

const matchesGrid = ({ matches }: Props) => {
  const splitLetters = matches.split('');
  const emptyCells = Array.from(Array(5 - splitLetters.length));

  return (
    <div className="flex justify-center my-1">
      {splitLetters.map((letter, index) => (
        <InputCell key={index} value={letter} />
      ))}
      {emptyCells.map((_, index) => (
        <InputCell key={index} />
      ))}
    </div>
  );
};

export default matchesGrid;
