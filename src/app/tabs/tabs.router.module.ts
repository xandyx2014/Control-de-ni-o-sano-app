import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SlideGuard } from '../guards/slide.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: '../tab5/tab5.module#Tab5PageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'historial',
        children: [
          {
            path: '',
            loadChildren: '../historial/historial.module#HistorialPageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'resultado/:id',
        children: [
          {
            path: '',
            loadChildren: '../historial/resultado/resultado.module#ResultadoPageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: 'grafica',
        children: [
          {
            path: '',
            loadChildren: '../historial/grafica/grafica.module#GraficaPageModule',
            canLoad: [SlideGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'slides',
    children: [
      {
        path: '',
        loadChildren: '../slides/slides.module#SlidesPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
