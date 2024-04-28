import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { NavItem } from "./nav-item.model";

@Injectable({
  providedIn: "root",
})
export class NavbarService {
  http = inject(HttpClient);

  getItems() {
    return this.http.get<NavItem[]>("assets/menu-items.json");
  }
}
