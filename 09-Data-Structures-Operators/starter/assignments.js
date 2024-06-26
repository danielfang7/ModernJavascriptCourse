const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

console.log(`----ASSIGNMENTS----`);

// Assignment 1: Destructuring Arrays
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Assignment 2: Destructuring Objects
const [{ title, author, ISBN }] = books;
console.log(title, author, ISBN);

const [{ keywords: tags }] = books;
console.log(tags);

const { language, programmingLanguage = `unknown` } = books[6];
console.log(language, programmingLanguage);

// Mutating variables with object property values
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
[{ title: bookTitle, author: bookAuthor }] = books;
console.log(bookTitle, bookAuthor);

// Nested destructuring
const [
  {
    thirdParty: {
      goodreads: { rating: bookRating },
    },
  },
] = books;
console.log(bookRating);

// Function where we instantly destructure the object passed into function parameter
const printBookInfo = function ({ title, author, year = `year unknown` }) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

// Assignment 3: Spread Operator
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (string) {
  console.log(...string);
};

spellWord(`Daniel`);

// Assignment 4: Rest Pattern and Parameters
const [mainKeywords, ...rest] = books[0].keywords;
console.log(mainKeywords, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Assignment 5: Short Circuiting
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === `Java` || `no data available`;
};

console.log(hasExamplesInJava(books[0]));

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provides online content`);
}

// Assignment 6: Nullish Coalescing Operator
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content`);
}

// Assignment 7: Logical Assignments Operators
for (const book of books) {
  book.edition ||= 1;
}

console.log(books);

for (const book of books) {
  book.highlighted &&= !book.thirdParty.goodreads.rating < 4.2;
}

console.log(books);

// Assignment 8: Looping Arrays: The for-of Loop
let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === `string`) {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
console.log(allAuthors);

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}

// Assignment 9: Enhanced Object Literals
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Setting object properties using enhanced object literals
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

// Adding a variable to an object using enhanced object literals
const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);

// Assignment 10: Optional Chaining
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};
console.log(getFirstKeyword(books[0]));

// Assignment 11: Looping Objects
const entriesAssignment = [];
const read = Object.keys(books[0].thirdParty.goodreads);
for (const key of read) {
  entriesAssignment.push([key]);
}
console.log(entriesAssignment);

const valueAssignment = Object.values(books[0].thirdParty.goodreads).entries();
console.log(valueAssignment);
for (const [key, value] of valueAssignment) {
  entriesAssignment[key].push(value);
}
console.log(entriesAssignment);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

// Assignment 12: Sets
//1
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

//2
const uniqueKeywords = new Set(allKeywords);

//3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
//4
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

//5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

//6
uniqueKeywords.clear();
console.log(uniqueKeywords);

// Assignment 13: Maps
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
bookMap.set(`pages`, 464);
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
console.log(bookMap.size);

bookMap.has(`author`)
  ? console.log(`The author of the book is known`)
  : console.log(`Not known author`);

// Assignment 14: Maps Iteration

//Creating a new map from an Object
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// Looping over Map and Destructuring (remember, maps are just arrays of arrays)
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(`${key}`);
}

// Assignment 15 - 17: Working with Strings

//Part 1
console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
);

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf(`chess`));

console.log(quote.slice(quote.indexOf(`boxing`)));

const isContributor = function (name) {
  name.includes(`Contributor`) ? console.log(true) : console.log(false);
};

isContributor('Julie Sussman (Contributor)');

//Part 2
function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
}
console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

const newBookTitle = books[1].title.replace(`Programs`, `Software`);
console.log(newBookTitle);

const logBookTheme = function (title) {
  if (title.toLowerCase().startsWith(`computer`)) {
    console.log(`This book is about computers`);
  } else if (
    title.toLowerCase().includes(`algorithms`) &&
    title.includes(`structures`)
  ) {
    console.log(`This book is about algorithms and data structures`);
  } else if (
    (title.toLowerCase().endsWith(`system`) ||
      title.toLowerCase().endsWith(`systems`)) &&
    !title.toLowerCase().includes(`operating`)
  ) {
    console.log(
      `This book is about some systems, but definitely not about operating systems`
    );
  }
};

logBookTheme(books[0].title);
logBookTheme(books[1].title);
logBookTheme(books[2].title);
