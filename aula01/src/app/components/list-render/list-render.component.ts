import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
@Component({
	selector: "app-list-render",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./list-render.component.html",
	styleUrl: "./list-render.component.css",
})
export class ListRenderComponent {
	animals = [
		{ name: "Pluto", type: "Dog" },
		{ name: "Cenoura", type: "Cat" },
		{ name: "CobraKay", type: "Snake" },
		{ name: "Nemo", type: "Fish" },
	];
}
