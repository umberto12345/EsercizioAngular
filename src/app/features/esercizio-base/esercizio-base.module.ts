import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EsercizioBaseComponent } from "./esercizio-base.component";
import { EsercizioBaseRoutingModule } from "./esercizio-base-routing.module";
import { CardPostModule } from "src/app/shareds/components/card-post/card-post.module";



@NgModule({
  imports: [
    CommonModule,
    EsercizioBaseRoutingModule,
    CardPostModule,
   
  ],
  declarations: [
    EsercizioBaseComponent,
  ],
})
export class EsercizioBaseModule { }
