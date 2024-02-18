import { Injectable, computed, signal } from '@angular/core';
import { SidePanelActions } from './side-panel.actions';

@Injectable({ providedIn: 'root' })
export class SidePanelService {
  #commands = signal<SidePanelActions>(SidePanelActions.HIDE_MARKDOWN);

  getCommands() {
    return computed(() => this.#commands());
  }

  triggerCmd(action: SidePanelActions) {
    this.#commands.set(action);
  }
}
