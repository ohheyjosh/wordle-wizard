type CharStatus = 'match' | 'partial' | 'miss';

type Props = {
  value?: string;
  status?: CharStatus;
};

const InputCell = ({ value, status }: Props) => {
  return (
    <div className="flex items-center justify-center w-12 h-12 m-1 text-lg font-bold border rounded">
      {value}
    </div>
  );
};

export default InputCell;
