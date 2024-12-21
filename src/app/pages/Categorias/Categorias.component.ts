import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "categorias",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Categorias.component.html",
  styleUrls: ["./Categorias.component.css"],
})
export class Categorias {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onRectangleImageClick() {
    this.router.navigate(["/ofertas-bebidas"]);
  }

  onLiatadosTextClick() {
    this.router.navigate(["/lista-dos-produtos"]);
  }
}
