import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"

const APP_ROUTES = [
	{path: "", component: HomeComponent},
	{path: "about", component: AboutComponent}
]

export const routes = RouterModule.forRoot(APP_ROUTES)
// export const routes = RouterModule.forRoot(APP_ROUTES, {useHash: true})