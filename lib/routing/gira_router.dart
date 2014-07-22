library gira_router;

import 'package:angular/angular.dart';

void giraRouteInitializer(Router router, RouteViewFactory views) {
  views.configure({
      'view': ngRoute(
          path: '/:owner/:repo',
          view: 'view/viewIssues.html'),
  });
}