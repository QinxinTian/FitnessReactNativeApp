# FitnessReactNativeApp

# Updated notes ordered by dates are listed below the commits section on this page.
# The Project introduction are on the bottom of this page.

# Commits

8/25
- Added the styling of the icons and the styling of the submitBtn, also made them be depended on different platforms, e.g., Andriod, ios) and get them being positioned on a row, as well as changing the colors of the icons.
- Added styling of the icons and changing the colors.


8/24
- Connect AddEntry, so we can submit the new Entry as well as we can reset the entry, shows to the users not to forget to log in the data for the day.
- Create store.
- Utilized the AsyncStorage and ADDED REDUX.

8/22
- Added TextButton component and update AddEntry
- Updated the components
- Create submitBtn method in the addEntry, and create the submitBtn component, render it in the addEntry, Update the UdaciStepper component, create Textbutton component, create reset method in the AddEntry, update the render method in the AddEntry.
- Create increment, decrement and slide methods in the addEntry, create UdaciSliders component as well as the UdaciStepper component, create DateHeader component, update the render method in the AddEntry.
- Updated AddEntry methods.

# Updated on 8/23/2018

For the long list, we cn use scrollview instead of the view.

Also we can use flatList.

  https://github.com/facebook/react-native/issues/16090
  https://facebook.github.io/react-native/docs/sectionlist.html
  
# Update on 8/22/2018

TouchableHighlight
TouchableOpacity
TouchableNativeFeedback - Only supported on the Andriod
TouchableWithoutFeedback

Both Buttons and Touchables have access to an onpress prop.
Touchables can be nested within the views, and the views can be nested within the touchables.
# App introduction:
This is a triathion tracking app.
Track the meals and how are we eating for the specific day, as well as how many hours' sleep we get.
If you didn't log in for the specific day, you would get a notice saying that "Hey, don't forget to log in for your day."
When you selected for a day, you would get every day's data from that day on as well as that day's data.
Also there is button for resetting and clearing out the infomation.
We can add new entry for a new day.
If you come to the add entry screen after you logged your information, you would get a view as an emoji and a phase for today as "Hey, you already logged for today", and a reset button.
The last screen would be like a real time tracker, it's going to tell you which way you are currently heading as well as your altitude and your speed that you are going. e.g., a simulator set to simulating a drive on a freeway.

Whenever you have the text, you wrap that into the text component.
