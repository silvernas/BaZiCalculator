<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue'
import {ElDatePicker,ElConfigProvider,ElTimeSelect} from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {calLunar} from './../caldate.ts'
const date = ref(new Date())
const time = ref('00:00')
let  result = reactive({
  year:'',
  month:'',
  day:'',
  hour:'',
})

const test = ()=>{
  let year = date.value.getFullYear();
  let month = date.value.getMonth()+1;
  let day = date.value.getDate();
  let hour = parseInt(time.value.substring(0,2));

  let res = calLunar(year,month,day,hour)
  result.year = res.year;
  result.month = res.month;
  result.day = res.day;
  result.hour = res.hour;
}
onMounted(() => {
  test()
  // 在这里可以执行其他需要DOM的操作
});
defineProps<{ msg: string }>()


</script>

<template>
  <h1>{{msg}}</h1>
  <el-config-provider :locale="zhCn" size="large">
    <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择一个日期"
        @change="test"
    /> &nbsp;
    <el-time-select
        v-model="time"
        @change="test"
        style="width: 240px"
        start="00:00"
        step="01:00"
        end="23:00"
        placeholder="选择一个时间"
    />
  </el-config-provider>



  <div class="card">
    <p style="color: #9d5206;font-weight: bolder">
      <strong>阳历时间：</strong> {{date.getFullYear()}} 年 {{date.getMonth()+1}} 月 {{date.getDate()}}日  {{time.substring(0,2)}}时
    </p>
  </div>
  <div class="card">
    <p style="color: #0a8d0c;font-weight: bolder">
      <strong>阴历时间：</strong> {{result.year}}年 , {{result.month}}月,  {{result.day}}日,  {{result.hour}}时
    </p>
  </div>

  <p>
    <a href="#">干支纪年法</a>是中国古代使用天干地支组合起来表示年份的一种方法
  </p>

  <p class="read-the-docs">雍州·景山·河阳 </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  font-family: "Microsoft YaHei",sans-serif;
  font-size: 1.6em;
}
</style>
