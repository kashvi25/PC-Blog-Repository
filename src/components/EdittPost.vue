
<template>
    <div v-if="post" class="edit-post container">
        <h2>Edit {{ post.author }}'s {{ post.subject }} Post</h2>
        <form @submit.prevent="EditPost">
                <div class="field subject">
                    <label for="subject">Blog Post Subject:</label>
                    <input type="text" name="subject" v-model="post.subject">
                </div>
                <div class="field author">
                    <label for="author">Blog Post Author:</label>
                    <input type="text" name="author" v-model="post.author">
                </div>
                <div class="field date">
                    <label for="date">Date of Post:</label>
                    <input type="text" name="date" v-model="post.date" >
                </div>
                <div class="field time">
                    <label for="time">Time of Post:</label>
                    <input type="text" name="time" v-model="post.time">
                </div>
                <div class="field message">
                    <label for="message">Blog Post Message:</label>
                    <input type="text" name="message" v-model="post.message">
                </div>
                <br/>
        <div class="field center-align">
            <button class="btn-large depressed">Repost</button>
        </div>
        <br/>
        <br/>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditPost',
     data(){
        return {
            post: null,
    }
  },
  methods: {
      EditPost(){
            if (this.post.subject){
                this.feedback = null
                //create a slug
                this.post.slug = slugify(this.post.subject, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('posts').doc(this.post.id).update({
                    subject: this.post.subject,
                    author: this.post.author, 
                    date: this.post.date,
                    time: this.post.time,
                    message: this.post.message,
                    slug: this.post.slug
                }).then(() => {
                    this.$router.push({ name: 'Blog' })
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = 'You must enter a blog subject.'
            }
        //console.log(this.post.subject, this.post.author, this.post.date, this.post.time, this.post.message)}
      }
  },
  created(){
      let ref = db.collection('posts').where('slug', '==', this.$route.params.post_slug)
      ref.get().then(snapshot => {
          snapshot.forEach(doc => {
              this.post = doc.data()
              this.post.id = doc.id
          })
      })
  }
}

</script>

<style>
.edit-post h2 {
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  color: rgba(79, 79, 79, 0.86);
  font-weight: 800;
}
.btn-large{
  text-align: center;
  background-color: #C4C4C4;
  font-family: 'Raleway', sans-serif;
}
button {
    background-color: #C4C4C4;
}
label {
    font-size: 16px;
    font-weight: 300;
    font-family: 'Raleway', sans-serif;
    color: rgba(79, 79, 79, 0.86);
}
input {
    font-family: 'Raleway', sans-serif;
}
.edit-post{
    padding: 20px;
    max-width: 500px;
}
</style>
