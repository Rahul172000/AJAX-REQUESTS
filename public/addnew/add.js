$(function(){
    let name=$("#name");
    let submit=$("#sub");
    let id=$("#id");
    let div=$("#any")
    submit.click(function(){
        $.post(
            '/public/addnew',
            {name:name.val(),id:id.val()},
            function(data){
                div.empty();
                div.append("<b>"+data+"</b>");
            }
        )
    })
})
