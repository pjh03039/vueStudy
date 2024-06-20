<template>
  <div>
    <div>1. vue 데이터 바인딩 예제</div>
    {{ name }}
    <hr>

    <div>2. vue v-on 예제</div>
    <div>{{ clickData }}</div>
    <button v-on:click="chageText">cilck me</button>
    <!-- <button @click="chageText">cilck me</button> v-on => 축약형 @ --> 
    <hr>

    <div>3. vue v-model 예제</div>
    <input type="text" v-model="modelData">
    <div>v-model text 예제 : {{ modelData }}</div>
    <hr>

    <div>4. vue v-bind 예제</div>
    <div v-bind:class="{ classTest : vBindCilckFlag }">class 테스트</div>
    <!-- <div :class="{ classTest : vBindCilckFlag }">class 테스트</div> v-bind => 축약형 : -->
    <button v-on:click="changeClass">cilck me</button>
    <hr>

    <div>5. vue v-if 예제</div>
    <div v-if="showHide">if</div>
    <div v-else-if="!showHide">else if</div>
    <button @click="changeIf">click me</button>
    <hr>

    <div>6. vue v-for 예제</div>
    <ul>
      <li v-for="user in userList" :key="user.id">
        <div>postId : {{  user.postid }}</div>
        <div>id : {{ user.id }}</div>
        <div>name : {{ user.name }}</div>
        <div>email : {{ user.email }}</div>
        <div>body : {{ user.body }}</div>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
    created() {
        this.userList = [
            {
                postid: 1,
                id: 1,
                name: "Leanne Graham",
                email: "leanne@example.com",
                body: "This is a test body 1"
            },
            {
                postid: 2,
                id: 2,
                name: "Ervin Howell",
                email: "ervin@example.com",
                body: "This is a test body 2"
            },
            {
                postid: 3,
                id: 3,
                name: "Clementine Bauch",
                email: "clementine@example.com",
                body: "This is a test body 3"
            }
        ];
    },
    data () {
        return {
            name : "데이터 이름 바인딩",
            clickData : true,
            modelData : "",
            vBindCilckFlag : false,
            showHide : false,
            userList : [],
            number1 : 0,
            number2 : 0,
            sumNumber : 1,
        }
    },
    methods: {
      chageText() {
        this.clickData = !this.clickData;
      },
      changeIf() {
        this.showHide = !this.showHide;
      },
      changeClass() {
        this.vBindCilckFlag = !this.vBindCilckFlag;
      },
      changeSum1() {
        console.log(`methods this.number2 ${this.nubmer1}`);
        return this.number1;
      }
    },
    computed: {
      changeSum2() {
        console.log(`computed this.number2 ${this.number2}`);
        return this.nunmber2;
      }
    }
}
</script>

<style>

</style>