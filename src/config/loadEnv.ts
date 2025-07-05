import * as dotenv from 'dotenv';
import * as path from 'path';

const getEnvPath = () => {
  const envDir = path.resolve(process.cwd(), '');
  return path.join(envDir, '.env.test');
};

const envPath = getEnvPath();
dotenv.config({ path: envPath });
