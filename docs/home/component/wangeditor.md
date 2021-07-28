<!--
 * @Description: 
 * @Author: 郜鹏飞
 * @Date: 2021-07-28 09:53:22
 * @LastEditTime: 2021-07-28 10:24:58
-->
# wangEditor

## 演示

<wangEditor-index></wangEditor-index>

::: tip 说明
该组件上传视频和上传图片接口已被注释
:::

## 安装
::: tip 说明
使用前需安装wangeditor, npm install wangeditor --save
:::

组件代码如下

```js
 <template>
  <div>
    <div class="editor" ref="editor"></div>
  </div>
</template>

<script>
import Editor from 'wangeditor';
// import { uploadFile } from '@/http/public';
export default {
  name: 'editor',
  props: ['editContent', 'verifyWord'],
  data() {
    return {
      // serviceUrl: '/api/manager/sysFile/uploadFile',
      serviceUrl:'',
      editor: null,
      editorContent: '',
      editorTxt: '',
      judgeWord: []
    };
  },
  watch: {
    editContent: {
      handler(val) {
        if (val) {
          // 插入内容，如有
          this.$nextTick(() => {
            this.editor.txt.html(val);
          });
        } else {
          this.$nextTick(() => {
            this.editor.txt.html('');
          });
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    // 初始化富文本编辑器
    /* eslint-disable */
    initEditor() {
      let _this = this;
      // 初始化editor
      this.editor = new Editor(this.$refs.editor);
      this.editor.config.zIndex = 1;
      this.editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        // 'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo'
      ];
      // // 限制一次最多上传 3 张图片
      this.editor.config.uploadImgMaxLength = 10;
      // 自定义上传图片
      this.editor.config.customUploadImg = function(resultFiles, insertImgFn) {
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        // 上传图片，返回结果，将图片插入到编辑器中
        let maxSize = 5 * 1024 * 1024;
        if (resultFiles[0].size > maxSize) {
          _this.$message.warning('图片大小限制为5M');
        } else if (resultFiles.length > 10) {
          _this.$message.warning('一次上传最多不超过10张图片');
        } else {
          resultFiles.forEach(e => {
            let params = new FormData();
            params.append('file', e);
            params.append('fileType', '1');
            // uploadFile(params).then(res => {
            //   if (res.data.code === 200) {
            //     insertImgFn(res.data.data[0].fileUrl);
            //   }
            // });
          });
        }
      };
      // 自定义上传视频
      this.editor.config.customUploadVideo = function(
        resultFiles,
        insertVideoFn
      ) {
        // resultFiles 是 input 中选中的文件列表
        // insertVideoFn 是获取视频 url 后，插入到编辑器的方法
        // 上传视频，返回结果，将视频地址插入到编辑器中
        // insertVideoFn(videoUrl);
        resultFiles.forEach(e => {
          let params = new FormData();
          params.append('file', e);
          params.append('fileType', '2');
          // uploadFile(params).then(res => {
          //   // console.log(res);
          //   if (res.data.code === 200) {
          //     insertVideoFn(res.data.data[0].fileUrl);
          //   }
          // });
        });
      };
      // 编辑器变化的时候实时获取内容
      this.editor.config.onchange = (html, text) => {
        // this.editorContent = html;
        // 传入父组件内容
        _this.$emit('input', html);
      };
      // 配置触发 onchange 的时间频率，默认为 200ms
      this.editor.config.onchangeTimeout = 1000; // 修改为 500ms
      // 构建富文本编辑器
      this.editor.create();
    }
  },
  // 销毁editor内容
  beforeDestroy() {
    this.editor.txt.clear();
    this.editor = null;
  }
};
</script>

<style scoped>
.editor {
  text-align: left;
  -webkit-user-select: text;
}
</style>

```