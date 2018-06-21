import { Routes, RouterModule } from '@angular/router'

import { homeRoutes } from './home/home.routes'
import { errorPagesRoutes } from './error-pages/error-pages.routes'

/**
 * Single variable to import all website routes
 * It`s imported in 'app.module.ts'
 */
const appRoutes: Routes = [
  ...homeRoutes,
  ...errorPagesRoutes, // MUST GO LAST!!!
]

export const appRoutingProviders: any[] = []
export const routing = RouterModule.forRoot(appRoutes)
