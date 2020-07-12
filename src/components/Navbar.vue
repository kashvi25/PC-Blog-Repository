<template>
    <div class="navbar">
        <nav class="nav-extended">
            <img src="../assets/CompanyLogo.png"/>
                <svg width="270" height="33">
                    <rect width="413" height="54" style="fill:rgb(196,196,196)" />
                </svg>
            <i class="material-icons">search</i>
            <svg class="dot"></svg>
            <div class="triangle-with-shadow"></div>
        </nav>    
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>

nav.nav-extended {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #4F4F4F;
    height: 4em;
}
img {
    position: absolute;
    left: 60px;
    top: 10px;
    object-fit: cover;
    height: 40px;
}
svg {
    position: absolute;
    left: 151px;
    top: 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
}
nav i.material-icons {
    position: relative;
    left: 430px;
    top: 2px;
    font-size: 2.4em;
}
.dot {
    position: absolute;
    left: 79.9%;
    right: 11.86%;
    top: 11%;
    bottom: 91.79%;
    width: 44px;
    height: 44px;
    background-color: #84CCE3;    
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
}

.triangle-with-shadow {
    width: 88px;
    height: 88px;
    position: absolute;
    left: 85.5%;
    right: 7.25%;
    top: 35%;
    bottom: 93.16%;
    overflow: hidden;
    box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5);
    transform: rotate(180deg);
}
.triangle-with-shadow:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: #FFFFFF;
    transform: rotate(45deg);
    top: 75px;
    left: 25px;
    box-shadow: -1px -1px 10px -2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
</style>