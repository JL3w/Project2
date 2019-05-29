<template>
    <div class="container" id="Header">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                                              
                    </button>
                    <a class="navbar-brand" href="#">Loadout</a>
                </div>
                <div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <form class="navbar-form navbar-left" action="/action_page.php">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                    <div class="input-group-btn">
                                        <button class="btn btn-default" type="submit">
                                            <i class="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-thumbs-up"></span> Sign Up</a></li>  
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>    
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    #logo {
        margin-left: 30px;
    }
    #login-btn {
        margin-right: 30px;
    }
</style>
