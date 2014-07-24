library issues_editor;

import 'package:angular/angular.dart';
import 'dart:convert';
import 'dart:html';
import 'package:gira/services/issue_service.dart';

@Controller(
    selector: '[issue-editor]',
    publishAs: 'issueEditctrl')
class IssueEditorController {
  String issueNumber;
  RouteHandle route;
  var issue;
  Scope scope;
  IssueService issueService;
  IssueController(RouteProvider router, this.scope ,this.issueService) {
    issueNumber = router.parameters['number'];
    route = router.route.newHandle();
    _loadData();
  }

  void _loadData() {
    // issueService.getIssue(issueNumber)
    //   .then((_)=>issue=issueService.issue);
  }
  detach() {
    route.discard();
  }
}
