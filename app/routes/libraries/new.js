import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('library');
    },

    setupController(controller, model) {

        this._super(controller, model);

        controller.set('title', 'Add New Library');
        controller.set('buttonLabel', 'Add Library');

    },

    renderTemplate() {
        this.render('libraries/form');
    },

    actions: {

        saveLibrary(newLibrary) {
            newLibrary.save().then(() => this.transitionTo('libraries'));
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew' (not saved), which prevents empty records
            this.controller.get('model').rollbackAttributes();
        }

    }

});
