import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TelaLogin } from "./pages/TelaLogin/TelaLogin.component";
import { TelaCadastro } from "./pages/TelaCadastro/TelaCadastro.component";
import { ListaDosProdutos } from "./pages/ListaDosProdutos/ListaDosProdutos.component";
import { OfertasBebidas } from "./pages/OfertasBebidas/OfertasBebidas.component";
import { Categorias } from "./pages/Categorias/Categorias.component";
const routes: Routes = [
  {
    path: "",
    component: TelaLogin,
  },
  {
    path: "tela-cadastro",
    component: TelaCadastro,
  },
  {
    path: "lista-dos-produtos",
    component: ListaDosProdutos,
  },
  {
    path: "ofertas-bebidas",
    component: OfertasBebidas,
  },
  {
    path: "categorias",
    component: Categorias,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
