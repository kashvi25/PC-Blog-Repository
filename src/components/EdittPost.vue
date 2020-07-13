<template>
    <div v-if="post" class="edit-post container">
        <h2>Edit {{ post.subject }} Post</h2>
        <form @submit.prevent="EdittPost">
            <div class="add-post container">
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
                    <br/>
                    <label class="grey-text">EX. November 11, 2011</label>
                    <input type="text" name="date" v-model="post.date" >
                </div>
                <div class="field time">
                    <label for="time">Time of Post:</label>
                    <br/>
                    <label class="grey-text">EX. 11:00 AM</label>
                    <input type="text" name="time" v-model="post.time">
                </div>
                <div class="field message">
                    <label for="message">Blog Post Message:</label>
                    <input type="text" name="message" v-model="post.message">
                </div>
            </div>
            <br/>
        <div class="field center-align">
            <button class="v-btn x-large">Repost</button>
        </div>
        <br/>
        <br/>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'EdittPost',
     data(){
        return{
            post: null
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

</style>