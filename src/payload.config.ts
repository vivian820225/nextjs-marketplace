import path from 'path'
import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [],
  routes: {
    admin: '/admin',
  },
  admin: {
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
