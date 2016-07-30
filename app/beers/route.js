import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('beers');
  },

  actions: {
    create (data) {
      let beer = this.get('store').createRecord('beers', data);
      beer.save();
    },

  //
  //   delete (beer) {
  //       beer.destroyRecord();
  //   },
  //
  //   edit (beer) {
  //     this.transitionTo('beers/edit', beer);
  //   }
  },
});
