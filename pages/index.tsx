import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputRow from '../components/InputRow';

const IndexPage = () => {
  const [matches, setMatches] = useState<string>("a____");
  const [partials, setPartials] = useState<string>('_bb__');
  const [editing, setEditing] = useState<string>(null);

  const toggleEditing = (id) => {
    setEditing(id);
  }

  return (
    <Layout title="Wordle Wizard">
      <h2 className="m-2 mt-4 text-xl font-bold sm:ml-24">Enter matches:</h2>
      <InputRow
        input={matches}
        type="match"
        editing={editing}
        toggleEditing={toggleEditing}
      />
      <InputRow
        input={partials}
        type="partial"
        editing={editing}
        toggleEditing={toggleEditing}
      />
    </Layout>
  );
};

export default IndexPage;
