import { Routes } from '@angular/router'

import { ErrorComponent } from './error/error.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ForbiddenComponent } from './forbidden/forbidden.component'

export const errorPagesRoutes: Routes = [
  {
    /**
     * Path to custom error page
     * @require {string} errorMessage - URL param with custom error message
     */
    path: 'error',
    component: ErrorComponent,
  },
  {
    /**
     * Path to forbidden page
     * When the user has no permission to acces the requested page
     */
    path: '403',
    component: ForbiddenComponent,
  },
  {
    /**
     * Path to not found page
     * When the user requested a non existent page
     */
    path: '404',
    component: NotFoundComponent,
  },
  {
    /**
     * Path to not found page
     * When the user requested a non existent page
     */
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
]
