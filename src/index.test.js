import SinglyLinkedList from './index';

describe('Basic usage', () => {
  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.insert(1);
    singlyLinkedList.insert(2);
    singlyLinkedList.insert(3);
    singlyLinkedList.insert(4);
    singlyLinkedList.insert(5);
  });

  test('Adds the last value as \'head\'', () => {
    expect(singlyLinkedList.head.value).toBe(5);
  });

  test('Holds a reference to the next value in the first', () => {
    expect(singlyLinkedList.head.next.value).toBe(4);
  });
});

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
    singlyLinkedList.delete(value => value.name === 3);
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

describe('.insertAfter()', () => {
  const VALUE_ONE = 'VALUE_ONE';
  const VALUE_TWO = 'VALUE_TWO';
  const VALUE_THREE = { three: 'three' };
  const VALUE_FOUR = 'VALUE_FOUR';
  const VALUE_FIVE = 'VALUE_FIVE';

  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  test('Adds the value as \'head\' if no value exists', () => {
    const expected = VALUE_ONE;

    singlyLinkedList.insertAfter(VALUE_ONE, 12);
    const actual = singlyLinkedList.head.value;

    expect(actual).toBe(expected);
  });

  test('Adds the value at the end if the given \'before\' is not found', () => {
    const expected = VALUE_TWO;

    singlyLinkedList.insertAfter(VALUE_TWO, 12);
    const actual = singlyLinkedList.head.next.value;

    expect(actual).toBe(expected);
  });

  test('Adds the value after the given value if \'after\' is found', () => {
    const expected = VALUE_THREE;

    singlyLinkedList.insertAfter(VALUE_THREE, VALUE_TWO);
    const actual = singlyLinkedList.head.next.next.value;

    expect(actual).toBe(expected);
  });

  test('Adds the value after the given value if \'after\' is a comparator that returns \'true\'', () => {
    const expected = VALUE_FIVE;

    singlyLinkedList.insertAfter(VALUE_FOUR, value => value.three === 'three');
    singlyLinkedList.insertAfter(VALUE_FIVE, value => value.three === 'three');
    const actual = singlyLinkedList.head.next.next.next.value;

    expect(actual).toBe(expected);
  });
});

describe('.insertBefore()', () => {
  const VALUE_ONE = 'VALUE_ONE';
  const VALUE_TWO = 'VALUE_TWO';
  const VALUE_THREE = { three: 'three' };
  const VALUE_FOUR = 'VALUE_FOUR';
  const VALUE_FIVE = { five: 'five' };

  let singlyLinkedList;

  beforeAll(() => {
    singlyLinkedList = new SinglyLinkedList();
  });

  test('Adds the value as \'head\' if no values exist', () => {
    const expected = VALUE_ONE;

    singlyLinkedList.insertBefore(VALUE_ONE, 12);
    const actual = singlyLinkedList.head.value;

    expect(actual).toBe(expected);
  });

  test('Adds the value at the end if the given \'before\' is not found', () => {
    const expected = VALUE_TWO;

    singlyLinkedList.insertBefore(VALUE_TWO, 12);
    const actual = singlyLinkedList.head.next.value;

    expect(actual).toBe(expected);
  });

  test('Adds the value before the given value if \'before\' is found', () => {
    const expected = VALUE_THREE;

    singlyLinkedList.insertBefore(VALUE_THREE, VALUE_TWO);
    const actual = singlyLinkedList.head.next.value;

    expect(actual).toBe(expected);
  });

  test('Adds the value before the given value if \'before\' is a comparator that returns \'true\'', () => {
    const expected = VALUE_FOUR;

    singlyLinkedList.insertBefore(VALUE_FIVE, VALUE_TWO);
    singlyLinkedList.insertBefore(VALUE_FOUR, value => value.five === 'five');
    const actual = singlyLinkedList.head.next.next.value;

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
    const expected = { name: 3 };

    const actual = singlyLinkedList.search(value => value.name === 3).value;

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
