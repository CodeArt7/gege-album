new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/foto1.jpg",
          img2: "images/foto2.jpg",
          img3: "images/foto3.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/foto4.jpg",
          img2: "images/foto5.jpg",
          img3: "images/foto6.jpg",
          title: "SMILE",
          isOpen: false,
        },
        {
          img1: "images/foto7.jpg",
          img2: "images/foto8.jpg",
          img3: "images/foto9.jpg",
          title: "BEAUTIFUL",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
