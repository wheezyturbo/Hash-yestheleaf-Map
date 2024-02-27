const HashMap = require('../hash_map')

describe('HashMap', () => {
    let map;

    beforeEach(() => {
        map = new HashMap();
    });

    test('set() and get()', () => {
        map.set('key1', 'value1');
        map.set('key2', 'value2');

        expect(map.get('key1')).toBe('value1');
        expect(map.get('key2')).toBe('value2');
    });

    test('has()', () => {
        map.set('key1', 'value1');

        expect(map.has('key1')).toBe(true);
        expect(map.has('nonexistentKey')).toBe(false);
    });

    test('remove()', () => {
        map.set('key1', 'value1');

        expect(map.remove('key1')).toBe(true);
        expect(map.has('key1')).toBe(false);
        expect(map.remove('nonexistentKey')).toBe(false);
    });

    test('length()', () => {
        map.set('key1', 'value1');
        map.set('key2', 'value2');

        expect(map.length()).toBe(2);
    });

    test('clear()', () => {
        map.set('key1', 'value1');
        map.set('key2', 'value2');

        map.clear();

        expect(map.length()).toBe(0);
        expect(map.has('key1')).toBe(false);
        expect(map.has('key2')).toBe(false);
    });

    test('keys()', () => {
        map.set('key1', 'value1');
        map.set('key2', 'value2');

        expect(map.keys()).toEqual(['key1', 'key2']);
    });

    test('values()', () => {
        map.set('key1', 'value1');
        map.set('key2', 'value2');

        expect(map.values()).toEqual(['value1', 'value2']);
    });

    test('entries()', () => {
        map.set('key1', 'value1');
        map.set('key2', 'value2');

        expect(map.entries()).toEqual([['key1', 'value1'], ['key2', 'value2']]);
    });
});
