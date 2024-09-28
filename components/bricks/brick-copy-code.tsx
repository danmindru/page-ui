'use client';

import { CheckIcon, CopyIcon, Loader2Icon, XIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useCopyBrickCode } from '@/components/bricks/useCopyBrickCode';
import { BrickCodeEditorToggle } from '@/components/bricks/brick-code-toggle';

export const BrickCopyCode = ({
  brick,
  demo,
}: {
  brick: string;
  demo: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { formattedCodeString, errorString, getCode } = useCopyBrickCode({
    brick,
    demo,
  });

  const copyCode = async () => {
    if (copied) {
      return false;
    }

    setFailed(false);
    setLoading(true);

    try {
      const code = await getCode();

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
  };

  const animation = {
    initial: { opacity: 0, translateY: 10 },
    animate: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    exit: { opacity: 0, translateY: -10 },
  };

  return (
    <div
      className={cn(
        'absolute z-20 w-full flex p-1 gap-2 justify-center opacity-0 translate-y-10 transition-all delay-500 group-hover:opacity-100 group-hover:-translate-y-6 group-hover:delay-0',
        loading || copied || failed ? 'opacity-100 -translate-y-6' : '',
      )}
    >
      <Button size="icon" variant="outline" onClick={copyCode}>
        {!failed && !loading ? (
          <>
            {' '}
            {copied ? (
              <motion.div {...animation} key="check">
                <CheckIcon className="w-4 h-4 text-green-600" />
              </motion.div>
            ) : (
              <motion.div {...animation} key="copy">
                <CopyIcon className="w-4 h-4" />
              </motion.div>
            )}
          </>
        ) : null}

        {failed ? (
          <XIcon className="w-4 h-4 text-red-600 animate-shake" />
        ) : null}

        {loading ? (
          <motion.div {...animation} key="loading">
            <Loader2Icon className="text-gray-500 h-4 w-4 animate-spin" />
          </motion.div>
        ) : null}
      </Button>

      <BrickCodeEditorToggle brick={brick} demo={demo} />
    </div>
  );
};

export default BrickCopyCode;
