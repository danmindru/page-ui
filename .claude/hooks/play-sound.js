#!/usr/bin/env node

const { exec } = require('child_process');
const os = require('os');

// Get command line argument for sound type
const soundType = process.argv[2] || 'default';

// Get platform-specific sound command and file
function getSoundConfig(type = 'default') {
  const platform = os.platform();

  switch (platform) {
    case 'darwin': // macOS
      const macSounds = {
        default: '/System/Library/Sounds/Funk.aiff',
        notification: '/System/Library/Sounds/Blow.aiff',
        done: '/System/Library/Sounds/Frog.aiff',
      };
      return {
        command: 'afplay',
        soundFile: macSounds[type] || macSounds.default,
      };

    case 'linux':
      // Try multiple Linux sound players in order of preference
      const linuxSounds = {
        default: '/usr/share/sounds/freedesktop/stereo/complete.oga',
        notification: '/usr/share/sounds/freedesktop/stereo/message.oga',
        done: '/usr/share/sounds/freedesktop/stereo/bell.oga',
      };
      return {
        command: 'paplay || aplay || play',
        soundFile: linuxSounds[type] || linuxSounds.default,
      };

    case 'win32': // Windows
      const winSounds = {
        default: 'C:\\Windows\\Media\\tada.wav',
        notification: 'C:\\Windows\\Media\\Windows Notify.wav',
        done: 'C:\\Windows\\Media\\Windows Ding.wav',
      };
      const soundPath = winSounds[type] || winSounds.default;
      return {
        command: `powershell -c (New-Object Media.SoundPlayer "${soundPath}").PlaySync()`,
        soundFile: null, // Included in command
      };

    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

// Play the sound with error handling
function playSound() {
  try {
    const { command, soundFile } = getSoundConfig(soundType);
    const fullCommand = soundFile ? `${command} "${soundFile}"` : command;

    exec(fullCommand, (error, stdout, stderr) => {
      if (error) {
        // Silent fail - don't interrupt workflow
        if (process.env.DEBUG) {
          console.error(`Sound playback failed: ${error.message}`);
        }
        return;
      }
      if (stderr && process.env.DEBUG) {
        console.error(`Sound playback warning: ${stderr}`);
      }
    });
  } catch (error) {
    // Silent fail for unsupported platforms
    if (process.env.DEBUG) {
      console.error(`Sound setup error: ${error.message}`);
    }
  }
}

try {
  playSound();
} catch (error) {
  // Silent fail - don't interrupt workflow
  if (process.env.DEBUG) {
    console.error(`Unexpected error: ${error.message}`);
  }
}
