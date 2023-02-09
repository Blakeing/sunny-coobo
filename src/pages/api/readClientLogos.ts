import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const dirRelativeToPublicFolder = 'clients'

  const dir = path.resolve('./public', dirRelativeToPublicFolder)

  const filenames = fs.readdirSync(dir)

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublicFolder, name)
  )

  res.statusCode = 200
  res.json(images)
}
