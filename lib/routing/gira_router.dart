library gira_router;

import 'package:angular/angular.dart';

void giraRouteInitializer(Router router, RouteViewFactory views) {
  views.configure({
      'detail': ngRoute(
          path: '/:owner/:repo/issue/:number',
          view: 'view/editIssues.html'),
      'view': ngRoute(
          path: '/:owner/:repo',
          view: 'view/viewIssues.html'),
  });
}