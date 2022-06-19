import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = _req;
    const { q } = query;
    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=5`
    );
    const data = await result.json();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
