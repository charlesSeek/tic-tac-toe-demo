jest.unmock('../find_best_move');
jest.unmock('../check_winner');
jest.unmock('../win_set');
import find_best_move from '../find_best_move';

describe('find best move', () => {
    it('should return the best move c1', () => {
        const cell_vals = {
            c1: '', c2: '', c3: '',
            c4: '', c5: 'x', c6: '',
            c7: '', c8: '', c9: ''
        }
        expect(find_best_move(cell_vals)).toBe('c1');
    });
    it('should return the best move c6', () => {
        const cell_vals = {
            'c1': 'o', 'c2': '', 'c3': '',
            'c4': 'x', 'c5': 'x', 'c6': '',
            'c7': '', 'c8': '', 'c9': ''
        };
        expect(find_best_move(cell_vals)).toBe('c6');
    });
    it('should return the best move c8', () => {
        const cell_vals = {
            'c1': 'o', 'c2': 'x', 'c3': '',
            'c4': 'x', 'c5': 'x', 'c6': 'o',
            'c7': '', 'c8': '', 'c9': ''
        };
        expect(find_best_move(cell_vals)).toBe('c8');
    });
    it('should return the best move c3', () => {
        const cell_vals = {
            'c1': 'o', 'c2': 'x', 'c3': '',
            'c4': 'x', 'c5': 'x', 'c6': 'o',
            'c7': 'x', 'c8': '', 'c9': ''
        };
        expect(find_best_move(cell_vals)).toBe('c3');
    });
});