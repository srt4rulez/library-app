import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

    name:    DS.attr('string'),
    address: DS.attr('string'),
    phone:   DS.attr('string'),

    isValid: Ember.computed.notEmpty('name'),
    hasBody: Ember.computed.or('address', 'phone'),

});
