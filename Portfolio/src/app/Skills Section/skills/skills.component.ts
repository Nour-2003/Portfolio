import { Component } from "@angular/core";
import { ProgressComponent } from "../progress/progress.component";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [ProgressComponent],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent {}
