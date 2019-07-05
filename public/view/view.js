$(function(){
  let input=$('#inputid');
  let submit=$('#submit');
  let div=$('#show');
  submit.click(function(){
        let info=input.val();
        $.get(
            "/public/view/id",
            {id:info,},
            function(data)
            {
                div.empty();
                div.append("<b>"+"<h3>HELLO "+data+"</h3></b>")
            }
        )
        })
  })  
