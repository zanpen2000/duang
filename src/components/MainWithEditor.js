def((Form, FormSubmit) => class extends Jinkela {
  load() {
    let { id, resolvedKey } = this.depot || depot;
    if (!id) return Promise.resolve();
    return api([resolvedKey, id]);
  }
  init() {
    let depot = this.depot || window.depot;
    this.load().then(value => {
      let form = new Form({ depot }).renderTo(this);
      form.value = value;
    });
  }
});
