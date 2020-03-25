import * as turf from '@turf/turf'

const polygon = turf.polygon(
  [
    [
      [
        8.036668, /*Oben links*/
        47.39510 /*Oben links*/
      ],
      [
        8.054771, /*Unten rechts*/
        47.39510 /*Oben links*/
      ],
      [
        8.054771, /*Unten rechts*/
        47.3907 /*Unten rechts*/
      ],
      [
        8.036668, /*Oben links*/
        47.3907 /*Unten rechts*/
      ],
      [
        8.036668, /*Oben links*/
        47.39510 /*Oben links*/
      ]
    ]
  ]
)

const masked = turf.mask(polygon);


export default masked;
