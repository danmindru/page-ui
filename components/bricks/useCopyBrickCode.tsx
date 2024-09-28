import axios from 'axios';
import { logger } from 'logger';
import { useCallback, useEffect, useState } from 'react';

export const useCopyBrickCode = ({ demo, brick }) => {
  const [formattedCodeString, setFormattedCodeString] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorString, setErrorString] = useState('');

  const getCode = useCallback(
    async (signal?: AbortSignal) => {
      try {
        setLoading(true);
        setErrorString('');

        const response = await axios.get(
          `/api/get-brick?demo=${encodeURIComponent(demo)}&brick=${brick}`,
          ...(signal ? [{ signal }] : []),
        );

        if (response.status === 200) {
          setFormattedCodeString(response.data.code);
        } else {
          logger.error(response.data.message, { demo, brick });
          setErrorString('Oops! Something went wrong. Please try again.');
        }

        return response.data.code;
      } catch (error) {
        if (!axios.isCancel(error)) {
          logger.error(error, { demo, brick });
          setErrorString(
            'There was an error fetching the code. Please try again.',
          );
        }

        return '';
      }

      setLoading(false);
    },
    [demo, setFormattedCodeString, setLoading, setErrorString, brick],
  );

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   const getCodeAsync = async () => {
  //     await getCode(signal);
  //   };

  //   getCodeAsync();

  //   return () => {
  //     // Cancel the request when the component unmounts
  //     controller.abort();
  //   };
  // }, [demo, getCode]);

  return { formattedCodeString, loading, errorString, getCode };
};
