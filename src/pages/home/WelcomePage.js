import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import {connect} from 'react-redux';
import LanguageChanger from "../../components/lang/LanguageChanger";

class WelcomePage extends Component{
    render() {
        const {currentLang} = this.props;
        return (
            <div>
                <div className="card center mt-50">
                    <LanguageChanger offsetY={60}/>
                    <h1 className='text-center'>{`${TRANS.trans('welcome_text', currentLang)}`}</h1>
                </div>
            </div>
        );
    }
}

function mapStateToProps({currentLang}, props) {
    return {
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(WelcomePage);