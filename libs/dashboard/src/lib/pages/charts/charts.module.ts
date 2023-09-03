/* eslint-disable no-sparse-arrays */
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbCardModule } from '@nebular/theme';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { D3BarComponent } from './d3/d3-bar.component';
import { D3LineComponent } from './d3/d3-line.component';
import { D3PieComponent } from './d3/d3-pie.component';
import { D3AreaStackComponent } from './d3/d3-area-stack.component';
import { D3PolarComponent } from './d3/d3-polar.component';
import { D3AdvancedPieComponent } from './d3/d3-advanced-pie.component';
import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';
import { NebularModule } from '@e-proc/nebular';
import { EchartsPieComponent } from './echarts/echarts-pie.component';

const components = [
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
];

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({ echarts }),
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'),

    }),
    NebularModule,
    ChartsRoutingModule,
    // NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
  ],
  declarations: [...routedComponents, ...components],
  exports:[...components]
})
export class ChartsModule {}
