#!/usr/bin/env node

import ora from 'ora';
import chalk from 'chalk';
import { Command } from 'commander';
import enquirer from 'enquirer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import NextJsFiles from './files/next.js';
import ReactFiles from './files/react.js';
import { getFiles } from './files/getFiles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsPath = path.join(__dirname, '../../components');

const AVAILABLE_TEMPLATES = [
  {
    name: 'nextjs',
  },
  {
    name: 'react',
  },
];

const DEFAULT_TEMPLATE = AVAILABLE_TEMPLATES[0];

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

const copyFilesAndDirectories = async ({
  files = [],
  directories = [],
  postCopyCommand,
}) => {
  try {
    // Copy existing files
    for (const file of files) {
      await ensureDir(file.to);
      await copyFile(file.from, path.join(process.cwd(), file.to));
    }

    // Copy entire directories
    for (const directory of directories) {
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
    console.log('\n');
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

    if (postCopyCommand) {
      postCopyCommand();
    }

    console.log('\n');
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
  .option(
    '-t, --template <template>',
    `Choose a template from: ${AVAILABLE_TEMPLATES.map(
      (template) => template.name
    ).join(', ')}. Default: ${DEFAULT_TEMPLATE.name}`,
    DEFAULT_TEMPLATE.name
  )
  .option(
    '-src, --source <source>',
    'Source directory. Defaults to root, but you might be using "src".',
    ''
  )
  .action(async (opts) => {
    const { template, src } = opts;

    if (process.env.DEBUG) {
      console.log(JSON.stringify(process.argv, null, 2));
      console.log(JSON.stringify({ template, src }, null, 2));
    }

    let sourceDirectory = src;

    if (!src) {
      // TODO: Ask for src directory for Next.js
      switch (template) {
        case 'react':
          sourceDirectory = 'src';
          break;

        default:
          sourceDirectory = '';
      }
    }

    let files, directories;

    switch (template) {
      case 'nextjs':
        files = NextJsFiles.FILES;
        directories = NextJsFiles.DIRECTORIES;
        break;
      case 'react':
        files = ReactFiles.FILES;
        directories = ReactFiles.DIRECTORIES;
        break;
      default:
        files = NextJsFiles.FILES;
        directories = NextJsFiles.DIRECTORIES;
    }

    files = getFiles({
      toPathPrefix: sourceDirectory,
      filelist: files,
      fromPlaceholderReplacement: componentsPath,
      toPathIgnore: [
        'tailwind.config.js',
        'tailwind.config.ts',
        'data/config/colors.js',
      ],
    });

    directories = getFiles({
      toPathPrefix: sourceDirectory,
      filelist: directories,
      fromPlaceholderReplacement: componentsPath,
    });

    try {
      // Check for existing files and prompt for confirmation.
      const existingFilesAndDirectories = [];

      // Check which files exist
      for (const file of files) {
        try {
          await fs.access(path.join(process.cwd(), file.to));
          existingFilesAndDirectories.push(file.to);
        } catch (error) {}
      }

      // Check which directories exist
      for (const directory of directories) {
        try {
          await fs.access(path.join(process.cwd(), directory.to));
          existingFilesAndDirectories.push(directory.to);
        } catch (error) {}
      }

      if (existingFilesAndDirectories.length > 0) {
        const response = await enquirer.prompt({
          type: 'confirm',
          name: 'confirmation',
          initial: 'Y',
          format: (value) => (value ? 'Y' : 'n'),
          message: `The following files/directories will be overwritten:\n${existingFilesAndDirectories
            .map((file) => `  - ${chalk.bold(file)}`)
            .join(',\n')} \n\nDo you want to proceed?`,
        });

        if (response.confirmation) {
          const spinner = ora('Initializing Page UI').start();
          await copyFilesAndDirectories({
            files,
            directories,
          });
          spinner.stop();
        } else {
          const response = await enquirer.prompt({
            type: 'confirm',
            name: 'skip',
            initial: 'Y',
            format: (value) => (value ? 'Y' : 'n'),
            message: `Would you like to only copy the missing files/directories only? (This will not overwrite any existing files)`,
          });

          if (response.skip) {
            const spinner = ora('Initializing Page UI').start();
            await copyFilesAndDirectories({
              files: files.filter(
                (file) => !existingFilesAndDirectories.includes(file.to)
              ),
              directories: directories.filter(
                (directory) =>
                  !existingFilesAndDirectories.includes(directory.to)
              ),
              postCopyCommand: () => {
                console.log(
                  `- ${chalk.italic(
                    'Some files where skipped'
                  )}. See how to set them up manually at ${chalk.bold(
                    chalk.white(
                      'https://pageui.shipixen.com/docs/installation/manual-reactjs'
                    )
                  )}`
                );
              },
            });
            spinner.stop();
          } else {
            console.log('Cancelling...');
            console.log('👋 Until next time');
          }
        }
      } else {
        const spinner = ora('Initializing Page UI').start();
        await copyFilesAndDirectories({
          files,
          directories,
        });
        spinner.stop();
      }
    } catch (error) {
      console.error(chalk.red('😔 No landing pages where made today'));
      console.error(chalk.red(error));
    }
  });

program.parse(process.argv);
