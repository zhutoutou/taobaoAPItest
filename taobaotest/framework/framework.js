const http = require('http');
const url = require('url');
const request = require('superagent')
var fw = {
    /*
    httpGet*/
    httpGet:function(options){
        var url = options.url||'';
        var setting = options.setting||{};
        var param = options.param||{};
        var retry = otions.retry||3;
            
        var g = gen()
        var result = g.next();

        return result.value.then(function(err,res){
            return res.data.json();
        }).then(function(data){
            g.next(data);
        })
        
        function* gen(){
            var result = yield promise;
            return result.data;
        }
        
        function promise = function(){
            return request
                .get(url)                           //Address
                .set(setting)                       //Setting
                .query(param)                       //Param
                .retry(retry,function(err,res){     //retry
                    console.log(err);
                })
        }
        
    },
    
    /*
    httpPost
    */
    httpPost:function(options){
        var url = options.url||'';
        var type = options.type||'json';
        var setting = options.setting||{};
        var param = options.param||{};
        var retry = options.retry||3;
        return request
                .post(url)                          //Address
                .set(setting)                       //Setting
                .send(param)                        //Param
                .tyep(type)                         //Type
                .retry(retry,function(err,res){     //retry
                    console.log(err);
                })   
    }
        
}