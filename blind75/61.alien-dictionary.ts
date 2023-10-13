export function alienOrder(words: string[]): string {
  // Creating a mapping of each character to a Set of characters that
  // come after it and a counter of characters that come before it.
  const letters: Record<string, [Set<string>, number]> = {};

  // Initialize letters with all unique characters from words
  for(let i = 0; i < words.length; i++) {
      for(let j = 0; j < words[i].length; j++) {
          if(!Object.hasOwn(letters, words[i][j]))
            letters[words[i][j]] = [new Set(), 0];
      }
  }

  // Identify direct succession relationships between characters based on words order
  for(let i = 0; i < words.length - 1; i++) {
      for(let j = 0; j < words[i].length; j++) {
          // Return an empty string if a prefix of a word comes after the word itself
          if (j >= words[i + 1].length)
              return '';
          const [firstLetter, secondLetter] = [words[i][j], words[i+1][j]];
          if(firstLetter === secondLetter)
            continue;

          // If already recorded this succession, stop checking this pair of words
          if (letters[firstLetter][0].has(secondLetter)) {
              break;
          }
          else {
              // Record the succession relationship and increment the predecessor count
              letters[firstLetter][0].add(secondLetter);
              letters[secondLetter][1]++;
          }
          break;
      }
  }

  // Initialize a result array and a set for uniqueness checks
  const res: string[] = [];
  const uniques:Set<string> = new Set();
  // Identify characters with no predecessors and add them to avail
  const avail: string[] = [];
  Object.entries(letters).forEach((entry) => {
      if(entry[1][1] === 0) {
          avail.push(entry[0]);
      }
  })

  // While there are characters with no predecessors we can keep doing stuff
  while (avail.length) {
      const letter = avail.pop() as string;
      // Ignore repeated characters.
      if(uniques.has(letter))
        continue

      // Add character to result and uniqueness set
      res.push(letter);
      uniques.add(letter);

      // If this character has successors lets handle them
      if (Object.hasOwn(letters,letter)) {
          // Reduce predecessor count for each successor and potentially add to avail
          for (let child of letters[letter][0]) {
              letters[child][1]--;
              if(letters[child][1] === 0)
                  avail.push(child);
          }
      }
  }

  // Return the character order if all unique characters were used, otherwise return an empty string
  if(res.length === Object.keys(letters).length)
      return res.join('');
  return '';
};