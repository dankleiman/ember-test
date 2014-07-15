App.LeadController = Ember.ObjectController.extend({
  isEditing: false,
  showUnsavedMessage: function(){
    return this.get('isDirty') && !this.get('isSaving');
  }.property('isDirty', 'isSaving'),
  actions: {
    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
    }
  }

});
