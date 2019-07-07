import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <img
        src="data:image/png;base64,
        iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZ
        cwAADdcAAA3XAUIom3gAAAAHdElNRQfjBwcTKwVriTPqAAAB1klEQVRIx6WTz0sbQRTHP0kEERXx
        BxVR23ry10GKCNKjiKJHwT/A/0HxVPDoyaOIN6UneykIIoFi8RCCugUjGldRxFgLYiJqdNVNNh6y
        0Z1k0p3VN5c3+933mXlv3oPMyxqnFs/md/gDdLwP8JUvlHsF+OgG4Bt9VPCXS9LKsRkMfuY2o0Qd
        1VBdJge5FNbY4c5zATLsB2z3nio6qfMYnmDydfuJHxieEkiySNnrK5yyTszD+WnOmMfwOy70iwim
        MuCGIGGxD3TC/FMMNzlkgZQISPMbTbEP4gT5AyIAtgkTVzp/l+9kCgEmITaywn8txgp61vXnSRoh
        HlzCU0RYym3yAQYnnLoAdJY5Kya2MOfSPnGmnTNbIoT7GWYISLBFVIK3uGSTTe6LAXropxELjYki
        l0zzyKOzzCKgly4CHBMkqtqTIqCJD4BFPSOukVcECwFJDMppYIRBV8BeFiBaHys8KQ7zliwFjTmO
        aKFCIXm7E315n0tpoFkJcE2o8AY+6mmjjlsO0LEKgnw00/GiS+wjE2gk0Jmh9Q06Y+zYJTpnSk0X
        h6mdz7ZXQ68EINFFwANPtpciKQFIdBGwQQQTixQxViUAiR4Qfjjmgmoq2WWWBckrSPRnLTn4EL3y
        +soAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDctMDdUMTc6NDM6MDUrMDI6MDAgdqayAAAAJXRF
        WHRkYXRlOm1vZGlmeQAyMDE5LTA3LTA3VDE3OjQzOjA1KzAyOjAwUSseDgAAABl0RVh0U29mdHdh
        cmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
        alt="Cart"
        style="width:100%"
      />
      <div class="badge" data-badge="4"></div>
    </div>
  `,
  styleUrls: ['cart.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CartComponent {
  @Input() count: number;
}
