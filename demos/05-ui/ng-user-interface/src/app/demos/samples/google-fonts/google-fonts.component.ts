import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';


@Component({
  selector: "app-google-fonts",
  templateUrl: "./google-fonts.component.html",
  styleUrls: ["./google-fonts.component.scss"],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MarkdownRendererComponent]
})
export class GoogleFontsComponent {
  title: string = "Food App";
}
