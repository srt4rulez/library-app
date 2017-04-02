import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('contact');
    },

    actions: {

        sendMessage(contact) {

            contact.save().then(() => {

                this.controller.set('responseMessage', 'We got your message and we’ll get in touch soon.');

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
