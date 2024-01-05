export async function loadTonfuraEnv(): Promise<void> {
  const dotenv = await import('dotenv');
  dotenv.config({ path: 'tonfura.env' });
}
