library issue_service;

import 'dart:async';
import 'package:gira/tokenizer.dart';
import 'package:angular/angular.dart';
import 'dart:convert';
@Injectable()
class IssueService {
  static const String _repoApi = 'https://api.github.com/repos';
  Future loaded;

  var issues;
  var labels;
  var result;
  String owner;
  String repo;
  final Http _http;

  final Token token;

  IssueService(Http this._http, Token this.token) {
    init("jcouyang", "gira");
  }

  void init(String o, String r) {
    this.owner = o;
    this.repo = r;
    loaded = Future.wait([_loadIssues(), _loadLabels()]);
  }
  Future _loadIssues() {
    return _http.get(token.izer("${_repoApi}/${owner}/${repo}/issues")).then((HttpResponse response) {
      issues = response.data;
    });
  }

  Future _loadLabels() {
    return _http.get(token.izer("${_repoApi}/${owner}/${repo}/labels")).then((HttpResponse response) {
      labels = response.data;
    });
  }

  giraLabels(){
    List giraTagedLabel = labels.where((label) => label['name'].startsWith(new RegExp(r"\d+-(\w+)"))).toList();
    giraTagedLabel.sort((x,y)=>x['name'].split("-").first.compareTo(y['name'].split('-').first));
    return giraTagedLabel;
  }

  Future addLabels(issueid, labels) {
    print(labels);
    _http.post(token.izer("${_repoApi}/${owner}/${repo}/issues/${issueid}/labels}"), JSON.encode(labels));
  }


  Future removeLabel(issueNumber, labelName) {
    print("${_repoApi}/${owner}/${repo}/issues/${issueNumber}/labels/${labelName}");
    _http.delete(token.izer("${_repoApi}/${owner}/${repo}/issues/${issueNumber}/labels/${labelName}"));
  }


  Map processData() {
    labels.takeWhile((label) => label['name'].startsWith(new RegExp(r"\d+-(\w+)")));
    return issues.fold({"0-BackLog":[]}, (current, next){
      var giraLabel = next['labels'].takeWhile((label) => label['name'].startsWith(new RegExp(r"\d+-(\w+)")));
      if (giraLabel.isEmpty) {
        current['0-BackLog'].add(next);
        return current;
      }
      for (var label in giraLabel) {
        if (current[label['name']] == null) current[label['name']] = [];
        current[label['name']].add(next);
      }
      return current;
    });
  }
}
