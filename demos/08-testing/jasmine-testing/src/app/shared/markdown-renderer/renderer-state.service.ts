import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererStateService {
  private editorVisible = signal<boolean>(false);

  getVisible() {
    return computed(() => this.editorVisible());
  }

  toggleVisible(visible: boolean) {
    this.editorVisible.set(visible);
  }

}
