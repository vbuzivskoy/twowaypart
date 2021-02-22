#!/usr/bin/env node

import { Command } from 'commander';
import app from '..';

const program = new Command();
program
  .version('1.0.0')
  .usage('<setFile>')
  .description('Two-way number partitioning tool')
  .arguments('<setFile>')
  .action((setFile) => {
    console.log(app(setFile));
  });

program.parse(process.argv);
