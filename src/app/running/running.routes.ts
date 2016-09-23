import { Routes } from "@angular/router"

import { MechanismsComponent } from "./mechanisms/mechanisms.component"
import { PracticeFeedComponent } from "./practice-feed/practice-feed.component"
import { PracticeLlamaComponent } from "./practice-llama/practice-llama.component"
import { ProgrammingComponent } from "./programming/programming.component"

export const RUNNING_ROUTES: Routes = [
	{path: "", redirectTo: "mechanisms", pathMatch: "full" },
	{path: "mechanisms", component: MechanismsComponent },
	{path: "pracitce-feedable-pet", component: PracticeFeedComponent },
	{path: "practice-llama", component: PracticeLlamaComponent },
	{path: "programming-slides", component: ProgrammingComponent },
]