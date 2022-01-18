import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputRow from '../components/InputRow';

const IndexPage = () => {
  const [matches, setMatches] = useState<string>('_____');
  const [partials, setPartials] = useState<string>('_____');
  const [misses, setMisses] = useState<string>('_____');
  const [editing, setEditing] = useState<string>(null);

  return (
    <Layout title="Wordle Wizard">
      <h2 className="m-2 mt-4 text-xl font-bold sm:ml-24">Enter matches:</h2>
      <InputRow
        input={matches}
        onInput={setMatches}
        type="match"
        editing={editing}
        setEditing={setEditing}
      />
      <h2 className="m-2 mt-4 text-xl font-bold sm:ml-24">
        Enter partial matches:
      </h2>
      <InputRow
        input={partials}
        onInput={setPartials}
        type="partial"
        editing={editing}
        setEditing={setEditing}
      />
      <h2 className="max-w-lg m-2 mt-4 text-xl font-bold sm:ml-24">
        Enter misses:
      </h2>
      <InputRow
        input={misses}
        onInput={setMisses}
        type="miss"
        editing={editing}
        setEditing={setEditing}
      />
    </Layout>
  );
};

export default IndexPage;
