(function() {
  var Cell, CellType, Map, root, testMap;

  root = window;

  Cell = root.Cell, CellType = root.CellType, Map = root.Map;

  root.testMap = testMap = function() {};

  root.parseMap = function(string) {
    var char, firstRow, grass, height, map, s, tree, water, width, _ref;
    root.tree = new CellType(true, "static/images/tree.png", 10);
    root.grass = new CellType(false, "static/images/grass.png", -1);
    root.water = new CellType(false, "static/images/water.png", -1);
	root.dirt = new CellType(false, "static/images/dirt.png", -1);
    width = 0;
    firstRow = true;
    height = 0;
    map = [];
    for (s = 0, _ref = string.length - 1; 0 <= _ref ? s <= _ref : s >= _ref; 0 <= _ref ? s++ : s--) {
      char = string[s];
      if (char === '0') {
        map.push(new Cell(root.grass));
      } else if (char === '1') {
        map.push(new Cell(root.tree));
      } else if (char === '2') {
        map.push(new Cell(root.water));
      } else if (char === '$') {
        firstRow = false;
        height = height + 1;
      } else {
        alert("Map had invalid format.");
      }
      if (firstRow) width = width + 1;
    }
    return new Map(width, height, map);
  };

}).call(this);
