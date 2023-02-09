<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <router-link :to="{name: 'home'}" class="navbar-brand">Boolpress</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'postIndex'}" class="nav-link active" aria-current="page">Posts</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'about'}" class="nav-link active" aria-current="page">About us</router-link>
                        </li>
                    </ul>
                    <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
