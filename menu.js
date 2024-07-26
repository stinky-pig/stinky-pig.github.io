Code={
    MenuData:["农家一碗香","辣椒炒肉","杏鲍菇炒肉","土豆丝","土豆片","西红柿炒蛋"],
    PushPlus:{
        Send:function(content,success){
            $.ajax({
                url: "http://www.pushplus.plus/send",
                data: {token: '506a022d6a5a4fbc84f7284da20b6ae0',content:content},
                type: "POST",
                dataType: "json",
                success: success
            });
        }

    }
}