import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CenteredDirective } from 'src/app/shared/formatting/formatting-directives';
import { FormattingModule } from 'src/app/shared/formatting/formatting.module';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: "app-google-fonts",
  templateUrl: "./google-fonts.component.html",
  styleUrls: ["./google-fonts.component.scss"],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormattingModule, MarkdownRendererComponent]
})
export class GoogleFontsComponent {
  title: string = "Food App";
}
