import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import type Animal from "../../interface/Animal";
@Component({
	selector: "app-list-render",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./list-render.component.html",
	styleUrl: "./list-render.component.css",
})
export class ListRenderComponent {
	animals: Animal[] = [
		{ name: "Pluto", type: "Dog", age: 1 },
		{ name: "Cenoura", type: "Cat", age: 10 },
		{ name: "CobraKay", type: "Snake", age: 3 },
		{ name: "Nemo", type: "Fish", age: 5 },
	];

	animalDetails = "";

	showAge(animal: Animal): void {
		this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
	}
}
