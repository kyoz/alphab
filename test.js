import test from 'ava';
import execa from 'execa';

const alphab = require('.');

test('alphabet list must be correct', t => {
  t.deepEqual(alphab, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
});

test('cli output must be correct', async t => {
  const {stdout} = await execa('./cli.js');
  t.deepEqual(stdout, 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z');
});
