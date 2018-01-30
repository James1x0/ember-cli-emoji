module.exports = {
  description: 'Emojify',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('emojify', '~1.1.0');
  }
};
