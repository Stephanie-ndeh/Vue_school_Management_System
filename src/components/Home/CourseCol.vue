<template>
    <div class="course-col">
        <h3>{{ level }}</h3>
        <p> {{ message }} </p>
    </div>
</template>

<script>
export default {
    name:'CourseCol',
    props:{
        level: String,
        message: String
    }
};
</script>

<style scoped>
.course-col{
    flex-basis: 31%;     /* this ensures the colors dont join together */
    background: #fff3f3;
    border-radius: 10px;
    margin-bottom: 5%;
    padding: 20px 12px;
    box-sizing: border-box;
    transition: 0.5s;
}
 h3 {
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
}
.course-col:hover{
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.2) ;
}

</style>