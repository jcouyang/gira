library issues;

import 'package:angular/angular.dart';
import 'dart:convert';
import 'dart:html';
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

  bool drop(e) {
    e.stopPropagation();
    if (e.dataTransfer.getData('text/plain').isEmpty) return false;
    var column = e.currentTarget;
    var issue = document.querySelector("#${e.dataTransfer.getData('text/plain')}");
    print(issue.dataset["label"]);
    issueService.removeLabel(issue.dataset['number'], issue.dataset["label"])
      .then((_)=> issueService.addLabels(issue.dataset['number'], [column.dataset["name"]]))
      .then((_)=>column.querySelector(".lbl").append(issue));
    return false;
  }

  void dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
    print("transfet${e.currentTarget.id}");
  }
  bool dragOver(e) {
    e.preventDefault(); // allows us to drop
//    $(e.currentTarget).removeClass("over").addClass('over');
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

}
