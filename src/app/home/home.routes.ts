import { Routes } from '@angular/router'

import { HomeComponent } from './home.component'

export const homeRoutes: Routes = [
  {
    /**
     * Path to home page
     * Default page when website is loaded
     */
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
]
