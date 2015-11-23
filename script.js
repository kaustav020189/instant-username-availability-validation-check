$(document).ready(function(){
    var value,thiss,flag=0;
    $('.textinput').keyup(function(){
       thiss = $(this);
       value= thiss.val();
       //alert(thiss.attr('id'));
       if(thiss.attr('id')==='username'){
           if(value!==''){               
               $.get(
                    "check.php",
                    {value:value},
                    function(data){
                     if(data.flag==='1'){
                         //alert('user exists');
                         thiss.parent('td').siblings('td').children('img').attr('src','img/fail.png').show();
                         thiss.addClass('redColor');
                         flag=0;
                     }
                     else{
                         thiss.parent('td').siblings('td').children('img').attr('src','img/pass.png').show();
                         thiss.removeClass('redColor');
                         flag=1;
                     }
                 },
                 "json");
           }
           else{
               thiss.parent('td').siblings('td').children('img').attr('src','img/fail.png').show();               
           }
       }
       else{
           if(value!==''){
               thiss.parent('td').siblings('td').children('img').attr('src','img/pass.png').show();               
           }
           else{
               thiss.parent('td').siblings('td').children('img').attr('src','img/fail.png').show();               
           }
       }      
    });
    
    $('#form').submit(function(e){
        var flag2 = 0;
        e.preventDefault();
        $('.textinput').each(function(){
            if($(this).val() !== ''){
                flag2++;
            }
        });
        if(flag2 ===4 && flag===1){        
            var value = $('#form').serialize();            
            $.post(
              "submit.php",
              {value:value},
              function(data){
                  $('#form').slideUp('3500').siblings('#confirmation').html(data).show();
              }
            );
        }
        else{
            alert('Please enter the fields correctly');
        }
    });
    
});

