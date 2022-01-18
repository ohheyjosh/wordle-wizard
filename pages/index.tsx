import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputRow from '../components/InputRow';

const IndexPage = () => {
  const [matches, setMatches] = useState<string>("a____");
  const [partials, setPartials] = useState<string>('__le_');
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
      <InputRow
        input={partials}
        onInput={setPartials}
        type="partial"
        editing={editing}
        setEditing={setEditing}
      />
    </Layout>
  );
};

export default IndexPage;
