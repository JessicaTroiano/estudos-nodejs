
import _ from 'lodash';
import chalk from 'chalk';

const a = [1, 2, 3, 5, 8];
const b = [2, 4, 5, 6, 9];

const diff = _.difference(a,b);

console.log(chalk.red.bold(diff));