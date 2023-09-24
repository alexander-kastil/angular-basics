import { Component } from "@angular/core";
import { MarkdownRendererComponent } from "../../../shared/markdown-renderer/markdown-renderer.component";

@Component({
    selector: "app-flex-media-query",
    templateUrl: "./flex-media-query.component.html",
    styleUrls: ["./flex-media-query.component.scss"],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class FlexMediaQueryComponent { }
