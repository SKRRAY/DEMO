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
  name: 'TriggerField',
  data () {
      return {
          cardOptions: [
              {
                  option1: "系统字段",
                  option2: "工单来源",
                  option3: "是",
                  content: "呼叫中心"
              }
          ]
      }
  },
  methods: {
      addContentCard () {
          let option = {
              option1: "系统字段",
              option2: "工单来源",
              option3: "是",
              content: "呼叫中心"
          }
          this.cardOptions.push(option);
      }
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
.el-select {
  width: 100%;
}
</style>