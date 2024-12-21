import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "tela-login",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./TelaLogin.component.html",
  styleUrls: ["./TelaLogin.component.css"],
})
export class TelaLogin {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onBotoContainerClick() {
    this.router.navigate(["/categorias"]);
  }

  onBotoContainerClick1() {
    this.router.navigate(["/tela-cadastro"]);
  }
}
