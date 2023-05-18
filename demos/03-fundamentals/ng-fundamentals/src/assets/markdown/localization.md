- Localization allows localization of dates, numbers, currencies, etc. Add the following to app.module.ts providers section:
  
  ```
  {provide: LOCALE_ID, useValue: "de"}
  ```
