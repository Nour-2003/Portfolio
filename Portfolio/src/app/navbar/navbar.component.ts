import { NgClass } from "@angular/common";
import { Component, HostListener, Input } from "@angular/core";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
 isMenuCollapsed = true;
  activeSection = 'home'; // Update this based on scroll position

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu(): void {
    this.isMenuCollapsed = true;
  }

  // Optional: Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-container')) {
      this.closeMenu();
    }
  }

  // Optional: Close menu on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }
}
