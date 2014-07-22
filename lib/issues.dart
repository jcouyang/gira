library issues;

import 'package:angular/angular.dart';
import 'dart:convert';
import 'package:gira/services/issue_service.dart';

@Controller(
    selector: '[issues-kanban]',
    publishAs: 'issuectrl')
class IssueController {
  var groupedIssues;
  List labels;
  Scope scope;
  IssueService issueService;
  IssueController(this.scope ,this.issueService) {
    _loadData();
  }

  void _loadData() {
//    groupedIssues = {
//      '0-BackLog': [{'title': 'title3 lala', 'labels': [{'name': 'Ready'}]}],
//  '1-Ready': [{'title': 'title lala', 'labels': [{'name': '1-Ready'}]}],
//  '2-Doing': [{'title': 'title2 lala', 'labels': [{'name': '2-Doing'}]}]
//};
    issueService.loaded.then((_) {
      groupedIssues = issueService.processData();
      labels = issueService.giraLabels();
    });
  }
}
