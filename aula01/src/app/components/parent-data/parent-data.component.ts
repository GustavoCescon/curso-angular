import { Component, Input } from "@angular/core";

@Component({
	selector: "app-parent-data",
	standalone: true,
	imports: [],
	templateUrl: "./parent-data.component.html",
	styleUrl: "./parent-data.component.css",
})
export class ParentDataComponent {
	@Input() name = "";
	@Input() userData = { email: "", role: "" };
}
