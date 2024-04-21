import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EsercizioModeratoRoutingModule } from "./esercizio-moderato-routing.module";
import { CardPostModule } from "src/app/shareds/components/card-post/card-post.module";
import { EsercizioModeratoComponent } from "./esercizio-moderato.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "../user/user.component";

@NgModule({
  imports: [
    CommonModule,
    EsercizioModeratoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardPostModule
  ],
  declarations: [
    EsercizioModeratoComponent,
    UserComponent
  ],
})
export class EsercizioModeratoModule { }
