const productTypes = 
{
    'new' :{
        name: 'Sản phẩm mới',
        products: [
            ['sondau',    [8, 9]],
            ['hoa',       [8, 9]],
            ['phongcanh', [8, 9]],
            ['truutuong', [8, 9]],
        ],
    },
    'all' :{
        id: 0,
        name: 'Tất cả thể loại',
        products: [
            ['sondau',    [0, 1]],
            ['hoa',       [0, 1]],
            ['phongcanh', [0, 1]],
            ['truutuong', [0, 1]],
        ],
    },
    'sondau': {
        id: 1,
        name: "Tranh sơn dầu",
        products: 
        [
            {
                    title: 'Hoài Niệm',
                    price: '7,000,000 VNĐ',
                    material: 'Sơn dầu',
                    size: '39cm x 48cm',
                    desc: `-Chất liệu: Sơn dầu</br>
                            -Năm sáng tác: 2010</br>
                            -Giá bao gồm khung`,
                    mainImage: './assets/img/son-dau/1.jpg',
            },
            {
                title: 'Phố Cổ Hà Nội',
                price: '20,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '50cm x 62cm',
                desc: `Giá bán bao gồm cả khung gỗ tự nhiên</br>Chất liệu: Sơn Dầu</br>Kích thước: 50cm x 62cm</br>Sáng tác: 2005`,
                mainImage: './assets/img/son-dau/2.jpg',
            },
            {
                title: 'Thưởng Quỳnh',
                price: '14,000,000 VNĐ',
                material: 'acrylic',
                size: '60cm x 70cm',
                desc: `Chất liệu: acrylic</br>Kích thước: 60cm x 70cm`,
                mainImage: './assets/img/son-dau/3.jpg',
            },
            {
                title: 'Thu Biếc',
                price: '6,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '80cm x 120cm',
                desc: `Chất liệu: Sơn dầu</br>Kích thước: 80cm x 120cm`,
                mainImage: './assets/img/son-dau/4.jpg',
            },
            {
                title: 'Đêm Kinh Thành',
                price: '6,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '80cm x 110cm',
                desc: `Đêm Kinh Thành`,
                mainImage: './assets/img/son-dau/5.jpg',
            },
            {
                title: 'Thu Biếc',
                price: '4,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '80cm x 80cm',
                desc: `Thu Biếc`,
                mainImage: './assets/img/son-dau/6.jpg',
            },
            {
                title: 'Mùa Vàng',
                price: '8,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '80cm x 160cm',
                desc: `Mùa Vàng`,
                mainImage: './assets/img/son-dau/7.jpg',
            },
            {
                title: 'Nắng vàng Tây bắc',
                price: '15,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '80cm x 120cm',
                desc: `Cảnh đẹp thiên nhiên và con người Tây bắc dung dị trong sinh hoạt mùa màng dưới ánh nắng vàng lung linh</br>Sáng tác: 2025`,
                mainImage: './assets/img/son-dau/8.jpg',
            },
            {
                title: 'Nắng vàng Tây bắc',
                price: '25,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '160cm x 105cm',
                desc: `Tranh phong canh ban truu the hien mua vang Tay bac</br>Sáng tác: 2025`,
                mainImage: './assets/img/son-dau/9.jpg',
            },
            {
                title: 'Mùa hoa gạo',
                price: '9,900,000 VNĐ',
                material: 'Acrylic',
                size: '70cm x 60cm',
                desc: `Mùa hoa gạo`,
                mainImage: './assets/img/son-dau/10.jpg',
            }
        ]
    },

    'hoa': {
        id: 2,
        name: "Tranh hoa",
        products: 
        [
            {
                title: 'Sắc hoa Trên Phố',
                price: '10,000,000 VNĐ',
                material: 'Acrylic',
                size: '80cm x 100cm',
                desc: `Tp: Sắc hoa trên phố</br>Cl Acrylic</br>Kt 80x100cm</br>Tg Lê Quang Sáng</br>Năm sáng tác 2025`,
                mainImage: './assets/img/hoa/1.jpg',
            },
            {
                title: 'Bản Giao Hưởng Của Sắc hoa',
                price: '3,500,000 VNĐ',
                material: 'Acrylic',
                size: '50cm x 50cm',
                desc: `Tranh sáng tác, độc bản và có giấy tác quyền của họa sĩ`,
                mainImage: './assets/img/hoa/2.jpg',
            },
            {
                title: 'Bình hoa 7',
                price: '3,200,000 VNĐ',
                material: 'Acrylic',
                size: '38cm x 40cm',
                desc: `Bộ tranh tĩnh vật “Hơi thở gốm xưa” là sự hòa quyện giữa ký ức làng gốm và vẻ đẹp giản dị của đời sống thường ngày.</br>Sáng tác: 2025`,
                mainImage: './assets/img/hoa/3.jpg',
            },
            {
                title: 'Bình hoa 6',
                price: '3,200,000 VNĐ',
                material: 'Acrylic',
                size: '38cm x 40cm',
                desc: `Bộ tranh tĩnh vật “Hơi thở gốm xưa” là sự hòa quyện giữa ký ức làng gốm và vẻ đẹp giản dị của đời sống thường ngày.</br>Sáng tác: 2025`,
                mainImage: './assets/img/hoa/4.jpg',
            },
            {
                title: 'Bạch Mai 2',
                price: '16,000,000 VNĐ',
                material: 'Acrylic',
                size: '70cm x 120cm',
                desc: `Sáng tác: 2025`,
                mainImage: './assets/img/hoa/5.jpg',
            },
            {
                title: 'Hoa Nắng',
                price: '3,500,000 VNĐ',
                material: 'acrylic',
                size: '50cm x 60cm',
                desc: `Tranh sáng tác, độc bản và có giấy tác quyền của họa sĩ`,
                mainImage: './assets/img/hoa/6.jpg',
            },
            {
                title: 'Peony',
                price: '3,000,000 VNĐ',
                material: 'Acrylic',
                size: '50 x 50cm',
                desc: `Tranh chưa khung`,
                mainImage: './assets/img/hoa/7.jpg',
            },
            {
                title: 'Phượng Vỹ',
                price: '3,000,000 VNĐ',
                material: 'Acrylic',
                size: '50cm x 50cm',
                desc: `Tranh chưa khung`,
                mainImage: './assets/img/hoa/8.jpg',
            },
            {
                title: 'Áng Mây Sẽ Nở hoa',
                price: '3,000,000 VNĐ',
                material: 'Acrylic',
                size: '60cm x 50cm',
                desc: `Tranh chưa khung`,
                mainImage: './assets/img/hoa/9.jpg',
            },
            {
                title: 'Hương đêm (11)',
                price: '14,000,000 VNĐ',
                material: 'Acrylic',
                size: '60cm x 80cm',
                desc: `Hương đêm`,
                mainImage: './assets/img/hoa/10.jpg',
            }
        ]
    },

    'phongcanh' :{
        id: 3,
        name: "Tranh phong cảnh",
        products: 
        [
            {
                title: 'Thiên Nhiên',
                price: '6,000,000 VNĐ',
                material: 'Acrylic',
                size: '40 x 40 cm',
                desc: `– Chất liệu: Acrylic
                        </br>– Năm sáng tác: 2024
                        </br>– Giá bán đã bao gồm khung `,
                mainImage: './assets/img/phong-canh/1.jpg',
            },
            {
                title: 'Thung Lũng hoa',
                price: '4,500,000 VNĐ',
                material: 'Chất liệu khác',
                size: '40cm x 40cm',
                desc: `– Chất liệu: Acrylic
                        </br>– Năm sáng tác: 2024
                        </br>– Giá bán đã bao gồm khung `,
                mainImage: './assets/img/phong-canh/2.jpg',
            },
            {
                title: 'Biển',
                price: '5,500,000 VNĐ',
                material: 'Chất liệu khác',
                size: '33cm x 41cm',
                desc: `– Chất liệu: Acrylic
                        </br>– Năm sáng tác: 2024
                        </br>– Giá bán đã bao gồm khung gỗ tự nhiên `,
                mainImage: './assets/img/phong-canh/3.jpg',
            },
            {
                title: 'Thiên Nhiên Hùng Vĩ',
                price: '6,00,000 VNĐ',
                material: 'Chất liệu khác',
                size: '45cm x 70cm',
                desc: `Trời vào thu, con đường như sự gọi mời con người bước vào những tháng ngày tươi đẹp rực rỡ và thơ mộng`,
                mainImage: './assets/img/phong-canh/4.jpg',
            },
            {
                title: 'Con Đường Mùa thu',
                price: '22,000,000 VNĐ',
                material: 'Acrylic/ Canvas',
                size: '146cm x 97cm',
                desc: `Trời vào thu, con đường như sự gọi mời con người bước vào những tháng ngày tươi đẹp rực rỡ và thơ mộng`,
                mainImage: './assets/img/phong-canh/5.jpg',
            },
            {
                title: 'Luân Canh',
                price: '75,000,000 VNĐ',
                material: 'Sơn dầu',
                size: '292cm x 97cm',
                desc: `Thể hiện sư hùng vĩ của vùng núi Tây bắc cùng với hình ảnh quen thuộc trong lao động  sản xuất của đồng bào trên những tầng ruộng bậc thang. Sự trãi dài liên tục của quá trình luân canh khi nước đổ – cày bừa – thu hoạch.`,
                mainImage: './assets/img/phong-canh/6.jpg',
            },
            {
                title: 'Một Sớm Mùa Đông',
                price: '10,000,000 VNĐ',
                material: 'Acrylic',
                size: '80cm x 120cm',
                desc: `Một Sớm Mùa Đông`,
                mainImage: './assets/img/phong-canh/7.jpg',
            },
            {
                title: 'Buông Lưới Trên Sông',
                price: '10,000,000 VNĐ',
                material: 'Acrylic',
                size: '80cm x 120cm',
                desc: `Cảnh buông lưới trên sông (mưu sinh)`,
                mainImage: './assets/img/phong-canh/8.jpg',
            },
            {
                title: 'Mùa lúa chín (2)',
                price: '12,000,000 VNĐ',
                material: 'Acrylic',
                size: '80cm x 60cm',
                desc: ``,
                mainImage: './assets/img/phong-canh/9.jpg',
            },
            {
                title: 'Gọi Xuân về (3)',
                price: '12,000,000 VNĐ',
                material: 'Acrylic',
                size: '80cm x 60cm',
                desc: `Gọi Xuân về`,
                mainImage: './assets/img/phong-canh/10.jpg',
            }
        ]
    },
    
    'truutuong': {
        id: 4,
        name: "Tranh trừu tượng",
        products: 
        [
            {
                title: 'Ồ, Nắng!',
                price: '15,000,000 VNĐ',
                material: 'Acrylic/Canvas',
                size: '59.5cm x 79.5 cm',
                desc: `Nắng reo vỡ trong bình minh.`,
                mainImage: './assets/img/truu-tuong/1.jpg',
            },
            {
                title: 'Người Gái Thiên Nhiên',
                price: '6,000,000 VNĐ',
                material: 'Acrylic on canvas',
                size: '60cm x 40cm',
                desc: `Đời sống xã hội hiện đại đôi lúc buộc con người ta phải tự đeo mặt nạ để hoặc là phòng vệ chính đáng, hoặc là ngụy trang cho những tâm cơ nào đó. Thành ra trở về với thiên nhiên, không phải là tự hoang thú mình, mà để sống thật hơn với bản ngã người. Tranh mang phong cách dã thú biểu hiện trừu tượng.`,
                mainImage: './assets/img/truu-tuong/2.jpg',
            },
            {
                title: 'Cuối thu',
                price: '16,000,000 VNĐ',
                material: 'Sơn dầu trên toan',
                size: '120cm x 120cm',
                desc: `Sáng tác: 2025`,
                mainImage: './assets/img/truu-tuong/3.jpg',
            },
            {
                title: 'Chớm Xuân',
                price: '16,00,000 VNĐ',
                material: 'Sơn dầu trên toan',
                size: '120cm x 120cm',
                desc: `Sáng tác: 2025`,
                mainImage: './assets/img/truu-tuong/4.jpg',
            },
            {
                title: 'Phố',
                price: '18,000,000 VNĐ',
                material: 'Sơn dầu trên toan',
                size: '120cm x 140cm',
                desc: `Trừu tượng</br>Sáng tác: 2025`,
                mainImage: './assets/img/truu-tuong/5.jpg',
            },
            {
                title: 'Quả Vườn Khế',
                price: '10,000,000 VNĐ',
                material: 'Acrylic on canvas',
                size: '59.5cm x 79.5 cm.',
                desc: `Quả vườn khế – vườn ký ức tuổi thơ`,
                mainImage: './assets/img/truu-tuong/6.jpg',
            },
            {
                title: 'Oi Mùa Nắng Cũ',
                price: '5,000,000 VNĐ',
                material: 'Acrylic on canvas',
                size: '40cm x 60cm',
                desc: `Nắng cũ, cũng có thể là nơi chốn cũ, luôn gợi thức về những kỷ niệm.</br>Sáng tác: 2025`,
                mainImage: './assets/img/truu-tuong/7.jpg',
            },
            {
                title: 'Tịnh Độ Tại Nhân Gian',
                price: '3,000,000 VNĐ',
                material: 'Chất liệu khác',
                size: '60cm x 40cm',
                desc: `Hành giả nương sắc tướng thế tục để hoằng pháp, hành thiền nhưng không dính mắc bởi cảnh giới của thế gian.`,
                mainImage: './assets/img/truu-tuong/8.jpg',
            },
            {
                title: 'Mùa hoa Bỏ Lại',
                price: '10,000,000 VNĐ',
                material: 'Acrylic/ Canvas',
                size: '80cm x 80cm',
                desc: `Sau những hoang tàn vẫn còn đó những hy vọng, những đẹp đẽ tiếp nối – nở hoa`,
                mainImage: './assets/img/truu-tuong/9.jpg',
            },
            {
                title: 'Ngày Tháng Cũ',
                price: '12,000,000 VNĐ',
                material: 'Acrylic',
                size: '80cm x 80cm',
                desc: `Là ký ức về khung cảnh thân thuộc của tôi`,
                mainImage: './assets/img/truu-tuong/10.jpg',
            }
        ]
    }

}