import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import Model from './Model.js';

export default {
  extends: Model,
  props: {
    src: String,
  },
  created() {
    const loader = new FBXLoader();
    loader.load(this.src, (fbx) => {
      this.onLoad(fbx);
    }, this.onProgress, this.onError);
  },
};