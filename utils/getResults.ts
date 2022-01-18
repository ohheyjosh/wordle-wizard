import dictionary from './dictionary';

const getResults = (matches, partials, misses) => {
  const splitMatches = matches.split('');
  const splitPartials = partials.split('');
  const splitMisses = misses.replace(/[^a-z]/g, '').split('');

  const isMatch = (word) => {
    const splitWord = word.split('');

    for (const [i, letter] of splitWord.entries()) {
      if (splitMatches[i] !== '_' && splitMatches[i] !== letter) {
        // reject if a match isn't found
        return false;
      }
      if (splitPartials[i] === letter) {
        // reject if a partial match was found in the place it was guessed in
        return false;
      }
      if (splitMisses.includes(letter)) {
        // reject if a miss is found
        return false;
      }
    }

    return true;
  };

  return dictionary.filter((word) => isMatch(word));
};

export default getResults;
