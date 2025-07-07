import { Component } from "@angular/core";
import { ProgressComponent } from "../progress/progress.component";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [ProgressComponent, NgFor],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent {
  webSkills = [
    { name: "HTML5", icon: "assets/images/HTML.png", progress: 95 },
    { name: "CSS3", icon: "assets/images/CSS.png", progress: 90 },
    { name: "JavaScript", icon: "assets/images/JS.png", progress: 85 },
    { name: "TypeScript", icon: "assets/images/TypeScript.png", progress: 80 },
    { name: "Bootstrap", icon: "assets/images/Bootstrap.png", progress: 80 },
    { name: "SQL", icon: "assets/images/SQL.jpg", progress: 40 },
    { name: "MongoDB", icon: "assets/images/mongoDB.png", progress: 45 },
  ];

  frameworkSkills = [
    { name: "React.js", icon: "assets/images/React.png", progress: 85 },
    { name: "Angular", icon: "assets/images/Angular.png", progress: 75 },
    { name: "Node.js", icon: "assets/images/NodeJs.png", progress: 80 },
    { name: "Flutter", icon: "assets/images/Flutter.png", progress: 70 },
    { name: "Firebase", icon: "assets/images/Firebase.png", progress: 65 },
    { name: "Dart", icon: "assets/images/Dart.png", progress: 60 },
  ];
}
