import React, {Component} from "react";
import './Counter.css';
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        // const array_numbers = this.props.array_numbers;
        console.log(this.props.comparison);
        console.log(this.props.array_numbers);
        console.log(this.props.password);
        return (
            <div className="mt-5">
                <div className="display_block">
                    {/*{array_numbers.length === 0 ?*/}
                    {/*<div className="mt-2">Введите пароль</div> */}
                    {/*: */}
                    <h1>{this.props.array_numbers}</h1>
                    {/*}*/}

                </div>
                <div className="enter_block mt-1">
                    <button className="block" id="1" value={1} onClick={()=> this.props.show(1)}>1</button>
                    <button className="block" id="2" value={2} onClick={()=> this.props.show(2)}>2</button>
                    <button className="block" id="3" value={3} onClick={()=> this.props.show(3)}>3</button>
                    <button className="block" id="4" value={4} onClick={()=> this.props.show(4)}>4</button>
                    <button className="block" id="5" value={5} onClick={()=> this.props.show(5)}>5</button>
                    <button className="block" id="6" value={6} onClick={()=> this.props.show(6)}>6</button>
                    <button className="block" id="7" value={7} onClick={()=> this.props.show(7)}>7</button>
                    <button className="block" id="8" value={8} onClick={()=> this.props.show(8)}>8</button>
                    <button className="block" id="9" value={9} onClick={()=> this.props.show(9)}>9</button>
                    <button className="block" id="10" value="" onClick={this.props.delete}>Back</button>
                    <button className="block" id="0" value={0} onClick={()=> this.props.show(0)}>0</button>
                    <button className="block" id="11" value="" onClick={this.props.check}>Ent</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        password: state.password,
        comparison: state.comparison,
        array_numbers: state.array_numbers
    };
};


const mapDispatchToProps = dispatch => {
    function daiValue(id) {
        let values = document.getElementById(id).value;
        return Number.parseInt(values);
    }

    return {
        show: (id) => dispatch({type: 'ENTER', value: daiValue(id)}),
        delete: () => dispatch({type: 'DELETE'}),
        check: () => dispatch({type: 'CHECK'}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

