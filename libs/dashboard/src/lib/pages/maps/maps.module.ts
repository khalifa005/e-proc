import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import { NebularModule } from '@e-proc/nebular';

@NgModule({
  imports: [
    NebularModule,
    GoogleMapsModule,
    LeafletModule,
    MapsRoutingModule,
    NgxEchartsModule,
    NbCardModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
