/**
 * Created by zhangfan on 15/10/12.
 */
import React from "../../bower_components/react/react.js";
import QuestionList from "./QuestionList.js"

class QuestionPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let arrList = [];
        this.props.queList.forEach((val, index) => {
            arrList.push(<QuestionList question={val.question} desc={val.desc} vote={val.vote} key={"que"+index} />);
        });
        return(
            <div>
                {arrList}
            </div>
        )
    }
}
export default QuestionPanel;