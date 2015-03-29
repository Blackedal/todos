// Creates a new instance of Ember.Application and makes it available as a variable named Todos the browsers JavaScript environment.
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});