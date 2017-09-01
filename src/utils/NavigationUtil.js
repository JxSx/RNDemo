import {NavigationActions} from 'react-navigation'

/**
 * 重置导航状态
 */
const reset = (navigation, routeName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName})
    ]
  })
  navigation.dispatch(resetAction)
}

export default {reset}