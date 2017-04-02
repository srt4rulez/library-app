import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('invitation');
    },

    actions: {

        saveInvitation(newInvitation) {

            newInvitation.save().then((response) => {

                const responseMessage = `Thank you! We've just saved your email
                address with the following id: ${response.get('id')}`;

                this.controller.set('responseMessage', responseMessage);

                this.refresh(); // refire the `model()` hook, which will create a fresh record

            });

        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew' (not saved), which prevents empty records
            this.controller.get('model').rollbackAttributes();
        }

    }

});
