import { beforeEach, describe, expect, it } from 'vitest';
import { SinglyLinkedList, DoublyLinkedList } from './index';

describe('SinglyLinkedList (unit)', () => {
  let ds: SinglyLinkedList;

  beforeEach(() => {
    ds = new SinglyLinkedList();
  });

  it('inserts and contains values', () => {
    ds.insert(1);
    ds.insert(2);
    expect(ds.contains(1)).toBe(true);
    expect(ds.contains(2)).toBe(true);
  });

  it('returns false when a value is not found', () => {
    expect(ds.contains(3)).toBe(false);
  });

  it('removes head, middle, and tail correctly', () => {
    [1, 2, 3, 4].forEach((v) => {
      ds.insert(v);
    });

    expect(ds.remove(0)).toBe(false);
    // [1,2,3,4]

    expect(ds.remove(2)).toBe(true);
    // [1,3,4]

    expect(ds.remove(1)).toBe(true);
    // [3,4]

    expect(ds.remove(3)).toBe(true);
    // [4]

    expect(ds.remove(4)).toBe(true);
    // null
  });
});

describe('DoublyLinkedList (unit)', () => {
  let ds: DoublyLinkedList;

  beforeEach(() => {
    ds = new DoublyLinkedList();
  });

  it('inserts and contains values', () => {
    ds.insert(1);
    ds.insert(2);
    expect(ds.contains(1)).toBe(true);
    expect(ds.contains(2)).toBe(true);
  });

  it('returns false when a value is not found', () => {
    expect(ds.contains(3)).toBe(false);
  });

  it('removes head, middle, and tail correctly', () => {
    [1, 2, 3, 4].forEach((v) => {
      ds.insert(v);
    });

    expect(ds.remove(0)).toBe(false);
    // [1,2,3,4]

    expect(ds.remove(2)).toBe(true);
    // [1,3,4]

    expect(ds.remove(1)).toBe(true);
    // [3,4]

    expect(ds.remove(3)).toBe(true);
    // [4]

    expect(ds.remove(4)).toBe(true);
    // null
  });
});
