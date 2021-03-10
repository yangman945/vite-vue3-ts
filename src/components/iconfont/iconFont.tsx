import {defineComponent, PropType, unref} from 'vue'
import {createFromIconfontCN} from '@ant-design/icons-vue';

let MyIconFont = createFromIconfontCN({
    // scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    // scriptUrl: '//at.alicdn.com/t/font_2184398_zflo1kjcemp.js',
    // iconfont字体图标本地化，详见：/public/iconfont.js
    scriptUrl: '',
})

export default defineComponent({
    name: 'iconFont',
    props: {
        type: {
            type: String as PropType<string>,
            default: ''
        },
        color: {
            type: String as PropType<string>,
            default: 'unset'
        },
        size: {
            type: [Number, String] as PropType<number | string>,
            default: 14
        },
        scriptUrl: { // 阿里图库字体图标路径
            type: String as PropType<string>,
            default: ''
        }
    },
    setup(props, {attrs}) {

        // 如果外部传进来字体图标路径，则覆盖默认的
        if (props.scriptUrl) {
            MyIconFont = createFromIconfontCN({
                scriptUrl: props.scriptUrl,
            })
        }


        return () => (
            <MyIconFont type={props.type || ''} {...attrs} />
        )
    }
})
