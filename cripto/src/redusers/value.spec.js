import value from './value';
import { VALUE } from '../constants';

describe('Search reducers', () => {
    test('should return the initial state', () => {
        expect(value(undefined, {})).toEqual('');
    });
    test('should handle CURRENT', () => {
        expect(
            value('', {
                type: VALUE,
                payload: 'test',
            }),
        ).toEqual('test');
        expect(
            value({ value: 'initial state' }, {
                type: VALUE,
                payload: 'test2',
            }),
        ).toEqual('test2');
    });
});