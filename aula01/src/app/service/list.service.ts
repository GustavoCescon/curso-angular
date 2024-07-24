// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { Observable } from "rxjs";
import type Animal from "../interface/Animal";
@Injectable({
	providedIn: "root",
})
export class ListService {
		private apiUrl = "http://localhost:3000/animals";

		constructor(private http: HttpClient) {}
		remove(animals: Animal[], animal: Animal) {
			return animals.filter((element) => animal.name !== element.name);
		}

		getAll(): Observable<Animal[]> {
			return this.http.get<Animal[]>(this.apiUrl);
		}

		getItem(id: number): Observable<Animal> {
			return this.http.get<Animal>(`${this.apiUrl}/${id}`);
		}
	}
