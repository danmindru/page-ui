'use client';

import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/ui/button';

import { CodeEditor } from '@/components/shared/CodeEditor';
import { CopyButton } from '@/components/shared/ui/copy-button';
import { Skeleton } from '@/components/shared/ui/skeleton';
import { Alert } from '@/components/shared/ui/alert';
import { useCopyBrickCode } from '@/components/bricks/useCopyBrickCode';

const codeLinkBase =
  'https://raw.githubusercontent.com/Shipixen/landing-page-bricks/main/templates/landing-page-templates/template';

export const BrickCodeEditor = ({
  brick,
  demo,
  className = '',
}: {
  brick: string;
  demo: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const { formattedCodeString, errorString, getCode } = useCopyBrickCode({
    brick,
    demo,
  });

  const loadCode = useCallback(
    async (signal?: AbortSignal) => {
      if (copied) {
        return false;
      }

      setFailed(false);
      setLoading(true);

      try {
        const code = await getCode(signal);

        if (!code) {
          setFailed(true);
        } else {
          setCopied(true);
          navigator.clipboard.writeText(code);
        }
      } catch (error) {
        console.error(error);
        setFailed(true);
      } finally {
        setLoading(false);
      }

      setTimeout(() => {
        setCopied(false);
        setFailed(false);
      }, 2000);
    },
    [getCode, copied],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const loadCodeAsync = async () => {
      await loadCode(signal);
    };

    loadCodeAsync();

    return () => {
      // Cancel the request when the component unmounts
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div className="grid gap-4 pb-4">
        {errorString ? (
          <Alert
            variant="default"
            className="w-full flex flex-col gap-2 bg-red-500/5"
          >
            {errorString}
            <span>
              Alternatively, you can view the code on{' '}
              <a
                href={`${codeLinkBase}/${demo}/bricks/${brick}.tsx`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-1"
              >
                GitHub
              </a>
              .
            </span>

            <div>
              <Button
                variant="secondary"
                className="text-black"
                onClick={() => getCode()}
              >
                Retry
              </Button>
            </div>
          </Alert>
        ) : null}

        {!errorString ? (
          <>
            {loading ? (
              <>
                <Skeleton className="h-[380px] w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </>
            ) : (
              <>
                <CodeEditor
                  codeLanguage="typescript"
                  codeString={formattedCodeString}
                  height="380px"
                  className={cn(className)}
                />

                <CopyButton
                  value={formattedCodeString}
                  className="mt-2 w-full"
                />
              </>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BrickCodeEditor;
