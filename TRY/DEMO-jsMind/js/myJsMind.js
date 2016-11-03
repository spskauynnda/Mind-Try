var options = {                   // options 将在下一章中详细介绍
    container:'jsmind_container', // [必选] 容器的ID
    editable:true,                // [可选] 是否启用编辑
    theme:'orange'                // [可选] 主题
};
var _jm = new jsMind(options);


/** 添加、删除 **/
function get_selected_nodeid(){
    var selected_node = _jm.get_selected_node();
    if(!!selected_node){
        return selected_node.id;
    }else{
        return null;
    }
}
function add_node(){
    var selected_node = _jm.get_selected_node(); // as parent of new node
    if(!selected_node){prompt_info('please select a node first.');}

    var nodeid = jsMind.util.uuid.newid();
    var topic = '* Node_'+nodeid.substr(0,5)+' *';
    var node = _jm.add_node(selected_node, nodeid, topic);
}
function remove_node(){
    var selected_id = get_selected_nodeid();
    if(!selected_id){prompt_info('please select a node first.');}

    _jm.remove_node(selected_id);
}

window.onload = function(){
    _jm.show();
};