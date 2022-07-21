// hashHistory 有#通过hash完成  BrowserRouter 通过浏览器背后的history API实现
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// Suspense 路由懒加载
import React, { Suspense } from 'react';
import path from 'path';
import routes from './config/routes';

const RouteItem = (props) => {
  const { redirect, path: routePath, component, key } = props;
  if (redirect) {
    return (
      <Redirect
        exact
        key={key}
        from={routePath}
        to={redirect}
      />
    );
  }
  return (
    <Route
      key={key}
      component={component}
      path={routePath}
    />
  );
};

const router = () => {
  return (
    <Router>
      <Suspense>
        <Switch>
          {routes.map((route, id) => {
            const { component: RouteComponent, children, ...others } = route;
            return (
              <Route
                key={id}
                {...others}
                component={(props) => {
                  return (
                    children ? (
                      <RouteComponent key={id} {...props}>
                        <Suspense>
                          <Switch>
                            {children.map((routeChild, idx) => {
                              const { redirect, path: childPath, component } = routeChild;
                              return RouteItem({
                                key: `${id}-${idx}`,
                                redirect,
                                path: childPath && path.join(route.path, childPath),
                                component,
                              });
                            })}
                          </Switch>
                        </Suspense>
                      </RouteComponent>
                    ) : (
                      RouteItem({
                        key: id,
                        ...route
                      })
                    )
                  );
                }}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default router;
