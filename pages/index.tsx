import React, { useEffect, useState } from 'react';
import getResults from '../utils/getResults';
import Layout from '../components/Layout';
import InputRow from '../components/InputRow';

const IndexPage = () => {
  const [matches, setMatches] = useState<string>('_____');
  const [partials, setPartials] = useState<string>('_____');
  const [misses, setMisses] = useState<string>('_____');
  const [editing, setEditing] = useState<string>(null);
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    const charCount = (chars) => {
      return chars.replace(/_/g, '').length;
    };
    if (charCount(matches) + charCount(partials) + charCount(misses) >= 5) {
      setResults(getResults(matches, partials, misses));
    }
  }, [matches, partials, misses]);

  return (
    <Layout title="Wordle Wizard">
      <h2 className="m-2 mt-4 text-xl font-bold sm:ml-20">Enter matches:</h2>
      <InputRow
        input={matches}
        onInput={setMatches}
        type="match"
        editing={editing}
        setEditing={setEditing}
      />
      <h2 className="m-2 mt-4 text-xl font-bold sm:ml-20">
        Enter partial matches:
      </h2>
      <InputRow
        input={partials}
        onInput={setPartials}
        type="partial"
        editing={editing}
        setEditing={setEditing}
      />
      <h2 className="max-w-lg m-2 mt-4 text-xl font-bold sm:ml-20">
        Enter misses:
      </h2>
      <InputRow
        input={misses}
        onInput={setMisses}
        type="miss"
        editing={editing}
        setEditing={setEditing}
      />
      <h2 className="m-2 mt-8 text-xl font-bold sm:ml-20">
        {results.length ? 'Possible answers:' : ''}
      </h2>
      <ul className="grid justify-center w-full max-w-md grid-cols-3 gap-6 px-12 mx-auto mb-12 text-3xl font-bold">
        {results.map((result, i) => (
          <li key={i} className="text-center uppercase list-none">
            {result}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
