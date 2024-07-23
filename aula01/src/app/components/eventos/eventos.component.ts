import { Component } from "@angular/core";

@Component({
	selector: "app-eventos",
	standalone: true,
	imports: [],
	templateUrl: "./eventos.component.html",
	styleUrl: "./eventos.component.css",
})
export class EventosComponent {
	show = true;
	buttonText = "Ocultar";
	showMessage(): void {
		this.show = !this.show;
		if (this.show) {
			this.buttonText = "Ocultar";
		} else {
			this.buttonText = "Mostrar";
		}
	}
}
