// components/modal/modal.component.ts
import { Component } from "@angular/core";
import { ModalService } from "../Hire Sevice/hire.service";

@Component({
  selector: "app-modal",
  template: `
    <div class="modal-overlay" *ngIf="modalState.visible" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="close()">×</button>
        <h2>Hire Me for {{ modalState.serviceName }}</h2>
        <!-- Add your form here -->
      </div>
    </div>
  `,
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  modalState = { visible: false, serviceName: "" };

  constructor(private modalService: ModalService) {
    this.modalService.modalState$.subscribe((state) => {
      this.modalState = {
        visible: state.visible,
        serviceName: state.serviceName ?? "",
      };
    });
  }

  close() {
    this.modalService.closeModal();
  }
}
