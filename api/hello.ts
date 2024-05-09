// api/hello.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function(request: VercelRequest, response: VercelResponse): void {
  response.status(200).send('hello');
};
