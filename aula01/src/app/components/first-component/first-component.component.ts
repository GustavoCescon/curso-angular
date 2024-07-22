import { Component } from "@angular/core";

@Component({
	selector: "app-first-component",
	standalone: true,
	imports: [],
	templateUrl: "./first-component.component.html",
	styleUrl: "./first-component.component.css",
})
export class FirstComponentComponent {
	name = "Gustavo";
	age = 27;
	work = "Developer";
	hobbies = ["Correr", "Jogar", "Estudar"];
	car = {
		brand: "Fiat",
		model: "Uno",
		year: 1998,
	};
}
