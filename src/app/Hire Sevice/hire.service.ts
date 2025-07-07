// services/modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modalState = new BehaviorSubject<{
    visible: boolean;
    serviceName?: string;
  }>({ visible: false });

  modalState$ = this.modalState.asObservable();

  openModal(serviceName: string) {
    this.modalState.next({ visible: true, serviceName });
  }

  closeModal() {
    this.modalState.next({ visible: false });
  }
}