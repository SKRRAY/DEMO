<template>
    <div>
        <el-row :gutter="2">
            <el-col :span="6">
                <div>
                    <span>满足条件</span>
                </div>
            </el-col>
            <el-col :span="18">
                <el-row>
                    <el-col>
                        <el-card v-for="item in cardOptions" :key="item.id" class="contentCard">
                            <el-form label-width="60px" label-position="left">
                                <el-form-item label="如果" label-width="50px">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :span="7">
                                            <el-select v-model="item.option1"></el-select>
                                        </el-col>
                                        <el-col :span="7">
                                            <el-select v-model="item.option2"></el-select>
                                        </el-col>
                                        <el-col :span="7">
                                            <el-select v-model="item.option3"></el-select>
                                        </el-col>
                                    </el-row>
                                </el-form-item>
                                <el-form-item label="内容" label-width="50px">
                                    <el-select v-model="item.content"></el-select>
                                </el-form-item>
                                <el-form-item v-show="item.content === '用户角色'" label-width="50px">
                                  <el-cascader :options="userRolesOptions" :props="{ multiple: true }"  clearable></el-cascader>
                                </el-form-item>
                                <el-form-item v-show="item.content === '后台用户'" label-width="50px">
                                    <div class="addBackgroundUser">
                                        <el-button type="text" @click="addBackgroundUser">+添加后台用户</el-button>
                                    </div>
                                    <el-dialog :visible.sync="isViewDialog" center :model="false" width="40%">
                                        <div slot="title" class="dialogTitle">
                                            <h3>批量输入邮箱</h3>
                                        </div>
                                        <div>
                                            <el-input v-model="item.content" type="textarea" :autosize="{ minRows: 5 }"></el-input>
                                            <span>*可批量输入邮箱，用分号";"分隔</span>
                                            
                                        </div>
                                        <div slot="footer" class="addBatchMail">
                                            <el-button @click="() => { isViewDialog = false }">取消</el-button>
                                            <el-button type="success">批量添加</el-button>
                                        </div>
                                    </el-dialog>
                                </el-form-item>
                                <div class="addOpposite">
                                    <el-button type="text">+并且</el-button>
                                </div>
                            </el-form>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button class="addContent" @click="addContentCard">添加条件</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default({
    name: 'TriggerUser',
    data () {
        return {
            // 控制添加后台用户弹窗
            isViewDialog: false,
            // 满足条件选项
            cardOptions: [
                {
                    option1: "用户信息",
                    option2: "处理人",
                    option3: "是",
                    content: "当前操作人"
                }
            ],
            // 用户角色级联选项
            userRolesOptions: [{
              value: '客服中心',
              label: '客服中心',
              children: [{
                value: '一线客服',
                label: '一线客服',
                children: [{
                  value: '大陆-爱奇艺-会员',
                  label: '大陆-爱奇艺-会员'
                }, {
                  value: '大陆-奇异果-会员',
                  label: '大陆-奇异果-会员'
                }]
              }, {
                value: '二线客服',
                label: '二线客服',
                children: [{
                  value: '二线客服1',
                  label: '二线客服1'
                }, {
                  value: '二线客服2',
                  label: '二线客服2'
                }]
              }]
            }, {
              value: '会员业务',
              label: '会员业务',
              children: [{
                value: '会员业务1',
                label: '会员业务1'
              }, {
                value: '会员业务2',
                label: '会员业务2'
              }, {
                value: '会员业务3',
                label: '会员业务3'
              }]
        }]
        }
    },
    methods: {
        // 添加条件操作
        addContentCard () {
            let option = {
                option1: "用户信息",
                option2: "处理人",
                option3: "是",
                content: this.cardOptions.length < 2 ? "后台用户" : "用户角色"
            }
            this.cardOptions.push(option);
        },
        // 添加后台用户
        addBackgroundUser () {
            this.isViewDialog = true;
        }
    },
    computed: {

    }
})
</script>

<style scoped>
.contentCard {
    background-color: #F2F2F2;
    margin-bottom: 20px
}
.addContent {
    width: 100%;
    border: 1px solid #62A0FF;
    color: #62A0FF;
}
.addOpposite {
    text-align: left;
}
.addOpposite .el-button {
  font-size: 18px;
}
.addBackgroundUser {
    text-align: left;
    width: 100%;
}
.dialogTitle {
    text-align: left;
}
.addBatchMail {
    text-align: right;
}
.el-select {
    width: 100%;
}
.el-cascader {
  width: 100%
}
</style>