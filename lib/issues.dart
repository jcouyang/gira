library issues;

import 'package:angular/angular.dart';
import 'dart:convert';
import 'package:gira/services/issue_service.dart';

@Controller(
    selector: '[issues-kanban]',
    publishAs: 'issuectrl')
class IssueController {
  var groupedIssues;
  var labels;
  Scope scope;
  IssueService issueService;
  IssueController(this.scope ,this.issueService) {
    _loadData();
  }

  void _loadData() {
    issueService.loaded.then((_) {
      groupedIssues = issueService.processData();
      labels = issueService.giraLabels();
    });
  }
}
