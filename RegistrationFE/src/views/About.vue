<template>
  <div>
    <img
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/6~NJI7OD_OBAJ$3(7G1W6B0.png"
    />
    <p>
      小组活动 adjective
      学习知识、经验分享、头脑风暴为主要组成的小组活动是橙果er日常活动的主要形式。
      在这里，学长和学姐会带领大家推开信息世界遮掩许久的门户，走入广阔无垠的互联网世界，开启“程序人生”。同时这里也是沟通交流的平台，无数奇思妙想在这里生发，头脑风暴在这里酝酿。
      用知识去创造，用热爱去碰撞下个“风口”，或许就将由你来创造！
    </p>
    <p>
      橙果电脑服务日 Number 10
      电脑服务日是橙果er的传统活动，由两大部分组成。最初呢，主要活动为电脑义诊，旨在帮助师生解决一些不太复杂的的软硬件问题，为广大师生做一些力所能及的事情。
      在2020年伊始，我们加入了“信息化科普”活动，作为信息化科普的全新阵地。两大活动同组成了现在的“电脑服务日”活动，从而更好地普及知识，服务师生。
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    cards: [
      {
        title: "Favorite road trips",
        lazysrc: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_1_lazy.webp",
        ],
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_3_.webp",
        ],
      },
      {
        title: "Favorite road trips",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.webp",
        ],
      },

      {
        title: "Pre-fab homes",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.webp",
        ],
      },
    ],
  }),
  mounted() {
    if (that.screenWidth <= 600) {
      that.cards[0].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/3.2.2-_2_.webp",
      ];
      that.cards[0].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/3.2.2lazy.png",
      ];
      that.cards[0].height = "";

      that.cards[2].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E6%8B%BC%E5%90%88-_1_.webp",
      ];
      that.cards[2].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E6%8B%BC%E5%90%88lazy.jpg",
      ];

      that.cards[4].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E7%94%B5%E8%84%91%E4%B9%89%E8%AF%8A.jpg",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E5%A4%A7%E4%BC%9A%E8%AE%AE%E5%AE%A4.jpg",
      ];
    } else {
      that.cards[0].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%90%88%E7%85%A7.png?x-oss-process=image/format,jpg/interlace,1",
      ];
      that.cards[0].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%90%88%E7%85%A7lazy.png?x-oss-process=image/format,jpg/interlace,1",
      ];
      that.cards[2].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_3_.webp",
      ];
      that.cards[2].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_1_lazy.webp",
      ];
      that.cards[4].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2.7.png",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2.5.png",
      ];
    }
  },
};
</script>
