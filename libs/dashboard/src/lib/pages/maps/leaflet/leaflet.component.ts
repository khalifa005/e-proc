import { Component } from '@angular/core';

import * as L from 'leaflet';
import { Icon } from 'leaflet';

@Component({
  selector: 'e-proc-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
    https://leafletjs.com/examples/custom-icons/
      <nb-card-header>Leaflet Maps</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent {

  options = {
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76],
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 5,
    center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
  };
}
