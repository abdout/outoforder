import cloudinary from '@/lib/cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    });
    res.status(200).json({ url: uploadResponse.secure_url });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

export function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}

export function DELETE(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}

// Add similar functions for HEAD, OPTIONS, PUT, PATCH if needed