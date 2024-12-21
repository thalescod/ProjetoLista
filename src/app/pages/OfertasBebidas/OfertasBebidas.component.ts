import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "ofertas-bebidas",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./OfertasBebidas.component.html",
  styleUrls: ["./OfertasBebidas.component.css"],
})
export class OfertasBebidas {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onLiatadosTextClick() {
    this.router.navigate(["/lista-dos-produtos"]);
  }
}
