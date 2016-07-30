import DS from 'ember-data';

export default DS.Model.extend({
  beer_name: DS.attr('string'),
  company_name: DS.attr('string'),
  beer_style: DS.attr('string'),
  abv: DS.attr('number'),
  notes: DS.attr('string'),
  drink_again: DS.attr('boolean'),
  make_private: DS.attr('boolean'),
  photo: DS.attr('string'),
  appearance: DS.attr('string'),
  aroma: DS.attr('string'),
  palate: DS.attr('string'),
  flavor: DS.attr('string'),
  packaging: DS.attr('string')
});
