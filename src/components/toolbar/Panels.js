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
            width: '',
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
            width: '',
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
            width: '',
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
            width: '',
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
            width: '',
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
        title: '开关',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/video-icon.png',
        data: {
          type: 'switch',
          name: '开关',
          model: '',
          options: {
            width: '',
            defaultValue: '',
            required: false,
            disabled: false
          },
          rules: []
        }
      },
      {
        title: '文字',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/tabs-icon.png',
        data: {
          type: 'text',
          name: '文字',
          model: '',
          options: {
            width: '',
            defaultValue: ''
          }
        }
      },
      {
        title: '滑块',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/video-icon.png',
        data: {
          type: 'slider',
          name: '滑块',
          model: '',
          options: {
            width: '',
            defaultValue: 0,
            min: 0,
            max: 100,
            required: false,
            disabled: false,
            step: 1,
            showInput: false,
            range: false
          },
          rules: []
        }
      }
    ]
  },
  marketing: {
    title: '高级字段',
    // icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/coupon-icon.png',
    children: [
      {
        title: '级联选择器',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/rubik-icon.png',
        data: {
          type: 'cascader',
          name: '级联选择器',
          model: '',
          options: {
            width: '',
            defaultValue: [],
            placeholder: '',
            required: false,
            disabled: false,
            remote: true,
            remoteFunc: '',
            remoteOptions: [],
            props: { multiple: false, value: 'value', label: 'label' }
          },
          rules: []
        }
      },
      {
        title: '时间选择器',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-live-icon.png',
        data: {
          type: 'time',
          name: '时间选择器',
          model: '',
          options: {
            width: '',
            defaultValue: '',
            format: 'HH:mm:ss',
            isRange: false,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            readonly: false,
            editable: false,
            clearable: false,
            arrowControl: false,
            required: false,
            disabled: false
          },
          rules: []
        }
      },
      {
        title: '日期选择器',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/task-icon.png',
        data: {
          type: 'date',
          name: '日期选择器',
          model: '',
          options: {
            type:'date',
            width: '',
            defaultValue: '',
            format: 'yyyy-MM-dd',
            timestamp:false,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            readonly: false,
            editable: false,
            clearable: false,
            required: false,
            disabled: false
          },
          rules: []
        }
      },
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
