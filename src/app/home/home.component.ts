import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  profileImage = "assets/images/CV.jpg";

  openLink(url: string): void {
    window.open(url, "_blank");
  }

  downloadCV(): void {
    window.open("assets/Nour_Eldin_Software_Developer.pdf", "_blank");
  }

  scrollToPortfolio(): void {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
