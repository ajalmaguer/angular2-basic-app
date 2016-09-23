import { Routes } from "@angular/router"

import { MaterialsComponent } from "./materials/materials.component"
import { SampleAppComponent } from "./sample-app/sample-app.component"
import { SampleScheduleComponent } from "./sample-schedule/sample-schedule.component"

export const PLANNING_ROUTES: Routes = [
	{path: "", redirectTo: "materials", pathMatch: "full" },
	{path: "materials", component: MaterialsComponent},
	{path: "sample-app", component: SampleAppComponent},
	{path: "sample-schedule", component: SampleScheduleComponent},
]