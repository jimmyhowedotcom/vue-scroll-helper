import Vue from "vue";
import SmoothScroll from "smoothscroll-polyfill";

export default Vue.extend({

    props: {
        href: {
            type: String,
            required: true
        }
    },

    methods: {

        onClick()
        {
            document.querySelector(this.href).scrollIntoView({
                behavior: this.behavior,
                block: this.block,
                inline: this.inline
            });
        }

    },

    mounted()
    {
        SmoothScroll.polyfill();
    }

});
