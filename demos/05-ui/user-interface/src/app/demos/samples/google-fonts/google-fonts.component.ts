import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CenteredDirective } from 'src/app/shared/formatting/formatting-directives';

@Component({
  selector: "app-google-fonts",
  templateUrl: "./google-fonts.component.html",
  styleUrls: ["./google-fonts.component.scss"],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CenteredDirective]
})
export class GoogleFontsComponent {
  title: string = "Hinz & Kunz Wartungsplaner";
}
