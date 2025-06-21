import { NgFor } from "@angular/common";
import { Component, HostListener, NgModule } from "@angular/core";
import { EducationComponent } from "../education/education.component";
import { CourseComponent } from "../course/course.component";
import { ExperienceComponent } from "../experience/experience.component";
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [NgFor, EducationComponent, CourseComponent, ExperienceComponent, DetailsComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  navItems = [
    "Education Qualification",
    "Short Course",
    "Experience",
    "Details",
  ];
  selectedIndex = 0;

  selectItem(index: number) {
    this.selectedIndex = index;
  }
}
