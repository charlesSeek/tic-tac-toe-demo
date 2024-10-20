jest.unmock('../check_winner');
jest.unmock('../win_set');
import check_winner from '../check_winner';

describe('checkWinner', () => {
    it('should return the winner for a row win', () => {
        const cell_vals = {
            c1: 'x', c2: 'x', c3: 'x',
            c4: 'o', c5: 'o', c6: '',
            c7: '', c8: '', c9: ''
        }
        expect(check_winner(cell_vals)).toEqual({ winner: 'x', set: ['c1', 'c2', 'c3']});
    });

    it('should return the correct winner for a column win', () => {
        const cell_vals = {
            c1: 'o', c2: '', c3: 'x',
            c4: 'o', c5: 'x', c6: '',
            c7: 'o', c8: 'x', c9: ''
        };
        expect(check_winner(cell_vals)).toEqual({ winner: 'o', set: ['c1', 'c4', 'c7']});
    });

    it('should return the winner for a diagonal win', () => {
        const cell_vals = {
            c1: 'x', c2: 'o', c3: '',
            c4: 'o', c5: 'x', c6: '',
            c7: '', c8: '', c9: 'x'
        };
        expect(check_winner(cell_vals)).toEqual({ winner: 'x', set: ['c1', 'c5', 'c9']});
    });

    it('should return null when the game is still ongoing', () => {
        const cell_vals = {
            c1: 'x', c2: '', c3: '',
            c4: 'o', c5: 'x', c6: '',
            c7: '', c8: 'o', c9: ''
        };
        expect(check_winner(cell_vals)).toEqual({ winner: null, set: null});
    });

    it('should return "draw" when all cells are filled and there is no winner', () => {
        const cell_vals = {
            c1: 'x', c2: 'o', c3: 'x',
            c4: 'x', c5: 'x', c6: 'o',
            c7: 'o', c8: 'x', c9: 'o'
        };
        expect(check_winner(cell_vals)).toEqual({ winner: 'draw', set: null});
    });
});