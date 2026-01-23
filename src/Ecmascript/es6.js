import { Search } from './function.js';

export const findLongestWord = (words) => {
  let [...wordList] = words;
  let wordObjects = wordList.map((mot) => ({
    mot,
    longueur: mot.length,
  }));

  if (wordObjects.length === 0) {
    return { mot: '', longueur: 0 };
  }

  let longestWord = wordObjects.reduce((currentLongest, currentWord) => {
    return currentWord.longueur > currentLongest.longueur
      ? currentWord
      : currentLongest;
  });

  return longestWord;
};

export const countOccurrences = (input) => {
  let flattened = input.flat();
  let counts = flattened.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});

  return counts;
};

export const calculateTotalMarks = (students) => {
  let total = students
    .map((student) => {
      let bonusMarks = student.marks < 50 ? student.marks + 15 : student.marks;
      return { ...student, marks: bonusMarks };
    })
    .filter((student) => student.marks > 50)
    .reduce((sum, student) => sum + student.marks, 0);

  return total;
};

export const sampleWords = ['react', 'javascript', 'es6', 'component'];
export const longestWord = findLongestWord(sampleWords);

export const occurrenceInput = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];
export const occurrenceOutput = countOccurrences(occurrenceInput);

export const students = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'John', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];
export const totalMarks = calculateTotalMarks(students);

let lastId = 0;

const withId = (entry) => ({
  id: (lastId += 1),
  ...entry,
});

export const Tab = [
  withId({ label: 'Notebook', category: 'stationery', price: 8 }),
  withId({ label: 'Pencil', category: 'stationery', price: 2 }),
  withId({ label: 'Mug', category: 'kitchen', price: 12 }),
];

Tab.push(withId({ label: 'Backpack', category: 'travel', price: 40 }));
Tab.unshift(withId({ label: 'Lamp', category: 'home', price: 25 }));

export const searchId = 3;
export const searchResult = Search(Tab, searchId);
