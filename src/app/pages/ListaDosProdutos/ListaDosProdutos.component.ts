import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "lista-dos-produtos",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ListaDosProdutos.component.html",
  styleUrls: ["./ListaDosProdutos.component.css"],
})
export class ListaDosProdutos {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
