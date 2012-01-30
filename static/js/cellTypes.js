(function() {
  var CellType, root;

  root = window;

  CellType = root.CellType;

  root.treeType = new CellType(true, "static/images/tree.png", 10);

  root.grassType = new CellType(false, "static/images/grass.png", 0);

  root.waterType = new CellType(false, "static/images/waterfade.png", -10);

}).call(this);
