import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appScrollFade]",
  standalone: true,
})
export class ScrollFadeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, "fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // When 20% of element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger 50px before element
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
