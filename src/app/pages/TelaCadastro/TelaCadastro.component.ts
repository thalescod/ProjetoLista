import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "tela-cadastro",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./TelaCadastro.component.html",
  styleUrls: ["./TelaCadastro.component.css"],
})
export class TelaCadastro {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
