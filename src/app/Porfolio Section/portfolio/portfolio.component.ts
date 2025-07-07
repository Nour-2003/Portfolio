import { NgClass, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.css",
})
export class PortfolioComponent {
  portfolioItems = [
    {
      image: "assets/images/Project1.png",
      title: "Mini Movie WebSite",
      link: "https://mini-movie-app-beta.vercel.app/",
    },
    {
      image: "assets/images/Project2.jpg",
      title: "ODC E-Commerce APP",
      link: "https://github.com/Nour-2003/ODC-Project",
    },
    {
      image: "assets/images/Project3.png",
      title: "ITI Game Store",
      link: "https://iti-graduation-project-iota.vercel.app/games",
    },
    {
      image: "assets/images/Project4.png",
      title: "FaceBall",
      link: "https://github.com/MazenSamehR/faceball_demo",
    },
    {
      image: "assets/images/Project5.png",
      title: "Recipyy",
      link: "https://github.com/Nour-2003/Recipyy-frontend",
    },
    {
      image: "assets/images/Project6.png",
      title: "ChatSphere",
      link: "https://github.com/Nour-2003/ChatSphere",
    },
  ];
  openLink(link: string) {
    window.open(link, "_blank");
  }
}
