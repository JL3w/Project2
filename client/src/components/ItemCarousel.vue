<template>
    <div class="container" id="itemCarousel">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
             <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="https://placehold.it/1200x400?text=IMAGE" alt="Image">
                    <div class="carousel-caption">
                        <h3>Sell $</h3>
                        <p>Holder 1</p>
                    </div>      
                </div>
                <div class="item">
                    <img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image">
                    <div class="carousel-caption">
                        <h3>More Sell $</h3>
                        <p>Holder 2</p>
                    </div>      
                </div>
                <div class="item">
                    <img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image">
                    <div class="carousel-caption">
                        <h3>More Sell $</h3>
                        <p>Holder 3</p>
                    </div>      
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemCarousel"
}
</script>

<style scoped>
    
</style>