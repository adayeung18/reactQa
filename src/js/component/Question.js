/**
 * Created by zhangfan on 15/10/10.
 */
import React from "../../bower_components/react/react.js";
class Question extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>问题</label>
                    <input type="text" className="form-control" placeholder="问题标题"/>
                </div>
                <div className="form-group">
                    <label></label>
                    <textarea className="form-control" placeholder="问题的描述"></textarea>
                </div>
                <div className="text-right">
                    <button type="button" className="btn btn-default mr-20">取消</button>
                    <button type="button" className="btn btn-success">确认</button>
                </div>
            </div>
        );
    }
}
export default Question;
