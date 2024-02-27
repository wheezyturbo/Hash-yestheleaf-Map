const LinkedList = require('../list');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('should append nodes correctly', () => {
    linkedList.append('key1', 'value1');
    linkedList.append('key2', 'value2');
    linkedList.append('key3', 'value3');
    expect(linkedList.head.key).toBe('key1');
    expect(linkedList.head.value).toBe('value1');
    expect(linkedList.head.next.key).toBe('key2');
    expect(linkedList.head.next.value).toBe('value2');
    expect(linkedList.head.next.next.key).toBe('key3');
    expect(linkedList.head.next.next.value).toBe('value3');
  });

  test('should find nodes correctly', () => {
    linkedList.append('key1', 'value1');
    linkedList.append('key2', 'value2');
    linkedList.append('key3', 'value3');
    expect(linkedList.find('key1').value).toBe('value1');
    expect(linkedList.find('key2').value).toBe('value2');
    expect(linkedList.find('key3').value).toBe('value3');
    expect(linkedList.find('key4')).toBeNull();
  });

  test('should delete nodes correctly', () => {
    linkedList.append('key1', 'value1');
    linkedList.append('key2', 'value2');
    linkedList.append('key3', 'value3');
    linkedList.delete('key2');
    expect(linkedList.head.next.key).toBe('key3');
    expect(linkedList.head.next.value).toBe('value3');
    linkedList.delete('key1');
    expect(linkedList.head.key).toBe('key3');
    expect(linkedList.head.value).toBe('value3');
    expect(linkedList.head.next).toBeNull();
    linkedList.delete('key3');
    expect(linkedList.head).toBeNull();
  });
});
