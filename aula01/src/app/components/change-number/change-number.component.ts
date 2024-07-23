import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-change-number",
	standalone: true,
	imports: [],
	templateUrl: "./change-number.component.html",
	styleUrl: "./change-number.component.css",
})
export class ChangeNumberComponent {
	@Output() changeNumber: EventEmitter<number> = new EventEmitter<number>();

	handleClick() {
		this.changeNumber.emit()
	}
}
