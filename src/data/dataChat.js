import image01 from '../image/1.png';
import image02 from '../image/2.png';
import image03 from '../image/3.png';
import image04 from '../image/4.png';
import image05 from '../image/5.png';

const dataChat = [
    {
        isShow: true,
        isActive: true,
        image: image01,
        name: 'Lucy Nguyen',
        content: 'Wait for 1 minute',
        time: '3mins',
        username: '@lucynguyen',
        listChat : [
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            }
        ]
    },
    {
        isShow: false,
        isActive: true,
        image: image02,
        name: 'Thẩm Thị Kiều Oanh',
        content: 'Thank you for dinner last night',
        time: '1 hr',
        username: '@thamoanh',
        listChat : [
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            }
        ]
    },
    {
        isShow: false,
        isActive: false,
        image: image03,
        name: 'Andre Roberts',
        content: 'Ok',
        time: '3hrs',
        username: '@andre',
        listChat : [
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
                // 1: text
                // 2: video
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            }
        ]
    },
    {
        isShow: false,
        isActive: false,
        image: image04,
        name: 'Hoàng Thuỳ Dương',
        content: 'I like that',
        time: 'yesterday',
        username: '@thuyduong',
        listChat : [
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            }
        ]
    },
    {
        isShow: false,
        isActive: false,
        image: image05,
        name: 'Lê Quốc Khang',
        content: 'Yes',
        time: 'Sunday',
        username: '@quockhang',
        listChat : [
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1
            }
        ]
    }
]
export default dataChat