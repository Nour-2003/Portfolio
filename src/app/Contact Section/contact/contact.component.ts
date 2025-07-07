import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  contactData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: "General Inquiry", // Default service
  };

  isSubmitting = false;

  // EmailJS configuration
  private serviceID = "service_lddvezi";
  private templateID = "template_rq0vmmf";
  private userID = "mEYFL4_I6yh2AAPOS";

  submitForm() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    const templateParams = {
      service: this.contactData.service,
      name: `${this.contactData.firstName} ${this.contactData.lastName}`.trim(),
      email: this.contactData.email,
      message: this.contactData.message,
    };

    emailjs
      .send(this.serviceID, this.templateID, templateParams, this.userID)
      .then(
        (res) => {
          console.log("✅ Email sent successfully", res.status, res.text);
          this.showSuccessAlert();
          this.resetForm();
        },
        (err) => {
          console.error("❌ Failed to send email:", err);
          this.showErrorAlert();
        }
      )
      .finally(() => {
        this.isSubmitting = false;
      });
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
    this.contactData = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      service: "General Inquiry",
    };
    // If you're using template-driven forms, you might need to reset the form
    // this.contactForm.resetForm();
  }
}
