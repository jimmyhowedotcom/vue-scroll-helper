import ScrollLink from "@/plugins/vue-scroll-helper/ScrollLink";
import SmoothScrollLink from "@/plugins/vue-scroll-helper/SmoothScrollLink";

let Plugin = {

    // eslint-disable-next-line no-unused-vars
    install(Vue, options = {})
    {
        Vue.component('ScrollLink', ScrollLink);
        Vue.component('SmoothScrollLink', SmoothScrollLink);

        Vue.prototype.$scrollTo = {

            id(href)
            {
                href = (href.indexOf('#') === -1) ? '#' + href : href;

                document.querySelector(href).scrollIntoView({
                    behavior: this.behavior,
                    block: this.block,
                    inline: this.inline
                });
            }

        }
    }

}

export default Plugin;
