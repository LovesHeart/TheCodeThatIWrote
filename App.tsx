import { defineComponent } from 'vue';
import Layout from './layout/index';
import waterMark from './common/watermark';
import viewSkeleton from './components/view-skeleton';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <><Layout /><viewSkeleton /></>
    );
  },
    mounted() {
      // waterMark({ name: this.$store.state.user.rtx, font_size: 36, top: 50, stroke: true, width: 300, height: 260 })
      waterMark({ name: "内部资料请勿外泄", font_size: 36, top: 50, stroke: true, width: 300, height: 260 })
  },
});
