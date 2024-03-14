import { publicProcedure, router } from './trpc'

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return 'welcome'
  }),
})

export type AppRouter = typeof appRouter
