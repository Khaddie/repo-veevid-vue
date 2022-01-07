module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/scss/vars.scss";
                    @import "@/scss/styles.scss";
                `
            }
        }
    }
};
