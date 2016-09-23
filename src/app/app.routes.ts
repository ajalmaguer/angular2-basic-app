import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"

import { PlanningComponent, PLANNING_ROUTES } from './planning'
import { RunningComponent, RUNNING_ROUTES } from './running'

const APP_ROUTES: Routes = [
	{path: "", component: HomeComponent},
	{path: "about", component: AboutComponent},
	{path: "planning", component: PlanningComponent, children: PLANNING_ROUTES},
	{path: "running", component: RunningComponent, children: RUNNING_ROUTES},
	{path: "**", redirectTo: ""}

]

export const routes = RouterModule.forRoot(APP_ROUTES)
// export const routes = RouterModule.forRoot(APP_ROUTES, {useHash: true})