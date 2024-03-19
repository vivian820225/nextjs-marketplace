import path from 'path'
import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { Users } from './collections/Users'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Users],
  routes: {
    admin: '/dashboard',
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- DigitalHola',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
