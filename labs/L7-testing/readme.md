# Testing

This lab aims to enhance the robustness of our Angular application by implementing comprehensive unit tests. We will focus on testing several key components to ensure their correct functionality and behavior. This will involve completing pending tests across multiple component test files, thereby validating the core logic and user interface interactions within the application.

## Steps Outlined

- Setup of testing environment - optional
- Implement Unit Tests

### Setup of testing environment - optional

This step guides you through setting up the Wallaby.js testing environment, an optional but highly recommended tool for real-time test feedback within your IDE.

**Details:**

1.  **Install Wallaby.js:**  Install the Wallaby.js extension for Visual Studio Code using the command provided. This extension provides in-editor test results for immediate feedback. Alternatively, if you are using a JetBrains product you can install the corresponding plugin.
    ```bash
    code --install-extension wallabyjs.wallaby-vscode
    ```

2.  **Get Wallaby Trial Key:** Obtain a trial license key from the provided Wallaby.js link. This key is necessary to activate the Wallaby extension for the trial period.

3.  **Apply License Key:** In Visual Studio Code, press `F1`, search for `Wallaby.js: Manage License Key`, and enter the provided key to activate your Wallaby license.

4.  **Activate Wallaby:** Start Wallaby using `F1 -> Wallaby.js: Start`. This will initiate Wallaby in your project, allowing it to start monitoring your tests.

5.  **Observe Wallaby Indicator:** Look for the Wallaby indicator on the lower right of Visual Studio Code. This indicator shows whether Wallaby is active and will display the test results as you implement them.

### Implement Tests

This step involves completing the existing unit tests within the application's component files. By completing these tests, we ensure that the application’s critical components function as designed.

**Details:**

Complete the pending tests in the following component spec files:
    - `app.component.spec.ts`
    - `navbar.component.spec.ts`
    - `food-list.component.spec.ts`
    - `food-edit.component.spec.ts`
    - `food-container.component.spec.ts`

By filling out the test logic within these files, you will validate the core functionality of the respective components. This includes testing component properties, methods, and rendering behavior, ensuring that each works as expected under various conditions.
