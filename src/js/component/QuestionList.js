/**
 * Created by zhangfan on 15/10/11.
 */
import React from "../../bower_components/react/react.js";

class QuestionList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="media">
                <div className="media-left">
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.vote}</span>
                    </button>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.question}</h4>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}
export default QuestionList;