var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//主对象
class MyComponent extends React.Component {

    constructor() {
        super();
        this.state = {count: 0,textArray:[],text:""};
    }

    remove(idx)
    {
        if(this.state.textArray.length>idx)
        {
            this.state.textArray.splice(idx,1);
            //array 是指针，所以不用写在state里面
            this.setState({});
        }
    }

    render() {
        var parent = this;
        return (
            <div style={{width: '100%', backgroundColor: '#bbffff', position: 'relative',padding:10}}>
                <button onClick={() => {
                    //count不是指针，要在state里跟新
                    this.setState({count: this.state.count + 1})
                }}>count
                </button>
                <p>count {this.state.count}</p>
                <input type="text" onChange={(e)=>{this.setState({text:e.target.value})}} value={this.state.text}/>
                <button onClick={() => {
                    if(this.state.text.length>0)
                    {
                        this.state.textArray.push({id:Date.now(),text:this.state.text});
                        this.setState({text:""});
                    }
                    else
                    {
                        alert("text is empty");
                    }
                }}>add text
                </button>
                {this.state.textArray.length== 0 ? <p>no data</p> : this.state.textArray.map(function(data,idx) {
                        return (<TextComponent  key={data.id} text={data.text} remove={()=>{parent.remove(idx)}}/>)
                    })}
            </div>);
    }
}

//子对象
class TextComponent extends  React.Component{

    componentWillMount()
    {
        //初始时调用
        alert(this.props.text+" added!");
    }

    componentWillUnmount()
    {
        //销毁时调用
        alert(this.props.text+" removed!");
    }

    render()
    {
        return(
            <div>
                <p>{this.props.text}                  <button onClick={this.props.remove}>remove</button></p>
            </div>
        )
    }
}




// init render
ReactDOM.render(
    <h1>happy new year，han!</h1>,
    document.getElementById('container1')
);


ReactDOM.render(
    <MyComponent/>,
    document.getElementById('container2')
);

// show how to use jquery in react
$(document).ready(function () {
    alert("ready!");
})

