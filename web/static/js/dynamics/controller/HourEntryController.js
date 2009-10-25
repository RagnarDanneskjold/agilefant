var HourEntryController = function HourEntryController(model, view, parentController) {
  this.model = model;
  this.view = view;
  this.parentController = parentController;
  this.init();
};

HourEntryController.columnIndices = {
    date: 0,
    user: 1,
    spentEffort: 2,
    description: 3,
    actions: 4,
    buttons: 5,
    data: 6
};

HourEntryController.prototype = new CommonController();

HourEntryController.prototype.removeTask = function() {
  var me = this;
  var dialog = new DynamicsConfirmationDialog("Are you sure?", "Are you sure you want to delete this hour entry?", function() {
    me.parentController.removeChildController("hourEntry", this);
    me.model.remove();
  });
};