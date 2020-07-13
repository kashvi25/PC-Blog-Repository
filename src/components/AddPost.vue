<template>
    <div class="add-post">
        <h2>Add New Blog Post:</h2>
        <form @submit.prevent="AddPost">
            <div class="add-post container">
                <div class="field subject">
                    <label for="subject">Blog Post Subject:</label>
                    <input type="text" name="subject" v-model="subject">
                </div>
                <div class="field author">
                    <label for="author">Blog Post Author:</label>
                    <input type="text" name="author">
                </div>
                <div class="field date">
                    <label for="date">Date of Post:</label>
                    <br/>
                    <label class="grey-text">EX. November 11, 2011</label>
                    <input type="text" name="date" >
                </div>
                <div class="field time">
                    <label for="time">Time of Post:</label>
                    <br/>
                    <label class="grey-text">EX. 11:00 AM</label>
                    <input type="text" name="time" >
                </div>
                <div class="field message">
                    <label for="message">Blog Post Message:</label>
                    <input type="text" name="message">
                </div>
            </div>
            <br/>
        <div class="field center-align">
            <button class="v-btn x-large">Post</button>
        </div>
        <br/>
        <br/>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddPost',
    data(){
        return{
            subject: null,
        }
    },
    methods: {
        AddPost(){
            console.log(this.subject)
        }
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
.btn {
  top: 10px;
  /* bottom: 30px; */
  text-align: center;
  background-color: #8FC586;
  font-family: Raleway;
}
button {
    background-color: #8FC586;
}
label {
    font-size: 16px;
    font-family: Raleway;
    color: rgba(79, 79, 79, 0.86);
}
/* .grey-text{
    font-size: 14px;
}
.add-post {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-post .field{
    margin: 20px auto;
    text-align: left;
} */
.container {
  width: 500px;
  background: #C2C2C2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 80px;
  right: 80px;
  top: 200px;
  bottom: 50px;
  padding-right:30px;
  padding-left:30px;
  padding-top:30px;
  padding-bottom:30px;
}
</style>
