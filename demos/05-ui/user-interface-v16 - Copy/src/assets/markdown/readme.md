Two types of Demos available:
<br/><br/>
- Component-isolated demos located in `/app/demos/samples/<DEMOFOLDER>`
- Demos build-in to the `demo-app` itself
<br/><br/>
## App Structure & Routing
The `demo-app` consists of `app.component.html` that defines the base structure and `primary router-outlet`. Subsequent routes are loaded into the outlet.
<br/><br/>
![app.component](assets/images/app.component.html.png)
<br/><br/>
`/app/demos/demo-container/demo-container.html` defines a `left-menu` and a `nested router-outlet` where the individual isolated demos will be displayed.
<br/><br/>
![demo-container.component](assets/images/demo-container.png)