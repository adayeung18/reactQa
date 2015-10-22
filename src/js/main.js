/**
 * Created by zhangfan on 15/10/3.
 */
import React from "../bower_components/react/react";
import Question from "./component/Question.js";
import QuestionPanel from "./component/QuestionPanel.js";

class App extends React.Component{
    constructor() {
        super();
        let queList = [
            {
                question: "你热爱编程吗？",
                desc: "有钱就行。。",
                vote: "12"
            },
            {
                question: "现在什么开发最火？",
                desc: "有gou必火",
                vote: "11"
            }
        ];
        this.state = {
            queList: queList
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">问答</h2>
                <p className="text-right">
                    <button type="button" className="btn btn-success">添加问题</button>
                </p>
                <Question />
                <QuestionPanel queList={this.state.queList}/>
            </div>
        )
    }
}

React.render(<App />, document.getElementById("app"));