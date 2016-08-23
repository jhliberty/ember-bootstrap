module.exports = {
    normalizeEntityName: function() {
    },

    afterInstall: function() {
        return this.addBowerPackageToProject('bootstrap', '4.0.0-alpha.3');
    }
};
