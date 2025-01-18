import type { Iblog, IBlogCard } from "~/types/blog";

export type IBlogCardType = 'blog' | 'news'

export const BLOG_LISTING: IBlogCard[] = [
  {
    id: generateIds("blog_"),
    type: "blog",
    thumbnail: "/images/blog.webp",
    title: "Top 4 khách sạn tốt nhất tại Đà Lạt cho kỳ nghỉ của bạn",
    description: "Đà Lạt, với khung cảnh hữu tình và khí hậu tuyệt vời được thiên nhiên ban tặng khiến cho bất cứ du khách nào cũng phải say đắm vì vẻ đẹp nơi đây. Với mức chi phí cũng không hề đắt đỏ, bạn có thể lựa chọn cho mình một khách sạn 5 sao có tiện nghi và chất lượng đẳng cấp quốc tế, giúp cho chuyến nghỉ dưỡng được thêm phần trọn vẹn, hoàn hảo. MIXI VIVU xin bật mí 4 khách sạn 5 sao tại Đà Lạt mà bạn nhất định nên trải nghiệm khi tới đây nhé!",
    date: "2025-01-16",
  },
  {
    id: generateIds("blog_"),
    type: "news",
    thumbnail: "/images/blog2.webp",
    title: "Lễ hội pháo hoa quốc tế Đà Nẵng năm 2025 với chủ đề “Đà Nẵng–Kỷ nguyên mới”",
    description: 'Lễ hội Pháo hoa quốc tế Đà Nẵng năm 2025 với chủ đề “Đà Nẵng–Kỷ nguyên mới” sẽ diễn ra từ ngày 31/5-12/7/2025. Đây là một trong những thông tin được đưa ra tại Hội nghị triển khai kế hoạch phát triển du lịch thành phố Đà Nẵng năm 2025 diễn ra sáng 27/12.',
    date: "2025-01-08",
  },
  {
    id: generateIds("blog_"),
    type: "blog",
    thumbnail: "/images/blog3.webp",
    title: "Vì sao nhiều resort, khách sạn biển Đà Nẵng kín phòng giữa mùa lạnh?",
    description: 'Dù giữa mùa lạnh và thời tiết tại TP.Đà Nẵng mưa dầm dề kéo dài cả tháng nhưng các khách sạn 4-5 sao, resort mặt tiền biển Đà Nẵng vẫn kín phòng, công suất đến 90%.',
    date: "2025-01-02",
  },
  {
    id: generateIds("blog_"),
    type: "blog",
    thumbnail: "/images/blog4.webp",
    title: "[Ảnh] Một thoáng Sơn Trà",
    description: 'Bán đảo Sơn Trà (phường Thọ Quang, quận Sơn Trà, thành phố Đà Nẵng) được ví như "viên ngọc xanh" quý báu và là niềm tự hào của người dân Đà thành với hệ sinh thái đa dạng, những bãi biển tuyệt đẹp, nhiều điểm tham quan và dịch vụ giải trí... Không cần đi đâu xa, bản thân Sơn Trà đã là một công viên khổng lồ giữa lòng đô thị sôi động bậc nhất miền trung.',
    date: "2024-10-27",
  },
  {
    id: generateIds("blog_"),
    type: "news",
    thumbnail: "/images/blog5.webp",
    title: "Đà Nẵng khai trương Đường hoa biển",
    description: "hiều tối nay (5/7) Đà Nẵng chính thức khai trương, đưa vào sử dụng Đường hoa biển Đà Nẵng - Danang Beach - Flowers walk. Dự án do Ban quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng phối hợp các đơn vị tổ chức, trang trí nhằm phục vụ người dân, du khách.",
    date: "2024-07-05",
  },
];

export const BLOG_DATA: Iblog = {
  id: generateIds("blog_"),
  type: 'blog',
  thumbnail: "/images/blog.webp",
  title: "Top 4 khách sạn tốt nhất tại Đà Lạt cho kỳ nghỉ của bạn",
  date: "2025-01-15",
  description:
    "Đà Lạt, với khung cảnh hữu tình và khí hậu tuyệt vời được thiên nhiên ban tặng khiến cho bất cứ du khách nào cũng phải say đắm vì vẻ đẹp nơi đây. Với mức chi phí cũng không hề đắt đỏ, bạn có thể lựa chọn cho mình một khách sạn 5 sao có tiện nghi và chất lượng đẳng cấp quốc tế, giúp cho chuyến nghỉ dưỡng được thêm phần trọn vẹn, hoàn hảo. Chúng tôi xin bật mí 4 khách sạn 5 sao tại Đà Lạt mà bạn nhất định nên trải nghiệm khi tới đây nhé!",
  content:
    '<div class="BlogDetail_output__fDBDB"><p class="[object Object]" style="margin: 5px 0px; text-align: left;"><b>1.</b><b>&nbsp;Khách sạn Dalat Palace Heritage</b></p><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Nằm trên con phố Trần Phú lịch sử của thành phố Đà Lạt, Khách sạn Dalat Palace Heritage tự hào là biểu tượng của sự sang trọng và quý phái. Được xây dựng từ năm 1916 bởi những bàn tay tài hoa của người Pháp, khách sạn này không chỉ là chứng nhân của thời gian mà còn là điểm đến lý tưởng cho những ai đam mê khám phá vẻ đẹp kiến trúc Pháp cổ điển.<br></p><figure class="" style="position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; width: 100%; max-width: 100%; max-height: 400px; overflow: hidden; border: none;"><img src="https://minio.fares.vn/mixivivu-dev/tour/ship/blog/sozpxsd0e47y1gbe.webp" alt="" class="" style="max-width: 100%; max-height: 400px;"></figure><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Với vị trí đắc địa tại số 02 Trần Phú, Phường 3, khách sạn 5 sao này mang đến cho du khách cơ hội tận hưởng không gian yên bình và thơ mộng của Đà Lạt. Dalat Palace Heritage không chỉ ghi điểm bởi kiến trúc độc đáo mà còn bởi những tiện nghi hiện đại và dịch vụ đẳng cấp.</p><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Với 38 phòng nghỉ và 5 căn hộ cao cấp, mỗi không gian tại đây đều mang đậm phong cách kiến trúc Pháp cổ kính và được trang bị lò sưởi riêng, tạo nên sự ấm cúng, thoải mái cho quý khách. Khuôn viên rộng lớn 40000m2, tô điểm bởi vườn hoa đa dạng và rừng thông xanh mát, là nơi lý tưởng để thư giãn và hòa mình vào thiên nhiên.</p><figure class="" style="position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; width: 100%; max-width: 100%; max-height: 400px; overflow: hidden; border: none;"><img src="https://minio.fares.vn/mixivivu-dev/tour/ship/blog/3215yp1cnff346cg.webp" alt="" class="" style="max-width: 100%; max-height: 400px;"></figure><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Chỉ vài phút đi bộ là đến Hồ Xuân Hương và Chợ đêm Đà Lạt, Dalat Palace Heritage không chỉ cung cấp một nơi nghỉ ngơi đẳng cấp mà còn là điểm xuất phát thuận lợi để khám phá và trải nghiệm vẻ đẹp đặc trưng của Đà Lạt.</p><p class="[object Object]" style="margin: 5px 0px; text-align: left;"><b>2. Khách sạn&nbsp;MerPerle Dalat</b></p><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Nằm tại vị trí đắc địa số 01 Hùng Vương, phường 10, MerPerle Dalat Hotel tự hào là khách sạn 5 sao lớn nhất Đà Lạt, mang đến cho du khách trải nghiệm nghỉ dưỡng đẳng cấp giữa lòng thành phố ngàn hoa. Với kiến trúc tân cổ điển, khách sạn không chỉ là biểu tượng của sự sang trọng, tinh tế mà còn là nơi hòa mình vào thiên nhiên với khung cảnh đồi thông xanh mát bao quanh.</p><figure class="" style="position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; width: 100%; max-width: 100%; max-height: 400px; overflow: hidden; border: none;"><img src="https://minio.fares.vn/mixivivu-dev/tour/ship/blog/myefpboqu14gz2bw.webp" alt="" class="" style="max-width: 100%; max-height: 400px;"></figure><p class="[object Object]" style="margin: 5px 0px; text-align: left;">MerPerle Dalat Hotel sở hữu diện tích rộng lớn 35.000m2, cung cấp 389 phòng và suites với nội thất hiện đại và tiện nghi cao cấp. Mỗi phòng tại đây đều mở ra không gian tầm nhìn rộng lớn, hướng về thành phố Đà Lạt hoặc đồi thông thơ mộng, tạo nên không gian nghỉ dưỡng lý tưởng cho mọi du khách.</p><p class="[object Object]" style="margin: 5px 0px; text-align: left;"><b>3. Khách sạn Ana Mandara Villas Dalat Resort &amp; Spa</b></p><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Nằm kín đáo trên đường Lê Lai, Phường 5, Đà Lạt, Ana Mandara Villas Dalat Resort &amp; Spa là điểm đến lý tưởng cho những ai tìm kiếm sự yên bình và gần gũi với thiên nhiên. Khu nghỉ dưỡng này nổi tiếng với 17 biệt thự sang trọng mang phong cách kiến trúc Pháp cổ điển và được biết đến với không gian xanh mát của ngọn đồi thông và khuôn viên rộng lớn.</p><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Mỗi căn villa tại Ana Mandara được trang bị từ 2 đến 3 phòng ngủ, đều được thiết kế tỉ mỉ để hòa hợp với thiên nhiên, đồng thời cung cấp mọi tiện nghi hiện đại nhất cho du khách. Đây là nơi bạn có thể thực sự tận hưởng cuộc sống thư thái, thả mình vào không gian yên bình và hương sắc của xứ sở ngàn hoa.</p><figure class="" style="position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; width: 100%; max-width: 100%; max-height: 400px; overflow: hidden; border: none;"><img src="https://minio.fares.vn/mixivivu-dev/tour/ship/blog/o18ewwvhm4oq2vkd.webp" alt="" class="" style="max-width: 100%; max-height: 400px;"></figure><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Vị trí đắc địa của Ana Mandara Villas Dalat Resort &amp; Spa chỉ cách Hồ Xuân Hương và Chợ đêm Đà Lạt vài phút đi bộ, làm cho nó trở thành lựa chọn hàng đầu cho những du khách muốn khám phá trọn vẹn vẻ đẹp và nét văn hóa đặc sắc của thành phố sương mù.</p><p class="[object Object]" style="margin: 5px 0px; text-align: left;"><b>4.Khách sạn&nbsp;</b><b>Colline Đà Lạt</b></p><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Nằm ngay tại trung tâm Đà Lạt, Hôtel Colline tự hào với kiến trúc độc đáo và quyến rũ, là điểm đến không thể bỏ qua cho du khách. Tại số 10 Phan Bội Châu, Phường 1, Hôtel Colline mở ra không gian nghỉ dưỡng sang trọng với 150 phòng nghỉ đa dạng, phù hợp với mọi nhu cầu từ gia đình đến bạn bè và hội nghị.</p><figure class="" style="position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; width: 100%; max-width: 100%; max-height: 400px; overflow: hidden; border: none;"><img src="https://minio.fares.vn/mixivivu-dev/tour/ship/blog/ntixzt1i2ti1z62t.webp" alt="" class="" style="max-width: 100%; max-height: 400px;"></figure><p class="[object Object]" style="margin: 5px 0px; text-align: left;">Mỗi phòng tại Hôtel Colline được thiết kế tinh tế với sự kết hợp hài hòa giữa nội thất gỗ màu nâu ấm cúng và tông màu sáng trắng thanh lịch, tạo nên không gian thư giãn hoàn hảo. Không chỉ dừng lại ở đó, khách sạn còn cung cấp loạt tiện ích đẳng cấp như spa, phòng tập gym hiện đại, nhà hàng ẩm thực Á - Âu và bar sang trọng, đáp ứng mọi yêu cầu của quý khách.</p><p class="[object Object]" style="margin: 5px 0px; text-align: left;"><b><i>Hy vọng với những chia sẻ của chúng tôi sẽ giúp bạn dễ dàng tìm được nơi lưu trú tốt nhất tại Đà Lạt nhé.</i></b></p></div>',
};
