import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute } from "@angular/router";
import type Animal from "../../interface/Animal";
// biome-ignore lint/style/useImportType: <explanation>
import { ListService } from "./../../service/list.service";
@Component({
	selector: "app-item-detail",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./item-detail.component.html",
	styleUrl: "./item-detail.component.css",
})
export class ItemDetailComponent {
	public animal?: Animal;

	constructor(
		private listService: ListService,
		private route: ActivatedRoute,
	) {
		this.getAnimal();
	}

	getAnimal() {
		const id = Number(this.route.snapshot.paramMap.get("id"));

		this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
	}
}
