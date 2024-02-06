const datas = [3, 5, 4, 2];

const filteredDatas = datas.filter(data => data > 3);

filteredDatas;

const bucketList = [
    {
        id: 1,
        text: "여행",
        done: false,
    },
    {
        id: 2,
        text: "치킨",
        done: false,
    },
    {
        id: 3,
        text: "코딩",
        done: false,
    },
    {
        id: 4,
        text: "요리",
        done: false,
    },
];

// el.done === false 도 되지만 !el.done 으로 해도 되지만 원하는대로 정확하게 동작하지 않을 수 있음
const filteredBuckets = bucketList.filter(el => el.done === false);

filteredBuckets;