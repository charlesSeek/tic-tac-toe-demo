import check_winner from './check_winner';
import win_set from './win_set';

const minimax_score = (cell_vals, depth, isMaximizing) => {
    let { winner } = check_winner(cell_vals, win_set);
    if (winner === 'x') return depth - 10;
    if (winner === 'o') return 10 - depth;
    if (winner === 'draw') return 0;
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let cellId in cell_vals) {
            if (cell_vals[cellId] === '') {
                cell_vals[cellId] = 'o';
                let score = minimax_score(cell_vals, depth + 1, false);
                cell_vals[cellId] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let cellId in cell_vals) {
            if (cell_vals[cellId] === '') {
                cell_vals[cellId] = 'x';
                let score = minimax_score(cell_vals, depth + 1, true);
                cell_vals[cellId] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

const find_best_move = (cell_vals) => {
    let bestScore = -Infinity;
    let move;
    for (let cellId in cell_vals) {
        if (cell_vals[cellId] === '') {
            cell_vals[cellId] = 'o';
            let score = minimax_score(cell_vals, 0, false);
            cell_vals[cellId] = '';
            if (score > bestScore) {
                bestScore = score;
                move = cellId;
            }
        }
    }
    return move;
}

export default find_best_move;