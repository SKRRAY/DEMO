<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-row v-for="(item, index) in cardOptions" :key="index">
          <el-col :span="22">
            <el-row v-show="!item.isFirstCard">
              <el-col :span="22">
                <div class="otherCondition" v-show="!item.isFirstCard">
                  <b>或者</b>
                </div>
              </el-col>
            </el-row>
            <el-row class="contentArea">
              <el-col :span="23">
                <el-card class="contentCard">
                  <el-form label-width="60px" label-position="left">
                    <div v-for="(row, index) in item.parallelCondition" :key="index">
                      <el-row v-show="!row.isFirstCard">
                        <el-col>
                          <div class="parallelCondition">
                            <b>并且</b>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col>
                          <el-form-item label="如果" label-width="50px"> 
                            <el-row type="flex" justify="space-between">
                              <el-col :span="9">
                                <el-select v-model="row.option1">
                                  <el-option-group v-for="group in fieldOptions" :key="group.label" :label="group.label">
                                    <el-option
                                      v-for="item in group.options"
                                      :key="item.value"
                                      :label="group.label + '：' + item.value"
                                      :value="item.value">
                                    </el-option>
                                  </el-option-group>
                                </el-select>
                              </el-col>
                              <el-col :span="6">
                                <el-select v-model="row.option2"></el-select>
                              </el-col>
                              <el-col :span="6">
                                <el-select v-model="row.option3"></el-select>
                              </el-col>
                              <el-col :span="1" >
                                <el-button v-show="!row.isFirstCard" circle icon="el-icon-minus" @click="deleteParallelCondition(item.parallelCondition,index)" size="small"></el-button>
                              </el-col>
                            </el-row>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="addParallel">
                      <el-button type="text" @click="addCondition(item.parallelCondition)">+并且</el-button>
                    </div>
                  </el-form>
                </el-card>
              </el-col>
              <el-col class="deleteOtherCondition" :span="1" v-show="!item.isFirstCard">
                <div class="deleteCardbutton">
                  <el-button circle icon="el-icon-minus" @click="deleteCurrentCondition(index)"></el-button>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="21">
            <el-button class="addContent" @click="addContentCard">添加条件</el-button>
          </el-col>
        </el-row>             
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default({
  name: 'NewTriggerField',
  data () {
    return {
      /*
      命名字典
      parallelCondition: 并列条件
      otherCondition：或者条件
      */
      // 系统字段选项
      fieldOptions: [{
        label: '系统字段',
        options: [{
          value: '工单来源',
          label: '工单来源'
        }, {
          value: '....',
          label: '....'
        }]
      }, {
        label: '工单字段',
        options: [{
          value: '工单分类',
          label: '工单分类'
        }, {
          value: '....',
          label: '....',
        }]}, {
        label: '用户信息',
        options: [{
          value: '创建人',
          label: '创建人'
        }, {
          value: '处理人',
          label: '处理人',
        }]}, {
        label: '服务时间',
        options: [{
          value: '工单创建后时间',
          label: '工单创建后时间'
        }, {
          value: '处理人操作时间',
          label: '处理人操作时间',
        }]
      }],
      // ||条件卡片
      cardOptions: [
        {
          option1: "系统字段",
          option2: "工单来源",
          option3: "是",
          parallelCondition: [{
            option1: "系统字段",
            option2: "工单来源",
            option3: "是",
            parallelCondition: [{}],
            isFirstCard: true
          }],
          isFirstCard: true
        }
      ]
    }
  },
  methods: {
    // 添加或者条件
    addContentCard () {
      let option = {
        option1: "系统字段",
        option2: "工单来源",
        option3: "是",
        parallelCondition: [{
          option1: "系统字段",
          option2: "工单来源",
          option3: "是",
          parallelCondition: [{}],
          isFirstCard: true
        }],
        isFirstCard: false
      }
      this.cardOptions.push(option);
    },
    // 添加并且条件
    addCondition (row) {
      row.push(
        {
          option1: "系统字段",
          option2: "工单来源",
          option3: "是",
          isFirstCard: false
        }
      );
      console.log(row);
    },
    // 删除并且条件
    deleteParallelCondition (row, index) {
      row.splice(index, 1);
    },
    // 删除或者条件
    deleteCurrentCondition (index) {
      this.cardOptions.splice(index, 1);
    }
  }
})
</script>

<style scoped>
.contentArea {
  display: flex;
}
.contentCard {
  background-color: #F2F2F2;
  margin-bottom: 20px
}
.addContent {
  width: 100%;
  border: 1px solid #62A0FF;
  color: #62A0FF;
}
.addParallel {
  text-align: left;
}
.addParallel .el-button {
  font-size: 18px;
}
.otherCondition {
  margin-bottom: 20px;
}
.parallelCondition {
  margin-bottom: 20px;
}
.deleteOtherCondition {
  display: flex;
  align-items: center;
  justify-content: center;
}
.deleteCardbutton {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-select {
  width: 100%;
}
</style>