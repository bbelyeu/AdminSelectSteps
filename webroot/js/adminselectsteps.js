$(document).ready(function() {
    /**
     * Event listener for form steps
     * Use these ids starting with "step-" when cakephp can't load all the data
     * for select boxes on page load b/c the data set is too large. Also if you
     * want a form to be filled out sequentially this works well. 
     * It also uses a custom model & field attributes to load what should be in
     * the <options> tags.
     */
    $("[id*=step-]").on('change', function(event) {
        event.preventDefault();
        var id = $(this).attr("id");
        var value = $("#" + id + " select").val();
        var next_step = parseInt(id.replace("step-","")) + 1;
        var model = $("#step-" + next_step + " select").attr("model");
        var field =  $("#step-" + next_step + " select").attr("field");
        // first retrieve data for next step
        $.get("/admin/admin_select_steps/options/index/"+model+"/"+field+"/"+value, function(data) {
            $("#step-" + next_step + " select").html(data);
        });
        // then show the next step
        $("#step-" + next_step).fadeIn().delay(1000);
    });
});
