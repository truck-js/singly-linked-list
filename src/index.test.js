import SinglyLinkedList from './index';

describe('.length', () => {
  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  test('Returns \'0\' upon construction of the SinglyLinkedList', () => {
    expect(singlyLinkedList.length).toBe(0);
  });

  test('Returns the length of the SinglyLinkedList after adding values', () => {
    const expected = 5;

    singlyLinkedList.insert(1);
    singlyLinkedList.insert(2);
    singlyLinkedList.insert(3);
    singlyLinkedList.insert(4);
    singlyLinkedList.insert(5);
    const actual = singlyLinkedList.length;

    expect(actual).toBe(expected);
  });

  test('Returns the length of the SinglyLinkedList after removing values', () => {
    const expected = 2;

    singlyLinkedList.delete(1);
    singlyLinkedList.delete(2);
    singlyLinkedList.delete(3);
    const actual = singlyLinkedList.length;

    expect(actual).toBe(expected);
  });

  test('Returns \'0\' again after all values are deleted', () => {
    const expected = 0;

    singlyLinkedList.delete(4);
    singlyLinkedList.delete(5);
    const actual = singlyLinkedList.length;

    expect(actual).toBe(expected);
  });
});

describe('.delete()', () => {
  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  test('Returns \'false\' when trying to delete a value from an empty SinglyLinkedList', () => {
    expect(singlyLinkedList.delete(1)).toBe(false);
  });

  test('Returns \'true\' when an value is deleted', () => {
    const expected = true;

    singlyLinkedList.insert(1);
    singlyLinkedList.insert(2);
    singlyLinkedList.insert(3);
    const actual = singlyLinkedList.delete(3);

    expect(actual).toBe(expected);
  });

  test('Returns \'false\' when the value could not be found', () => {
    expect(singlyLinkedList.delete(2000)).toBe(false);
  });

  test('Deletes all values in a SinglyLinkedList', () => {
    expect([singlyLinkedList.delete(1), singlyLinkedList.delete(2)]).toEqual([true, true]);
  });

  test('Deletes values given a comparator', () => {
    const expected = 2;

    singlyLinkedList.insert({ name: 1 });
    singlyLinkedList.insert({ name: 2 });
    singlyLinkedList.insert({ name: 3 });
    singlyLinkedList.delete({ name: 3 }, ({ name: nameA }, { name: nameB }) => nameA === nameB);
    const actual = singlyLinkedList.length;

    expect(actual).toBe(expected);
  });
});

describe('.insert()', () => {
  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  test('Inserts the values successfully', () => {
    const expected = 3;

    singlyLinkedList.insert(1);
    singlyLinkedList.insert(2);
    singlyLinkedList.insert(3);
    const actual = singlyLinkedList.length;

    expect(actual).toBe(expected);
  });
});

describe('.search()', () => {
  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.insert(1);
    singlyLinkedList.insert('two');
    singlyLinkedList.insert({ name: 3 });
  });

  test('Finds a primitive value without a custom comparator', () => {
    expect(singlyLinkedList.search('two').value).toBe('two');
  });

  test('Finds an object with a custom comparator', () => {
    const comparator = ({ name: nameA }, { name: nameB }) => nameA === nameB;
    const expected = { name: 3 };

    const actual = singlyLinkedList.search({ name: 3 }, comparator).value;

    expect(actual).toEqual(expected);
  });

  test('Returns \'undefined\' when a value could not be found', () => {
    expect(singlyLinkedList.search(2000)).toBe(undefined);
  });
});

describe('.toArray()', () => {
  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  test('Returns an empty array when no values have been inserted', () => {
    expect(singlyLinkedList.toArray()).toEqual([]);
  });

  test('Returns an array of items inside the SinglyLinkedList', () => {
    const VALUE_A = 'VALUE_A';
    const VALUE_B = 'VALUE_B';
    const VALUE_C = 'VALUE_C';
    const expected = [VALUE_A, VALUE_B, VALUE_C];

    singlyLinkedList.insert(VALUE_C);
    singlyLinkedList.insert(VALUE_B);
    singlyLinkedList.insert(VALUE_A);
    const actual = singlyLinkedList.toArray();

    expect(actual).toEqual(expected);
  });
});
