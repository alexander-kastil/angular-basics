- A Template Component used templateurl to point to the file containing the
html of the component (the view)<br />

- Basically we could say the *.ts corresponds to the Controller and provides the view
model and the *.html corresponds to the view, which is called template.

```typescript
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
```
