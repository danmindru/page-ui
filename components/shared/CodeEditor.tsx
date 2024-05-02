import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

import { colors } from '@/data/config/colors';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';
import { cn } from '@/lib/utils';

declare type IMonacoEditor = typeof monaco;

export const MONACO_OPTIONS = {
  padding: {
    bottom: 20,
    top: 20,
  },
  minimap: {
    enabled: false,
  },
  links: false,
  tabSize: 2,
  selectOnLineNumbers: true,
  lineNumbers: 'off',
  roundedSelection: true,
  scrollBeyondLastLine: true,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
  scrollbar: {
    verticalScrollbarSize: 5,
    horizontalScrollbarSize: 5,
  },
} as monaco.editor.IStandaloneEditorConstructionOptions;

export const LIGHT_THEME = 'theme-light';

export const LIGHT_THEME_SETTINGS = {
  base: 'vs' as monaco.editor.BuiltinTheme,
  inherit: true,
  rules: [
    { background: 'EDF9FA', token: '' },
    { token: 'string.value.json', foreground: colors.primary.dark },
    { token: 'string.js', foreground: colors.primary.dark },
  ],
  colors: {
    'editor.background': '#ffffff',
    'minimap.background': '#f3f4f64d',
  },
};

export const DARK_THEME = 'theme-dark';

export const DARK_THEME_SETTINGS = {
  base: 'vs-dark' as monaco.editor.BuiltinTheme,
  inherit: true,
  rules: [
    { background: 'EDF9FA', token: '' },
    { token: 'string.value.json', foreground: colors.primary.dark },
    { token: 'string.js', foreground: colors.primary.dark },
  ],
  colors: {
    'editor.background': '#28292a',
    'minimap.background': '#111827b3',
  },
};

LIGHT_THEME_SETTINGS.colors['editor.background'] = '#e6e6e66b';

const beforeEditorMount = (monaco: IMonacoEditor) => {
  monaco.editor.defineTheme(DARK_THEME, DARK_THEME_SETTINGS);
  monaco.editor.defineTheme(LIGHT_THEME, LIGHT_THEME_SETTINGS);
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.Preserve,
    target: monaco.languages.typescript.ScriptTarget.ES2020,
    esModuleInterop: true,
  });
};

export const CodeEditor = ({
  className,
  codeString,
  codeLanguage,
  height = '300px',
}: {
  className?: string;
  codeString: string;
  codeLanguage: string;
  height?: string;
}) => {
  const { currentTheme } = useThemeSwitch();
  const isDarkMode = currentTheme === 'dark';

  return (
    <div className={cn(className)}>
      <Editor
        className={
          'bg-gray-500/20 rounded-lg overflow-hidden h-full flex-grow mt-4'
        }
        height={height}
        language={codeLanguage}
        value={codeString}
        beforeMount={beforeEditorMount}
        options={
          {
            ...MONACO_OPTIONS,
            automaticLayout: true,
            readOnly: true,
          } as monaco.editor.IStandaloneEditorConstructionOptions
        }
        theme={isDarkMode ? DARK_THEME : LIGHT_THEME}
      />
    </div>
  );
};
