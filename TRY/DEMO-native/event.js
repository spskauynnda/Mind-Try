// var xt = function(){
// }
// xt.prototype.print = function(){
// }
// var xn = new xt();
// xn.print();
// ------------------------------------------------------------------------------------------

/**通用**/
var _$ = function(selector){
    var method = selector.substr(0,1) == '.'? 'getElementsByClassName' : 'getElementById';
    return document[method](selector.substr(1));
};


/**data**/
function Node(text,id,kids){
    this.text = text;
    this.id = id;
    this.kids = kids;
}

var data = new Node('ROOT','0',[
        new Node('HTML','0',[]),
        new Node('CSS','1',[
                new Node('Sass','0',[]),
                new Node('bootstrap','1',[])
        ]),
        new Node('JavaScript','2',[
                new Node('jQuery','0',[]),
                new Node('AngularJS','1',[]),
                new Node('reactJS','2',[])
        ])
    ]
);




/**递归遍历data对象并输出**/
                                     //  函数traver()返回 father*内* 的子对象所对应的html内容
function traver(father,_id_){        //  字符串_id_ 负责记录父对象的id, 即该支路的id
    _id_ += father.id;               //  字符串_html_ 负责记录当前结点下要生成的html内容
    var _html_ = '';
    if(!father.kids.length){
        return _html_;
    }else{
        for(var i=0; i<father.kids.length; i++){
            _html_ += '<div class="node" id="' +_id_+i+ '"><p>'       //此处_id_后要+i， 此处的_id_+i 与 traver函数中参与运算的_id_是平级的
                          +father.kids[i].text+ '</p>'
                          +traver(father.kids[i],_id_)+ '</div>';
        }
        return _html_;
    }
}
function print(){
    var root = data;
    var html = _$('#0').innerHTML;
    html += traver(root,'');
    _$('#0').innerHTML = html;
}

    // function traver(father,_id_){       //  此时函数traver()返回 当前father对象及其子对象所对应的html内容
    //                                     //  特别地，使用此种方法要删去html中的root层，且print中要获取的是tree而非root
    //     _id_ += father.id;
    //     var _html_ = '';
    //     if(!father.kids.length){
    //         _html_ = '<div class="node" id="' +_id_+ '"><p>' +father.text+ '</p></div>';
    //         return _html_;
    //     }else{
    //         _html_ += '<div class="node" id="' +_id_+ '"><p>' +father.text+ '</p>';
    //         for(var i=0; i<father.kids.length; i++){
    //             _html_ += traver(father.kids[i],_id_);
    //         }
    //         _html_ += '</div>';
    //         return _html_;
    //     }
    // }
    // function print(){
    //     var root = data;
    //     var html = _$('.tree')[0].innerHTML;
    //     html += traver(root,'');
    //     _$('.tree')[0].innerHTML = html;
    // }


/**排版控制**/
var space = 12;                 //上下的间隔
var height = 30;
var border = 2;
function oneSort(father){
    var kids;
    if(father.childNodes){
        kids = father.childNodes;
    }else{
        kids = father.children;
    }
    var len = kids.length;
    var h = (len-1)*(height+space)-space;
    console.dir(kids);
    for(var i=1; i<len; i++){
        kids[i].style.left = '100px';
        kids[i].style.top = height/2+border-h/2+(i-1)*(height+space) + 'px';
    }
}
function allSort(father){
    var kids;
    if(father.childNodes){
        kids = father.childNodes;
    }else{
        kids = father.children;
    }
    var len = kids.length;
    if(!len){
        return true;
    }else{
        var h = (len-1)*(height+space)-space;
        console.dir(kids);
        for(var i=1; i<len; i++){
            kids[i].style.left = '100px';
            kids[i].style.top = height/2-border-h/2+(i-1)*(height+space) + 'px';
            allSort(kids[i]);
        }
    }
}

/**生成子结点（同时重排版）**/
function addNode(){




}

window.onload = function(){
    print();    allSort(_$('#0'));
};












