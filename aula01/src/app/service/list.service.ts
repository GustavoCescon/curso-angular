import { Injectable } from "@angular/core";
import type Animal from "../interface/Animal";

@Injectable({
	providedIn: "root",
})
export class ListService {
  constructor(){}
	remove(animals: Animal[], animal: Animal) {
		return animals.filter((element) => animal.name !== element.name);
	}
}
