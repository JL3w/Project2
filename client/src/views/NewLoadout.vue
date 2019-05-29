<template>
    <div class="container" id="newLoadout">
        <div class="add-item">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name of Item</label>
                    <input type="item" class="form-control" id="exampleFormControlInput1" placeholder="Item Name">
                </div>
                <div class="form-group">
                    <label class="custom-file-label" for="customFile">Choose file</label>
                    <input type="file" class="form-control" id="customFile">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <br>
            <br>
            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary btn-lg btn-block" id="submit"><i class="fa fa-check-circle" aria-hidden="true"></i>Submit</button>
        </div>
    </div>
</template>

<script>
import AddItem from '@/components/AddItem';
import AddDescription from '@/components/AddDescription';

export default {
    name: "NewLoadout"
}
</script>

<style scoped>
    
</style>