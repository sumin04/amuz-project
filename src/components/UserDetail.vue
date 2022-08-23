<template>
  <div>
    <div v-if="userList === null" class="loader">
        <img width="400" src="http://file3.instiz.net/data/file3/2018/11/22/9/3/0/930875f69ce972ff181426a03cfacfe1.gif" />
        <h4>정보를 불러오는 중입니다.</h4>
    </div>

    <div v-else-if="userList.length < 1" class="loader">
        <h4>
            <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
            유저가 정보가 발견되지 않았습니다.
        </h4>
    </div>

    <div class="card" v-else>
      <h2>사용자 정보</h2>
      <br />
      <p>아이디 : {{userList.id}}</p>
      <p>이름 : {{userList.name}}</p>
      <p>이메일 : {{userList.email}}</p>
    </div>
  </div>
</template>

<script>
  import List from './UserList.vue'

    export default {
      components : List,

      data() {
        return {
            userList : null,
            UserDatai : null,
            userId : this.$route.params.userId
        }
      },

      methods: {
        fetchData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/users/'+this.userId)
            .then(function(response) {
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userList = [];
                }else{
                    self.userList = response.data;
                }
            })
            .catch(function() {
              self.userList = [];
            });
        }
    },

    mounted() {
        this.fetchData();
    },

    }
</script>

<style>
  .line{
    margin-bottom: 30px;
  }
  .card{
    width: 200px;
    background-color: white;
    border: 3px solid lightsteelblue;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 40px auto;
    padding: 45px 30px 80px 25px;
    box-shadow: 4px 4px 4px 4px gray;
    
  }
  .card > p{
    font-size: 17px;
  }
</style>