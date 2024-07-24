import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { PipesComponent } from "./components/pipes/pipes.component";
@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		FirstComponentComponent,
		ParentDataComponent,
		DirectivesComponent,
		IfRenderComponent,
		EventosComponent,
		EmitterComponent,
		ListRenderComponent,
		PipesComponent,
		CommonModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	userName = "Fulano";
	userData = {
		email: "fulano@test.com",
		role: "admin",
	};
	title = "curso-angular";
}
