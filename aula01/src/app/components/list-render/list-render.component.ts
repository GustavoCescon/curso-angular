import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import type Animal from "../../interface/Animal";
// biome-ignore lint/style/useImportType: <explanation>
import { ListService } from "./../../service/list.service";

@Component({
	selector: "app-list-render",
	standalone: true,
	imports: [CommonModule, RouterLink, RouterOutlet],
	templateUrl: "./list-render.component.html",
	styleUrl: "./list-render.component.css",
})
export class ListRenderComponent {
	public animals: Animal[];
	public animalDetails: string;
	
	constructor(private listService: ListService) {
		this.getAnimals();

		this.animals = [];
		this.animalDetails = "";
	}

	showAge(animal: Animal): void {
		this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
	}

	removeAnimal(animal: Animal) {
		this.animals = this.animals.filter(
			(element) => animal.name !== element.name,
		);
		this.listService.remove(animal.id).subscribe();
	}

	private setAnimal(animal: Animal[]) {
		this.animals = animal;
	}

	private getAnimals(): void {
		this.listService.getAll().subscribe((animal) => this.setAnimal(animal));
	}
}
