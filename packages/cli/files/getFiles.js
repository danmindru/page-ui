import path from 'path';
import { PLACEHOLDER_PATH } from './consts/placeholder.js';

export const getFiles = ({
  toPathPrefix = '',
  toPathIgnore = [],
  filelist,
  fromPlaceholder = PLACEHOLDER_PATH,
  fromPlaceholderReplacement = '',
}) => {
  return filelist.map((file) => {
    const fromPath = file.from.replace(
      fromPlaceholder,
      fromPlaceholderReplacement
    );
    const toPath = !toPathIgnore.includes(file.to)
      ? path.join(toPathPrefix, file.to)
      : file.to;

    return {
      from: fromPath,
      to: toPath,
    };
  });
};
