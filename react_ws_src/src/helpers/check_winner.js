import win_set from './win_set';
const check_winner = (cell_vals) => {
    for (let item of win_set) {
        const [a, b, c] = item;
        if (cell_vals[a] && cell_vals[a] === cell_vals[b] && cell_vals[a] === cell_vals[c]) {
            return { winner: cell_vals[a], set: item };
        }
    }
    const result = Object.values(cell_vals).includes('') ? null : 'draw';
    return { winner: result, set: null }
}

export default check_winner
