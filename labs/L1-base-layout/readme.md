# Create a Base Angular App with Layout  
   
In this lab, you will create a foundational Angular application complete with a structured layout and a functional navbar service. The application will showcase a layout featuring key components such as the home view, a side menu, and a navigation bar. Additionally, the menu items in the navbar will be dynamically loaded from a JSON file located in the application's assets, demonstrating effective data management within Angular.  
   
## Steps Outlined  
- Check the environment setup  
- Scaffold the project and add base configuration  
- Create the base layout  
- Add the menu service and load the menu items in the navbar  
- Add support for GitHub Copilot (optional)  
   
## Check the Environment Setup  
Before you start, ensure that you have the necessary development tools installed. This includes [Visual Studio Code](https://code.visualstudio.com/download), a compatible version of Node.js (preferably [Node 18.17.1](https://nodejs.org/download/release/v18.17.1/)), and the latest version of the [Angular CLI](https://angular.io/cli). You can verify your installation by executing the following commands in your terminal:  
   
```bash  
node --version  
ng version  
```  
   
If you need to update the Angular CLI to the current version, use the following command:  
   
```bash  
npm i -g @angular/cli  
```  
   
> **Note**: If you encounter issues executing scripts in PowerShell, you may need to run `Set-ExecutionPolicy bypass` in an elevated PowerShell terminal. Additionally, consider installing the [Angular Language Service - Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) for enhanced development support.  
   
## Scaffold the Project and Add Base Configuration  
To create your Angular project with the necessary configurations, execute the following command using the Angular CLI:  
   
```bash  
ng new food-app --routing --style scss --ssr false  
cd food-app  
```  
   
> **Note**: By enabling routing, you will set up the project for future navigation functionalities. Selecting SCSS as your styling method allows for better styling management, which can be altered later in `angular.json`.  
   
Next, review `main.ts`, which serves as the entry point for bootstrapping your application. Additionally, check `app.config.ts`, which contains the application configuration. Ensure that you add `provideHttpClient()` to the providers array to enable HTTP functionalities for loading menu items later on:  
   
```typescript  
export const appConfig: ApplicationConfig = {  
  providers: [  
    provideZoneChangeDetection({ eventCoalescing: true }),  
    provideRouter(routes),  
    provideHttpClient()  
  ]  
};  
```  
   
Now, inspect `app.routing.ts`, which manages the application's routing logic. Add your desired routes to the routes array. Also, verify the default style configuration in `angular.json`:  
   
```json  
"@schematics/angular:component": {  
  "style": "scss"  
}  
```  
   
Create the environment configuration by executing the following command:  
   
```bash  
ng g environments  
```  
   
Next, clear the default content in `app.component.html` and start the Angular development server. Keeping the server running will allow you to see changes in real-time and catch errors promptly:  
   
```bash  
ng s -o  
```  
   
> **Note**: You can split your terminal to execute other CLI commands simultaneously.  
   
To prevent build caching issues during development, disable caching with the following command:  
   
```bash  
ng cache disable  
```  
   
### Create the Base Layout  
Refer to the [Angular CLI reference](https://angular.io/cli/generate#component-command) for detailed information on how to generate components. Execute the following commands in the terminal to create the necessary components:  
   
```bash  
ng g c home  
ng g c shared/sidemenu  
ng g c shared/navbar  
```  
   
To ensure a clean and maintainable styles file, create `src/theme/reset.scss