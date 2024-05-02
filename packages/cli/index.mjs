#!/usr/bin/env node

import ora from 'ora';
import chalk from 'chalk';
import { Command } from 'commander';
import enquirer from 'enquirer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsPath = path.join(__dirname, '../../components');

const FILES = [
  {
    from: `${componentsPath}/tailwind.config.ts`,
    to: 'tailwind.config.ts',
  },

  {
    from: `${componentsPath}/data/config/colors.js`,
    to: 'data/config/colors.js',
  },

  {
    from: `${componentsPath}/lib/utils.ts`,
    to: 'lib/utils.ts',
  },

  {
    from: `${componentsPath}/shared/ui/accordion.tsx`,
    to: 'components/shared/ui/accordion.tsx',
  },

  {
    from: `${componentsPath}/shared/ui/button.tsx`,
    to: 'components/shared/ui/button.tsx',
  },

  {
    from: `${componentsPath}/shared/ui/glow-bg.tsx`,
    to: 'components/shared/ui/glow-bg.tsx',
  },

  {
    from: `${componentsPath}/shared/Image.tsx`,
    to: 'components/shared/Image.tsx',
  },

  {
    from: `${componentsPath}/shared/VideoPlayer.tsx`,
    to: 'components/shared/VideoPlayer.tsx',
  },
];

const DIRECTORIES = [
  {
    from: `${componentsPath}/landing`,
    to: 'components/landing',
  },
];

const copyFile = async (src, dest) => {
  return fs.copyFile(src, dest);
};

const copyDirectory = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
};

const ensureDir = async (filePath) => {
  const dirname = path.dirname(filePath);
  await fs.mkdir(dirname, { recursive: true });
};

const copyFilesAndDirectories = async () => {
  try {
    // TODO: Check for src directory

    // Copy existing files
    for (const file of FILES) {
      await ensureDir(file.to);
      await copyFile(file.from, path.join(process.cwd(), file.to));
    }

    // Copy entire directories
    for (const directory of DIRECTORIES) {
      await copyDirectory(
        directory.from,
        path.join(process.cwd(), directory.to)
      );
    }

    console.log('\n');
    console.log(
      chalk.bold(
        chalk.green(
          `✅ Page UI initialized successfully! Here's what you can do next`
        )
      )
    );
    console.log(
      `- Check docs at ${chalk.bold(
        chalk.white('https://pageui.dev/docs/landing-page-components')
      )}`
    );
    console.log(
      `- Get started with templates ${chalk.bold(
        chalk.white('https://shipixen.com/demo/landing-page-templates')
      )}`
    );
  } catch (error) {
    console.log('\n');
    console.error(chalk.red("💥 Couldn't copy files"));
    console.error(chalk.red(error));
  }
};

const program = new Command();
program.name('page-ui').version('1.0.0');

program
  .command('init')
  .description('Setup Page UI: adds required files to your project')
  .action(async () => {
    try {
      // Check for existing files and prompt for confirmation.
      const existingFilesAndDirectories = [];

      // Check which files exist
      for (const file of FILES) {
        try {
          await fs.access(path.join(process.cwd(), file.to));
          existingFilesAndDirectories.push(file.to);
        } catch (error) {}
      }

      // Check which directories exist
      for (const directory of DIRECTORIES) {
        try {
          await fs.access(path.join(process.cwd(), directory.to));
          existingFilesAndDirectories.push(directory.to);
        } catch (error) {}
      }

      if (existingFilesAndDirectories.length > 0) {
        const response = await enquirer.prompt({
          type: 'confirm',
          name: 'confirmation',
          initial: true,
          message: `The following files/directories will be overwritten:\n${existingFilesAndDirectories
            .map((file) => `  - ${chalk.red(file)}`)
            .join(', \n')}. \n\nDo you want to proceed?`,
        });

        if (response.confirmation) {
          const spinner = ora('Initializing Page UI').start();
          await copyFilesAndDirectories();
          spinner.stop();
        } else {
          console.log('👋 Until next time');
        }
      } else {
        const spinner = ora('Initializing Page UI').start();
        await copyFilesAndDirectories();
        spinner.stop();
      }
    } catch (error) {
      console.error(chalk.red('😔 No landing pages where made today'));
      console.error(chalk.red(error));
    }
  });

program.parse();
