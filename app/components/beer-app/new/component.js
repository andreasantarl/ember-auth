import Ember from 'ember';

export default Ember.Component.extend({
  form: {
    beer_name: null,
    company_name: null,
    beer_style: null,
    abv: null,
    notes: null,
    drink_again: null,
    make_private: null,
    photo: null,
    appearance: null,
    aroma: null,
    palate: null,
    flavor: null,
    packaging: null
  },

  actions: {
    submit() {
        let data = this.get('form');

        this.sendAction('submit', data);

        this.set('form.beer_name',  null);
      },
    },
});
