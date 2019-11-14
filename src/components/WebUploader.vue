<template>
    <!-- 文件上传组件 -->
    <!-- 
    属性:  
    -------file-num-limit 上传文件个数限制
    -------file-single-size-limit 限制单个文件大小
    -------upload-button 指定用于上传文件的button
   -->
    <div class="web-uploader">
        <!-- file-picker触发上传事件的DOM -->
        <div id="file-picker">
            <i class="iconfont">&#xe61e;</i>
        </div>
        <div class="uploader-desc">
            点击添加图片
            <br>
            不超过2M
        </div>

    </div>
</template>

<script>
    import $ from "jquery"
    import WebUploader from 'webuploader'

    export default {
        name: 'WebUploader',
        props: {
            //限制单个文件大小 2048000/1024000 2M
            fileSingleSizeLimit: {
                type: Number,
                default: 2048000
            },
            //上传文件个数限制
            fileNumLimit: {
                type: Number,
                default: 9
            },
            uploadButton: {
                type: String,
                default: "#file-picker"
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                uploader: null,//uploader对象
            }
        },
        methods: {
            // 初始化对象
            initUploader() {

                this.uploader = WebUploader.create({
                    auto: true, // 选完文件后，是否自动上传 
                    swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf', // swf文件路径 
                    server: 'http://localhost:8888/upload', // 文件接收服务端 
                    pick: {
                        id: this.uploadButton,     // 选择文件的按钮
                        multiple: this.multiple,   // 是否多文件上传 默认false
                        label: '',
                    },
                    fileSingleSizeLimit: this.fileSingleSizeLimit,//限制单个文件大小
                    fileNumLimit: this.fileNumLimit,//上传文件个数限制
                    // 允许选择文件格式
                    accept: {
                        title: 'Images',
                        extensions: 'gif,jpg,jpeg,bmp,png',
                        mimeTypes: 'image/*'
                    }
                })


                this.uploader.on('error', (type) => {
                    let errorMessage = ""
                    if (type === 'F_EXCEED_SIZE') {
                        errorMessage = `文件大小不能超过${this.fileSingleSizeLimit / (1024 * 1000)}M`;
                    } else if (type === 'Q_EXCEED_NUM_LIMIT') {
                        errorMessage = `文件上传最多为${this.fileNumLimit}个`;
                    } else {
                        errorMessage = `上传出错！请检查后重新上传！错误代码${type}`
                    }
                    this.$message({
                        type: "error",
                        message: errorMessage
                    })

                });

            }
        },
        mounted() {

            this.initUploader();

            //上传成功时触发
            this.uploader.on('uploadSuccess', (file, response) => {

                // 子组件通过emitEvent事件将值返回给父组件
                // -----------返回上传成功的图片地址------------
                this.$emit("file-list", response.upload_file)

                console.log(file.id + "传输成功");
            });
        },
    }

</script>


<!-- 该组件不添加scoped -->
<style>
    .webuploader-container {
        position: relative;
        width: 122px;
        height: 122px;
        border: 2px dashed #ccc;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-radius: 4px;
    }
    .web-uploader{
        position: relative;
        text-align: center;
        height: 126px;
    }
    .web-uploader .uploader-desc {
        font-size: 12px;
        width: 122px;
        color: #999;
        position: absolute;
        bottom: 20px;
    }

    .webuploader-element-invisible {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px);
        /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);

    }

    /* 触发上传事件的picker */
    .webuploader-pick {
        position: relative;
        display: inline-block;
        cursor: pointer;
        background: #ff6fa2;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        color: #fff;
        text-align: center;
        overflow: hidden;
        top: 30px;
    }

    .webuploader-pick-disable {
        opacity: 0.6;
        pointer-events: none;
    }
</style>