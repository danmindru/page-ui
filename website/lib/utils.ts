import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToRgba({
  color,
  opacity,
}: {
  color: string;
  opacity: number;
}): string {
  if (!color) {
    return `rgba(177, 177, 177, ${opacity})`;
  }

  color = color.trim();

  // If already rgba, extract rgb part and apply new opacity
  if (color.startsWith('rgba(')) {
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map((v) => v.trim());
      if (values.length >= 3) {
        return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`;
      }
    }
  }

  // If rgb, just add opacity
  if (color.startsWith('rgb(')) {
    const match = color.match(/rgb\(([^)]+)\)/);
    if (match) {
      return `rgba(${match[1]}, ${opacity})`;
    }
  }

  // If hex color
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    let r: number, g: number, b: number;

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else {
      return `rgba(177, 177, 177, ${opacity})`;
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // If plain rgb values like "255, 255, 255"
  if (/^\d+,\s*\d+,\s*\d+$/.test(color)) {
    return `rgba(${color}, ${opacity})`;
  }

  // Fallback
  return `rgba(177, 177, 177, ${opacity})`;
}
