import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import type Animal from "../../interface/Animal";
// biome-ignore lint/style/useImportType: <explanation>
import { ListService } from "./../../service/list.service";
@Component({
	selector: "app-list-render",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./list-render.component.html",
	styleUrl: "./list-render.component.css",
})
export class ListRenderComponent {
	constructor(private listService: ListService) {}

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

	removeAnimal(animal: Animal) {
		this.animals = this.listService.remove(this.animals, animal);
	}
}
