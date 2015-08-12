var AmpersandModel = require('ampersand-model');
var AmpersandCollection = require('ampersand-rest-collection');

var {{titlecase name}} = AmpersandModel.extend({
  modelType: '{{titlecase name}}',
  idAttribute: '_id'
});

var {{titlecase name}}Collection = AmpersandCollection.extend({
  comparator: '_id',
  model: {{titlecase name}},
  modelType: '{{titlecase name}}Collection',
});

module.exports = {{titlecase name}};
module.exportsCollection = {{titlecase name}}Collection;
