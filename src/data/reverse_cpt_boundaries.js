import * as turf from '@turf/turf'

const polygon = turf.polygon(
  [
    [
      [
        9.480504, /*Oben links*/
        46.873336 /*Oben links*/
      ],
      [
        9.554286, /*Unten rechts*/
        46.873336 /*Oben links*/
      ],
      [
        9.554286, /*Unten rechts*/
        46.843051 /*Unten rechts*/
      ],
      [
        9.480504, /*Oben links*/
        46.843051 /*Unten rechts*/
      ],
      [
        9.480504, /*Oben links*/
        46.873336 /*Oben links*/
      ]
    ]
  ]
)

const masked = turf.mask(polygon);


export default masked;
