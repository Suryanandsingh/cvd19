import React, { Component } from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import TimeAgo from 'react-native-timeago';
import { connect } from 'react-redux';
import Styles from '../../Styles';
import { ACTIVE_COLOR, CONFIRM_COLOR, COVIDE_TEXT, PURPLE, RECOVERED_COLOR } from '../../Utils/constant';

const colors = [ACTIVE_COLOR, PURPLE, CONFIRM_COLOR, RECOVERED_COLOR, COVIDE_TEXT]

class NotificationCard extends Component {
    pickRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    timeView(timestamp) {
        return (
            <TimeAgo time = {timestamp}/>
        )
    }

    render() {
        const { notifications } = this.props;
        if (notifications && notifications.length > 0) {
            return notifications.map((notification, index) => {
                return (
                    <Animatable.View animation="lightSpeedIn" key={index} style={[Styles.notificationCardContainer, { borderLeftColor: this.pickRandomColor() }]} >
                        {
                            `${notification.update}`.split('\n').map((text, index) => {
                                if (text && text.length > 0) {
                                    return <Text style={Styles.notificationText} key={index} >{text}</Text>
                                }
                            })
                        }
                        <Text style={Styles.notificationTimeText}>
                            {this.timeView(notification.timestamp*1000)}
                        </Text>
                    </Animatable.View>
                )
            })
        } else {
            return null
        }
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(NotificationCard)

