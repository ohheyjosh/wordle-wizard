import dictionary from './dictionary';

const getResults = (matches, partials, misses) => {
  const splitMatches = matches.split('');
  const splitPartials = partials.split('');
  const splitMisses = misses.replace(/_/g, '').split('');

  const isMatch = (word) => {
    const splitWord = word.split('');

    // check that all matches and partials are present in word
    const requiredLetters = [
      ...splitMatches.filter((char) => char !== '_'),
      ...splitPartials.filter((char) => char !== '_'),
    ];
    if (!requiredLetters.every((letter) => splitWord.includes(letter))) {
      return false;
    }

    for (const [i, letter] of splitWord.entries()) {
      if (splitMatches[i] !== '_' && splitMatches[i] !== letter) {
        // reject if a match isn't found
        return false;
      }
      if (splitPartials[i] === letter) {
        // reject if a partial match is found in the place it was guessed in
        return false;
      }
      if (splitMisses.includes(letter) && !splitMatches.includes(letter)) {
        // reject if a miss is found and isn't already matched
        return false;
      }
    }

    return true;
  };

  return dictionary.filter((word) => isMatch(word));
};

export default getResults;
