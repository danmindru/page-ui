const ora = require('ora');
const chalk = require('chalk');
const { prompt } = require('enquirer');
const { program } = require('commander');

const FILES = [
  'tailwind.config.js',
  'data/config/colors.js',
  'lib/utils.js',
  'components/shared/ui/accordion.js',
  'components/shared/ui/button.js',
  'components/shared/ui/glow-bg.tsx',
];

const DIRECTORIES = ['components/landing'];

const copyFilesAndDirectories = async () => {
  try {
    const basePath = process.cwd();

    // Copy existing files
    for (const file of existingFiles) {
      await fs.copyFile(
        path.join(basePath, file),
        path.join(basePath, path.basename(file))
      );
      console.log(`${file} copied successfully.`);
    }

    // Copy entire directories
    for (const directory of DIRECTORIES) {
      const files = await fs.readdir(path.join(basePath, directory), {
        withFileTypes: true,
      });

      for (const file of files) {
        if (file.isFile()) {
          await fs.copyFile(
            path.join(basePath, directory, file.name),
            path.join(basePath, directory, file.name)
          );
        }
      }
    }

    chalk.green(
      `✅ Page UI initialized successfully! Here's what you can do next`
    );
    chalk.green(
      `- Check docs at https://pageui.dev/docs/landing-page-components`
    );
    chalk.green(
      `- Get started with templates https://shipixen.com/demo/landing-page-templates`
    );
  } catch (error) {
    chalk.red("💥 Couldn't copy files");
    chalk.red(error);
  }
};

const program = new Command();
program.name('page-ui').version(require('./package.json').version);

program
  .command('init')
  .description('Setup Page UI: adds required files to your project')
  .action(async () => {
    try {
      // Check for existing files and prompt for confirmation.
      const existingFilesAndDirectories = [];

      for (const file of FILES) {
        if (fs.existsSync(file)) {
          existingFilesAndDirectories.push(file);
        }
      }

      for (const directory of DIRECTORIES) {
        if (fs.existsSync(directory)) {
          existingFilesAndDirectories.push(directory);
        }
      }

      if (existingFilesAndDirectories.length > 0) {
        const response = await prompt({
          type: 'confirm',
          name: 'confirmation',
          message: `The following files/directories already exist: ${existingFilesAndDirectories.join(
            ', '
          )}. They will be overwritten. Do you want to proceed?`,
        });

        if (response.confirmation) {
          const spinner = ora('Initializing Page UI').start();
          await copyFilesAndDirectories();
          spinner.stop();
        } else {
          console.log('👋 Until next time');
        }
      }
    } catch (error) {
      chalk.red("💥 Couldn't initialize Page UI");
      chalk.red(error);
    }
  });

program.parse(process.argv);
