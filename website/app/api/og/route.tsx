import { ImageResponse } from '@vercel/og';
import { colors } from '@/data/config/colors';
import { metadata } from '@/data/config/metadata';
import { readFile } from 'fs/promises';
import sizeOf from 'image-size';
import path from 'path';
import mime from 'mime-types';

const MAX_LOGO_HEIGHT = 150;
const MAX_LOGO_WIDTH = 350;

const getLogoSize = (dimensions: { width: number; height: number }) => {
  // Calculate image size, with the height being maximum MAX_LOGO_HEIGHT or width being maximum MAX_LOGO_WIDTH
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height;

  let logoWidth = imageWidth;
  let logoHeight = imageHeight;

  if (imageWidth > MAX_LOGO_WIDTH) {
    logoWidth = MAX_LOGO_WIDTH;
    logoHeight = (imageHeight * MAX_LOGO_WIDTH) / imageWidth;
  }

  if (logoHeight > MAX_LOGO_HEIGHT) {
    logoHeight = MAX_LOGO_HEIGHT;
    logoWidth = (imageWidth * MAX_LOGO_HEIGHT) / imageHeight;
  }

  return {
    logoWidth,
    logoHeight,
  };
};

export async function GET() {
  const imagePath = path.join(process.cwd(), '/public/static/images/logo.png');
  const file = await readFile(imagePath);
  const mimeType = mime.lookup(imagePath);
  const dimensions = sizeOf(imagePath) as { width: number; height: number };

  const { logoWidth, logoHeight } = getLogoSize(dimensions);

  const logoImage = `data:${mimeType};base64,${file.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          backgroundColor: '#F5F5F5',
        }}
      >
        <div
          style={{
            backgroundColor: colors.primary.darker,
            opacity: 0.3,
            background: `linear-gradient(110deg, ${colors.primary.lighter} 30%,  ${colors.primary.light} 70%)`,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
        <div
          style={{
            padding: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoImage}
            alt="Logo"
            style={{
              width: logoWidth,
              height: logoHeight,
            }}
          />

          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: 'black',
              marginBottom: 0,
            }}
          >
            {metadata.title}
          </h1>
          <p
            style={{
              marginTop: 12,
              fontSize: 26,
              color: 'black',
              fontWeight: 700,
            }}
          >
            {metadata.description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
