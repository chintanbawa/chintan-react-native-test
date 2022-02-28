import {
  createNavigationContainerRef,
  StackActions
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function getNavigator() {
  return navigationRef;
}

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function replace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.replace({
      routeName: name,
      params
    });
  }
}

function push(routeName, params, action, key) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.push({
        routeName,
        params,
        action,
        key
      })
    );
  }
}

function getCurrentRoute(nav) {
  if (Array.isArray(nav.routes) && nav.routes.length > 0) {
    return getCurrentRoute(nav.routes[nav.index]);
  } else {
    return nav.routeName;
  }
}

function pop(screenCount = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(screenCount));
  }
}

export default {
  navigationRef,
  getNavigator,
  navigate,
  push,
  pop,
  getCurrentRoute,
  replace
};
