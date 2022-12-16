const Panels = {
  basics: {
    title: '基础类',
    children: [
      {
        title: '单行文本',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/search-icon.png',
        data: {
          type: 'input',
          name: '单行文本',
          model: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            dataType: 'string',
            placeholder: '',
            disabled: false,
            maxlength: -1,
            showWordLimit: false
          },

          rules: []
        }
      },
      {
        title: '多行文本',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/notice-icon.png',
        data: {
          type: 'textarea',
          name: '多行文本',
          model: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            placeholder: '',
            disabled: false,
            maxlength: -1,
            showWordLimit: false,
            autosize: {
              minRows: 2,
              maxRows: 4
            }
          },

          rules: []
        }
      },
      {
        title: '单选框组',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/title-icon.png',
        data: {
          type: 'radio',
          name: '单选框组',
          model: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            inline: true,
            remote: false,
            // remoteFunc: '',
            options: [
              // 未走远程请求的下拉数据
              { value: '1', label: 'Option1' },
              { value: '2', label: 'Option2' },
              { value: '3', label: 'Option3' }
            ]
          },
          rules: []
        }
      },
      {
        title: '多选框组',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/banner-icon.png',
        data: {
          type: 'checkbox',
          name: '多选框组',
          model: '',
          options: {
            width: '100%',
            defaultValue: [],
            required: false,
            disabled: false,
            inline: true,
            remote: false,
            // remoteFunc: '',
            options: [
              // 未走远程请求的下拉数据
              { value: '1', label: 'Option1' },
              { value: '2', label: 'Option2' },
              { value: '3', label: 'Option3' }
            ]
          },

          rules: []
        }
      },
      {
        title: '下拉选择框',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/navigation-icon.png',
        data: {
          type: 'select',
          name: '下拉选择框',
          model: '',
          options: {
            width: '100%',
            defaultValue: '',
            placeholder: '',
            required: false,
            disabled: false,
            multiple: false,
            filterable: false,
            remote: false,
            options: [
              // 未走远程请求的下拉数据
              { value: '1', label: 'Option1' },
              { value: '2', label: 'Option2' },
              { value: '3', label: 'Option3' }
            ]
          },

          rules: []
        }
      },
      {
        title: '级联选择器',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/rubik-icon.png',
        data: {
          type: 'cascader',
          name: '级联选择器',
          model: '',
          options: {
            width: '100%',
            defaultValue: [],
            placeholder: '',
            required: false,
            disabled: false,
            multiple: false,
            remoteFunc:'',
            remoteOptions: [
              
            ],
            protoProps:{ multiple: false,value: 'value', label: 'label' }
          },

          rules: []
        }
      },
      {
        type: 'video',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/video-icon.png',
        title: '视频',
        content: {
          video: {},
          cover: '',
          autoplay: false,
          loop: true,
          source: 0,
          address: ''
        },
        //外观
        facade: {}
      },
      {
        type: 'tabs',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/tabs-icon.png',
        title: '选项卡',
        content: {
          data: [
            {
              title: '名称',
              type: 1,
              goods: [],
              group: {}
            }
          ],
          is_title: true,
          is_price: true,
          is_button: true
        },
        //外观
        facade: {
          list_style: 2, //列表样式
          card_style: 1, //卡片样式
          chamfer_style: 0, //倒角样式
          margin: 10, //商品间距
          padding: 10, //左右边距
          backgroundColor: '#F5F5F5'
        }
      }
    ]
  },
  layout: {
    title: '布局字段',
    children: [
      {
        title: '栅格布局',
        type: 'goods',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/goods-icon.png',
        data: {
          type: 'grid',
          name: '栅格布局',
          columns: [
            {
              span: 12,
              list: []
            },
            {
              span: 12,
              list: []
            }
          ],
          options: { gutter: 0, justify: 'start', align: 'top' },
          model: '',
          rules: []
        }
      }
    ]
  }
  // marketing: {
  //   title: '营销类',
  //   children: [
  //     {
  //       type: 'coupon',
  //       icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/coupon-icon.png',
  //       title: '优惠券',
  //       content: {
  //         style: 1,
  //         switch: 1,
  //         autoplay: 0,
  //         number: '',
  //         data: []
  //       },
  //       //外观
  //       facade: {
  //         list_style: 1,
  //         backgroundColor: '#fff5e1',
  //         title_color: '#ff830b'
  //       }
  //     },
  //     {
  //       type: 'task',
  //       icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/task-icon.png',
  //       title: '任务中心',
  //       content: {
  //         task: {},
  //         icon: '',
  //         title: '去攒积分',
  //         type: 1, //商品类型
  //         goods: [], //选定商品按钮
  //         auto: 20, //是否自动获取
  //         is_title: true,
  //         is_price: true,
  //         is_button: true
  //       },
  //       facade: {
  //         title_background: '#ffb525', //标题背景色
  //         title_color: '#ffffff', //标题文字颜色
  //         content_background: '#ffffff', //内容背景颜色
  //         content_color: '#666666', //内容文字颜色
  //         button_background: '#ffb525', //按钮背景
  //         button_color: '#ffffff', //按钮颜色
  //         list_style: 3, //列表样式
  //         card_style: 1, //卡片样式
  //         chamfer_style: 0, //倒角样式
  //         margin: 12, //商品间距
  //         padding: 12 //左右边距
  //       }
  //     },
  //     {
  //       type: 'wechatLive',
  //       icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-live-icon.png',
  //       title: '微信直播',
  //       content: {
  //         number: 1,
  //         isShowGoods: true,
  //         more: {
  //           isShow: true,
  //           text: '更多直播',
  //           color: '#999999'
  //         }
  //       },
  //       facade: {
  //         list_style: 1,
  //         backgroundColor: '#f5f5f5',
  //         title_color: '#ff830b',
  //         cardSpacing: 12,
  //         leftRightMargins: 12
  //       }
  //     }
  //   ]
  // },
  // sales: {
  //   title: '辅助类',
  //   children: [
  //     {
  //       title: '辅助空白',
  //       type: 'blank',
  //       icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/blank-icon.png',

  //       content: {},
  //       //外观
  //       data: {
  //         height: 10,
  //         backgroundColor: '#FFFFFF'
  //       }
  //     },
  //     {
  //       type: 'separate',
  //       icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/separate-icon.png',
  //       title: '辅助线',
  //       content: {
  //         style: 'solid'
  //       },
  //       //外观
  //       facade: {
  //         margin: 10,
  //         fill_color: '#bebebe'
  //       }
  //     }
  //   ]
  // },
  // other: {
  //   title: '其他',
  //   children: [
  //     {
  //       type: 'wechat',
  //       icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-icon.png',
  //       title: '微信公众号',
  //       content: {},
  //       //外观
  //       facade: {
  //         line_style: '',
  //         line_color: '',
  //         high_style: 20
  //       }
  //     }
  //   ]
  // }
}

export default Panels
