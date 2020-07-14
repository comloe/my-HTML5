<template>
    <div>
        <mt-header title="个人中心">
            <router-link to="/" slot="left"><mt-button icon="back"></mt-button></router-link>
        </mt-header>
        <mt-cell title="个人资料" isLink to="/profile">
            <img src="../assets/images/profile.png" alt="" slot="icon">
        </mt-cell>
        <mt-cell title="我的文章" isLink>
            <img src="../assets/images/document.png" alt="" slot="icon">
        </mt-cell>
    </div>
</template>