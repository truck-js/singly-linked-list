[![Build Status](https://travis-ci.org/truck-js/singly-linked-list.svg?branch=master)](https://travis-ci.org/truck-js/singly-linked-list)
[![Coverage Status](https://coveralls.io/repos/github/truck-js/singly-linked-list/badge.svg?branch=master)](https://coveralls.io/github/truck-js/singly-linked-list?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Singly Linked-List

A JavaScript _Singly Linked-List_ data structure.

## Installation

Install `@truck/singly-linked-list` via npm:

```sh
$ npm install --save @truck/singly-linked-list
```

## Methods

### _Methods >_ `constructor()`

Build a new _Singly Linked-List_.

### _Methods >_ `delete(value: any, comparator?: (a: any, b: any) => boolean): boolean` (_O(n)_)

Deletes a value from the _Singly Linked-List_. The optional `comparator` method can be passed-in,
otherwise a default `===` comparator is used.

### _Methods >_ `insert(value: any): void` (_O(1)_)

Inserts a value at the beginning of the _Singly Linked-List_.

### _Methods >_ `search(value: any, comparator?: (a: any, b: any) => boolean): Node` (_O(n)_)

Returns the first `value` in the _Singly Linked-List_ that matches. The optional `comparator` method
can be passed-in, otherwise a default `===` comparator is used.

### _Methods >_ `toArray(): any[]` (_O(n)_)

Converts the _Singly Linked-List_'s values to an array.

## Properties

### _Properties >_ `.length: number`

Returns the current length of the _Singly Linked-List_.

## Examples

A _Singly Linked-List_ is a standard class which can be instantiated with the `new` keyword:

```js
// Build a new Singly Linked-List
const singlyLinkedList = new SinglyLinkedList();
// Get the length of the Singly Linked-List
let length = singlyLinkedList.length; // 0
// Add some values to the Singly Linked-List
singlyLinkedList.insert(1);
singlyLinkedList.insert('two');
singlyLinkedList.insert({ three: 'three' });
singlyLinkedList.insert(false);
singlyLinkedList.insert('FIVE');
// Get the length of the Singly Linked-List
length = singlyLinkedList.length; // 5
// Search for a Node by value
const node = singlyLinkedList.search(false);
/*
  Node {
    next: Node {
      next: undefined;
      value: 'FIVE';
    };
    value: false;
  }
*/
// Delete some values from the Singly Linked-List
singlyLinkedList.delete(1);
singlyLinkedList.delete('two');
singlyLinkedList.delete({ three: 'three' }, (a, b) => a.three === b.three);
singlyLinkedList.delete(false);
singlyLinkedList.delete('FIVE');
// Get the length of the Singly Linked-List
length = singlyLinkedList.length; // 0
```

## Testing

Use the following command to run all the tests described below together:

```sh
$ docker-compose run --rm app npm test
```

### _Testing >_ Commit messages

Commit messages are linted through the use of [husky](https://www.npmjs.com/package/husky) and
[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) using the
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
commit convention.

Please read through the
[AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
to get a better understanding of how commit messages are formatted.

After doing an `npm install` the required git hooks wil be added automatically and commit messages
will be linted automatically.

### _Testing >_ Linting

Linting is done using [eslint](https://eslint.org/) using the
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) configuration
with very few alterations, all of which can be seen in the [.eslintrc](.eslintrc) file in the root
of this repository.

Linting can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:lint
```

### _Testing >_ Auditing

Auditing of dependencies is done through the [npm audit](https://docs.npmjs.com/cli/audit)
command-line tool.

Auditing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:vulnerabilities
```

### _Testing >_ Unit testing

Unit testing is done with [jest](https://jestjs.io). The test file for each file to be tested is to
be placed alongside the file in testing and marked with the `.test.js` extension.

Unit testing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:scripts
```

## Contributing

Contributions are always welcome, just submit a PR to get the conversation going. Please make sure
all tests pass before submitting a PR.

### _Contributing >_ Releases

The moment a PR is merged into the `master` branch
[semantic-release](https://github.com/semantic-release/semantic-release) will kick-off a new
release, thus the importance of clear commit messages.
