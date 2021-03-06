import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

/**
 * Purpose: Provide the user with the option to start a meeting or join an existing one
 */
export default class MeetingMenuScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  /**
   * Purpose: Render the meeting options menu
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Meeting Minutes</Text>

          <Icon onPress={this._onPressBackButton}
            name='arrow-circle-o-left'
            size={35}
            color='#000000'
            style={styles.backButton}
          />
        </View>

        <View style = {{alignSelf: 'center', justifyContent: 'center', flex: 2}}></View>

        <View style = {{alignSelf: 'center', justifyContent: 'center', flex: 1}}>
          <Button title="New Meeting" onPress={this._onPressNewMeeting} style={styles.continueButton}
            icon={
              <Icon name='group' size ={15} color='black' style={styles.buttonIconStyle}/>
            }

            buttonStyle={{
            backgroundColor: "#1995AD",
            width: 300,
            height: 45,
            borderWidth: 0,
            borderRadius: 5}}
          />
        </View>

        <View style = {{alignSelf: 'center', justifyContent: 'center', flex: 1}}>
          <Button title="Join Meeting"  onPress={this._onPressJoinMeeting} style={styles.setupButton}
            icon={
              <Icon name='group' size ={15} color='black' style={styles.buttonIconStyle}/>
            }
            
            buttonStyle={{
            backgroundColor: "#A1D2E6",
            width: 300,
            height: 45,
            borderWidth: 0,
            borderRadius: 5,}}
          />
        </View>

        <View style = {{alignSelf: 'center', justifyContent: 'center', flex: 2}}></View>
      </View>
    );
  }

  /**
   * Purpose: Generate a new meeting
   */
  _onPressNewMeeting = () => {
    var generatedCode = "GU7FJ";
    this.props.navigation.navigate('NewMeeting', {data: {code: generatedCode}});
  }

  /**
   * Purpose: Join an existing meeting
   */
  _onPressJoinMeeting = () => {
    this.props.navigation.navigate('EnterCode');
  }

  /**
   * Purpose: Override normal functionality of back button
   */
  _onPressBackButton = () => {
    this.props.navigation.pop();
  }
}

/**
 * Purpose: Make a randomized ID
 */
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

/**
 * Purpose: Styles for the meeting menu screen
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F2',
  },
  continueButton: {
    position: 'absolute',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  setupButton: {
    position: 'absolute',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    }),
  }, 
  backButton: {
    position: 'absolute',
    left: 10,
    paddingVertical: 35,
    justifyContent: 'flex-start',
    flex: 1
  },
  title: {
    fontSize: 25, 
    fontFamily: 'source-sans-pro-regular',
    textAlign: 'center', 
    color: '#FFFFFF',
    flex: 1
  }, 
  header: {
    backgroundColor: '#1995AD',
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row'
  }, 
  buttonIconStyle: {
    right: 10
  }
});
