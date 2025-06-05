import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollOffset: [0, 80], // Optional: to offset fixed navbar height
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
