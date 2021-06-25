
import _ from 'lodash'
export default function Text() {
    const model = {
        key1: 'value1', // 需要发送到后端的数据
        key2: 'value2',
        key3: 'value3',
        pageKey1: 'pageValue1', // 页面用到的字段
        pageKey2: 'pageValue2',
        pageKey3: 'pageValue3',
    }
    // 1. 原始写法
    const postData1 = {
        key1: model.key1,
        key2: model.key2,
        key3: model.key3,
    }
    // omit
    const postData2 = _.omit(model, ['pageKey1', 'pageKey2', 'pageKey3'])
    console.log(postData2);

    // omitBy                                               // 剔除key包含page字段
    const postData3 = _.omitBy(model, (value, key) => key.includes('page'))
    console.log(postData3);

    console.log(_.isEqual(postData1, postData2)) // true
    console.log(_.isEqual(postData1, postData3)) // true



    return (
        <div>1</div>
    )

}