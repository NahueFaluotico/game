import { Route } from '@angular/router';
import { BoardComponent } from './board/board.component';

export const gameRoutes: Route[] = [
    {
        path     : '',
        children: [
          {
            path: '',
            redirectTo: 'board',
            pathMatch: 'full'
          },
          {
            path: 'board',
            component: BoardComponent
          }
        ]
    }
];
