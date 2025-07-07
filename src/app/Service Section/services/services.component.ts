import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent {
  showModal = false;
  selectedService = "";
  formData = {
    name: "",
    email: "",
    message: "",
  };

  services = [
    {
      title: "Web Development",
      icon: "fa-code",
      description:
        "Custom website development using modern technologies like React, Angular, and Node.js.",
    },
    {
      title: "Mobile Development",
      icon: "fa-mobile-alt",
      description:
        "Cross-platform mobile app development using Flutter and React Native.",
    },
  ];

  openModal(service: string) {
    this.selectedService = service;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  submitForm() {
    const serviceID = "service_lddvezi";
    const templateID = "template_rq0vmmf";
    const userID = "mEYFL4_I6yh2AAPOS";

    const templateParams = {
      service: this.selectedService,
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (res) => {
        console.log("✅ Email sent successfully", res.status, res.text);
        this.showSuccessAlert();
        this.closeModal();
      },
      (err) => {
        console.error("❌ Failed to send email:", err);
        this.showErrorAlert();
      }
    );
  }

  private showSuccessAlert() {
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#00eeff",
      background: "#1f242d",
      color: "#ffffff",
      iconColor: "#00eeff",
    });
  }

  private showErrorAlert() {
    Swal.fire({
      title: "Error!",
      text: "Failed to send message. Please try again.",
      icon: "error",
      confirmButtonText: "Try Again",
      confirmButtonColor: "#ff3d3d",
      background: "#1f242d",
      color: "#ffffff",
      iconColor: "#ff3d3d",
    });
  }
  private resetForm() {
    this.formData = {
      name: "",
      email: "",
      message: "",
    };
  }
}
