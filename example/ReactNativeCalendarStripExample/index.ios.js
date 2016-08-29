/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';

class ReactNativeCalendarStrip extends Component {
    render() {
        return (
            <View>
                <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    selection={'background'}
                    selectionAnimation={{duration: 300, borderWidth: 1}}
                    style={{paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'#7743CE'}
                    highlightColor={'#9265DC'}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    borderHighlightColor={'white'}
                    iconLeft={require('./img/left-arrow.png')}
                    iconRight={require('./img/right-arrow.png')}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCalendarStripExample', () => ReactNativeCalendarStrip);
