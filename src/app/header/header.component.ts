import { IComponentOptions } from 'angular';
import { GamesServiceName, GamesService } from 'app/core/games/games.service';
import {
  FilteredGamesLength,
  filteredGamesLengthName,
} from 'app/games-list/filtered-games-length.value';

import template from './header.component.html';
import './header.component.scss';

export const HeaderComponentName = 'appHeader';

export const HeaderComponent: IComponentOptions = {
  template,
  controllerAs: 'vm',
  controller: class HeaderController {
    static $inject = [GamesServiceName, filteredGamesLengthName];

    constructor(
      private gamesService: GamesService,
      public filteredGamesLength: FilteredGamesLength
    ) {}

    private unsubscribe?: () => void;
    public numberOfFilteredGames = 0;
    public numberOfGames = 0;

    $onInit() {
      if (this.gamesService.data) {
        this.numberOfGames = this.gamesService.data.games.length;
      }

      this.unsubscribe = this.gamesService.subscribe(
        data => (this.numberOfGames = data.games.length)
      );
    }

    $onDestroy() {
      if (this.unsubscribe) this.unsubscribe();
    }
  },
};
