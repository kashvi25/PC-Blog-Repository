<template>
    <div class="blog">
        <h2>PilotCity Blog Posts:</h2>
        <!-- <div id="rectangle"></div> -->
        <div class="blog container">
            <div class="card" v-for="post in posts" :key="post.id">
                <div class="card-content">
                    <h3><br>{{ post.author }}: {{ post.subject }}</h3>
                    <h4>{{ post.date }}<br>{{ post.time }}</h4>
                    <p>{{ post.message }}</p>
                </div>
                <a href="" class="btn-floating halfway-fab">
                  <i class="material-icons">create</i>
                  <!-- //<router-link :to="">
                  </router-link> -->
                </a>
            </div>
        </div>
        <br/>
        <br/>
        <a href="" class="btn-floating btn-large halfway-fab">
          <i class="material-icons">add</i>
          <!-- //<router-link :to="">
          </router-link> -->
        </a>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Blog',
    data(){
        return {
            posts: [
                // { subject: 'Hackathon Announcement', slug: 'hackathon-announcement', author: 'Derick Lee', date: 'July 7, 2020', message: 'A reminder for fellows to come to our Hackathon this Friday!', id: '1'},
                // { subject: 'PilotCity Videoask Announcement', slug: 'pilotcity-videoask-announcement', author: 'Kenny Bo', date: 'July 8, 2020', message: 'Make sure to answer the videoask question by Friday!', id: '2'}
            ]
        }
    },
    methods: {

    },
    created(){
        //fetch data from firestore
        db.collection('posts').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let post = doc.data()
                post.id = doc.id
                this.posts.push(post)
            })
        })    
    }
}
</script>


<style>
h2 {
  font-weight: normal;
  text-align: center;
  font-family: Raleway;
  font-size: 30px;
  color: rgba(79, 79, 79, 0.86);
  font-weight: lighter;
}
h3 {
  font-family: Raleway;
  font-size: 20px;
  color: #83AE8A;
  font-weight: lighter;
}
h4 {
  position: absolute;
  top: 0px;
  bottom: 100px;
  left: 26px;
  font-family: Raleway;
  font-size: 16px;
  color: #84CCE3;
  font-weight: lighter;
}
p {
  text-align: left;
  font-family: Raleway;
  font-style: lighter;
  font-size: 18px;
  font-weight: 50;
  color: #000000;
  font-weight: lighter;
}
.container {
  width: 60%;
  height: 40%;
  background: #C2C2C2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 80px;
  right: 80px;
  top: 200px;
  bottom: 50px;
  padding-right:50px;
  padding-left:50px;
  padding-top:10px;
  padding-bottom:10px;
}
.card {
  position: relative;
}
.btn-floating i {
    background-color: #C4C4C4;
    cursor: pointer;
}
.btn-large {
   position: absolute;
   background-color: #C4C4C4;
   margin-right: 110px;
   margin-bottom: -20px;
   cursor: pointer;
}
.btn {
   position: absolute;
   background-color: #C4C4C4;
   top: 100px;
   cursor: pointer;
}
</style>
