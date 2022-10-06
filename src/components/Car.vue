
<template>
    <div class="car">
        <ul>
            <h3 style="text-align:center;">购物车</h3>
            <input type="checkbox" @click="f_selectAll()" :checked="checkedAll" class="checkall">全选
            <div style="display:flex;background-color:skyblue;padding-left:20px">
                    <p style="margin-left:40px">名字</p>
                    <p style="margin-left:85px">数量</p>
                    <p style="margin-left:95px">价格</p>
                    <p style="margin-left:20px">操作</p>
            </div>

            <li v-for="(item,index) in goods" :key="index" >
                <input type="checkbox" @click="f_select(item)" :checked="item.choose">
                <div style="background-color:red">
                    <p>{{item.name}}</p>
                    <p @click="f_add(item)">+</p>
                    <p>{{item.count}}</p>
                    <p @click="f_minus(item)">-</p>
                    <p>{{item.price}}元</p>
                </div>
                <el-button class="del" @click="f_delect(item,index)" type="primary">删除</el-button>
            </li>
            <p style="background-color:aqua;height:70px;padding-left:160px">总价：{{totalprice}}元</p>
        </ul>
   </div>
</template>


<script>
    export default{
        name:"Car",
        data(){
            return{
                totalprice:0,
                checkedAll:false,
                goods:[
                    {
                        name:'苹果',
                        price:1,
                        count:1,
                        choose:false
                    },
                    {
                        name:'梨',
                        price:5,
                        count:1,
                        choose:false
                    },
                    {
                        name:'香蕉',
                        price:20,
                        count:1,
                        choose:false
                    },
                    {
                        name:'西瓜',
                        price:10,
                        count:1,
                        choose:false
                    },
                    {
                        name:'橘子',
                        price:2,
                        count:1,
                        choose:false
                    }
                ]
            }
        },
        methods:{
            //全选
            f_selectAll(){
                this.checkedAll=!this.checkedAll
                if(this.checkedAll){
                    this.totalprice=0  //全选之前把totalprice设置为空
                    this.goods.forEach(item => {
                        item.choose=true
                        this.totalprice+=item.price*item.count//计算全部商品合计价格
                    });
                }else{
                    this.goods.forEach(item => {
                        item.choose=false
                    });
                    this.totalprice=0//取消全选后要把购物车总数据清空
                }
            },

            //选中
            f_select(item){
                item.choose=!item.choose
                if(item.choose){
                    this.totalprice+=item.price*item.count
                }else{
                    this.totalprice-=item.price*item.count
                }
                //判断全选
                this.checkedAll=this.goods.every(item => item.choose)//!!!!!!!!加上这个判断，当我每个商品都选中时，全选按钮就会自动打钩
            },

            //数量增加
            f_add(item){
                item.count+=1
                if(item.choose){//判断是否选中
                    this.totalprice+=item.price
                }
            },

            //数量减少
            f_minus(item){
                if(item.count==1){
                    alert('数量不能小于1')
                    return false
                }
                item.count-=1
                if(item.choose){//判断是否选中
                    this.totalprice-=item.price
                }
            },

            //删除
            f_delect(item,index){
                if(item.choose){
                    item.choose=false
                    this.totalprice-=item.price*item.count
                }
                this.goods.splice(index,1)//直接删掉一行商品数据
            },
        }
    }
</script>


<style lang="scss" scoped>
    .car{
      height: 100vh;
        ul{
            background-color: #fff;
            border: 4px solid red;
            padding: 20px;
            width: 50%;
            margin: 0 auto;
        }
        li{
            border: 3px solid skyblue;
            display: flex;
            padding: 10px 0;
            div{
                margin-left: 20px;
                display: flex;
                width: 300px;
                cursor: pointer;
                p{
                    width: 50px;
                    margin-left: 20px;
                    
                }
            }
        }
    }
</style>

