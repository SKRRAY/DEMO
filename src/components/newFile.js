/* __placeholder__ */
export default ((await import('vue')).defineComponent({
name: 'TriggerUser',
data() {
return {
// 满足条件选项
cardOptions: [
{
option1: "用户信息",
option2: "处理人",
option3: "是",
content: "当前操作人"
}
]
};
},
methods: {
addContentCard() {
if (this.cardOptions.length <= 2) {
let option = {
option1: "用户信息",
option2: "处理人",
option3: "是",
content: "后台用户"
};
this.cardOptions.push(option);
}
}
}
}));
