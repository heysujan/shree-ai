
    function Message(){
        const name='sujan';
        if (name){
            return <h1>Hello World{name}</h1>;
        }
        else{
        return <h1>empty</h1>;
        }
    }
    export default Message;