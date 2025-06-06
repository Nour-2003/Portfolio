import { Component, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Portfolio";
  activeSection: string = "home";

  @HostListener("window:scroll", [])
  onScroll(): void {
    const sections = [
      "home",
      "about",
      "skills",
      "services",
      "portfolio",
      "contact",
    ];

    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
