Code={
    MenuData:["今晚休息","螺狮粉","农家一碗香","辣椒炒肉","杏鲍菇炒肉","土豆丝","土豆片","西红柿炒蛋","蒜香排骨","小炒牛肉","鸡翅","四季豆炒肉","干锅花菜","空心菜","肉末茄子",
        "香干炒肉","丝瓜鸡蛋汤","玉米排骨汤","火腿鸡蛋","木耳炒肉","凉拌皮蛋","荷兰豆腊肠","麻婆豆腐","煎蛋饼"],
    PushPlus:{
        Send:function(content,success){
            $.ajax({
                url: "https://www.pushplus.plus/send",
                data: {token: '506a022d6a5a4fbc84f7284da20b6ae0',content:content},
                type: "POST",
                dataType: "json",
                success: success
            });
        }

    }
}