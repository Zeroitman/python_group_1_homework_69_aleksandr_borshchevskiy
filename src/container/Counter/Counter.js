import React, {Component} from "react";
import './Counter.css';
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        return (
            <div className="mt-5">
                <div className="display_block">
                    <h1>{this.props.counter}</h1>
                </div>
                <div className="enter_block mt-1">
                    <button className="block" onClick="">{this.props.one}</button>
                    <button className="block" onClick="">{this.props.two}</button>
                    <button className="block" onClick="">{this.props.three}</button>
                    <button className="block" onClick="">{this.props.four}</button>
                    <button className="block" onClick="">{this.props.five}</button>
                    <button className="block" onClick="">{this.props.six}</button>
                    <button className="block" onClick="">{this.props.seven}</button>
                    <button className="block" onClick="">{this.props.eight}</button>
                    <button className="block" onClick="">{this.props.nine}</button>
                    <button className="block" onClick="">{this.props.back}</button>
                    <button className="block" onClick="">{this.props.zero}</button>
                    <button className="block" onClick="">{this.props.enter}</button>
                    {/*<button onClick={this.props.decreaseCounter}>Decrease</button>*/}
                    {/*<button onClick={this.props.addCounter}>Increase by 5</button>*/}
                    {/*<button onClick={this.props.subtractCounter}>Decrease by 5</button>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
        back: "<",
        enter: "ENT"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch({type: 'INCREMENT'}),
        decreaseCounter: () => dispatch({type: 'DECREMENT'}),
        addCounter: () => dispatch({type: 'ADD', value: 5}),
        subtractCounter: () => dispatch({type: 'SUBTRACT', value: 5}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

