var board = new Boards.create(15, 15);
board.appendTo(document.getElementById('wrapper'));

var all = board.tiles.all,
    length = all.length;

for (var i = 0; i < length; i++) {
  all[i].on('mouseover', function() {
    this.classList.add('is-hovered');
  });
  all[i].on('mouseleave', function() {
    this.classList.remove('is-hovered');
  });
}
