import image01 from '../image/1.png';
import image02 from '../image/2.png';
import image03 from '../image/3.png';
import image04 from '../image/4.png';
import image05 from '../image/5.png';

const dataChat = [
    {
        isActive: true,
        image: image01,
        name: 'Lucy Nguyen',
        content: 'Wait for 1 minute',
        time: '3mins',
        username: '@lucynguyen',
        timeActive: 'Last seen 3 hours ago',
        accId: '200014849357805',
        listChat : [
            {
                timeCreate:'11:20 PM',
                text:'Oh, hello! All perfectly.I work, study and know this wonderful world!',
                type:1
            },
            {
                timeCreate:'11:20 PM',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20 PM',
                text:'hello',
                type:1
            }
        ]
    },
    {
        isActive: true,
        image: image02,
        name: 'Thẩm Thị Kiều Oanh',
        content: 'Thank you for dinner last night',
        time: '1 hr',
        username: '@thamoanh',
        timeActive: 'Last seen 8 hours ago',
        accId: '403014849357805',
        listChat : [
            {
                timeCreate:'11:20 PM',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20 PM',
                text:'hello',
                type:1
            },
            {
                timeCreate:'11:20 PM',
                text:'hello',
                type:1
            }
        ]
    },
    {
        isActive: false,
        image: image03,
        name: 'Andre Roberts',
        content: 'Ok',
        time: '3hrs',
        username: '@andre',
        timeActive: 'Active',
        accId: '220454829387805',
        listChat : [
            {
                text:'hello',
                timeCreate:'11:20',
                type:1,
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1,
                // 1: text
                // 2: video
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1,
            }
        ]
    },
    {
        isActive: false,
        image: image04,
        name: 'Hoàng Thuỳ Dương',
        content: 'I like that',
        time: 'yesterday',
        username: '@thuyduong',
        timeActive: 'Last seen 1 hours ago',
        accId: '880024819357805',
        listChat : [
            {
                timeCreate:'11:20',
                text:'helloa',
                type:1,
            },
            {
                timeCreate:'11:20',
                text:'hellos',
                type:1,
            },
            {
                timeCreate:'11:20',
                text:'helloq',
                type:1,
            }
        ]
    },
    {
        isActive: false,
        image: image05,
        name: 'Lê Quốc Khang',
        content: 'Yes',
        time: 'Sunday',
        username: '@quockhang',
        timeActive: 'Last seen days ago',
        accId: '440214249357805',
        listChat : [
            {
                timeCreate:'11:20',
                text:'hello',
                type:1,
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1,
            },
            {
                timeCreate:'11:20',
                text:'hello',
                type:1,
            }
        ]
    },
]
export default dataChat;
export const mediaTransaction = [
    {
        type: 'Media(31)',
        see: 'See all '
    },
    {
        type: 'Last transaction',
        see: 'See all'
    }
]