import { exit } from '@tauri-apps/api/process';
export const closeApplication = async () => {
  console.log('Closing application')
  await exit(1);
};


