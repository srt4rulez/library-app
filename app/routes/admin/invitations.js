import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.findAll('invitation');
    },

    actions: {

        deleteInvitation(inv) {

            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                inv.destroyRecord();
            }

        }
    }

});
