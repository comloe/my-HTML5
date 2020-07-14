<template>
  <div>
    <mt-checklist title="爱好" :options="['篮球','游戏','跑步']" v-model="loves"></mt-checklist>
    <mt-checklist title="技术列表" :options="[{label:'HTML5',value:'1'},{label:'CSS3',value:'2'},{label:'JS',value:'3'},{label:'VUE',value:'4'}]" v-model="lists"></mt-checklist>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loves: [],
      lists:[2,3]
    };
  }
};
</script>