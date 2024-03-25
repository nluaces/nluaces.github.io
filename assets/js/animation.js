
const TAU = Zdog.TAU;
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  rotate: { x: -TAU/16},
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

var rotor = new Zdog.Anchor({
  addTo: illo,
});

new Zdog.Rect({
  addTo: rotor,
  width: 200,
  height: 180,
  translate: { z: 120},
  stroke: 8,
  fill: true,
  color: '#F56A6A',
  // backface color
  backface: '#026873',
});

rotor.copyGraph({
  rotate: { y: TAU * 1/4 },
});
rotor.copyGraph({
  rotate: { y: TAU * 2/4 },
});
rotor.copyGraph({
  rotate: { y: TAU * 3/4 },
});

// update & render
illo.updateRenderGraph();

function animate() {
  // rotate
  if ( isSpinning ) {
    illo.rotate.y += 0.005
  }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();
