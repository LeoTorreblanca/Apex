function igGetModel (pGridID) {
    var ig$ = apex.region(pGridID).widget();
    var grid = ig$.interactiveGrid("getViews","grid");
    var model   = grid.model;
    return model;
}