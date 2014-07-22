library milestoneselector;

import 'package:angular/angular.dart';
import 'dart:convert';
//https://api.github.com/repos/jcouyang/gira/milestones
var milestonesdata = [
  {
    "url": "https://api.github.com/repos/jcouyang/gira/milestones/2",
    "labels_url": "https://api.github.com/repos/jcouyang/gira/milestones/2/labels",
    "id": 558695,
    "number": 2,
    "title": "v1.0.0",
    "description": "",
    "creator": {
      "login": "jcouyang",
      "id": 1235045,
      "avatar_url": "https://avatars.githubusercontent.com/u/1235045?",
      "gravatar_id": "e181d174303811fefaefb0b3a91ce567",
      "url": "https://api.github.com/users/jcouyang",
      "html_url": "https://github.com/jcouyang",
      "followers_url": "https://api.github.com/users/jcouyang/followers",
      "following_url": "https://api.github.com/users/jcouyang/following{/other_user}",
      "gists_url": "https://api.github.com/users/jcouyang/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jcouyang/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jcouyang/subscriptions",
      "organizations_url": "https://api.github.com/users/jcouyang/orgs",
      "repos_url": "https://api.github.com/users/jcouyang/repos",
      "events_url": "https://api.github.com/users/jcouyang/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jcouyang/received_events",
      "type": "User",
      "site_admin": false
    },
    "open_issues": 18,
    "closed_issues": 17,
    "state": "open",
    "created_at": "2014-02-04T16:48:25Z",
    "updated_at": "2014-02-24T05:20:15Z",
    "due_on": "2014-02-28T08:00:00Z"
  },
  {
    "url": "https://api.github.com/repos/jcouyang/gira/milestones/3",
    "labels_url": "https://api.github.com/repos/jcouyang/gira/milestones/3/labels",
    "id": 568149,
    "number": 3,
    "title": "v2.0.0",
    "description": "",
    "creator": {
      "login": "JustinFeng",
      "id": 1527902,
      "avatar_url": "https://avatars.githubusercontent.com/u/1527902?",
      "gravatar_id": "567be683f936fa6a0b9fb356ff668753",
      "url": "https://api.github.com/users/JustinFeng",
      "html_url": "https://github.com/JustinFeng",
      "followers_url": "https://api.github.com/users/JustinFeng/followers",
      "following_url": "https://api.github.com/users/JustinFeng/following{/other_user}",
      "gists_url": "https://api.github.com/users/JustinFeng/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/JustinFeng/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/JustinFeng/subscriptions",
      "organizations_url": "https://api.github.com/users/JustinFeng/orgs",
      "repos_url": "https://api.github.com/users/JustinFeng/repos",
      "events_url": "https://api.github.com/users/JustinFeng/events{/privacy}",
      "received_events_url": "https://api.github.com/users/JustinFeng/received_events",
      "type": "User",
      "site_admin": false
    },
    "open_issues": 23,
    "closed_issues": 2,
    "state": "open",
    "created_at": "2014-02-13T07:37:03Z",
    "updated_at": "2014-03-17T16:07:51Z",
    "due_on": "2014-05-30T07:00:00Z"
  }
];


@Controller(
    selector: '[milestone-selector]',
    publishAs: 'milestonectrl')
class MilestoneController {
  Scope scope;
  String currentMilestone;
  var milestones;
  MilestoneController(this.scope) {
    _loadData();
  }
  
  Boolean isCurrentMilestone(String milestone){
    print(milestone == this.currentMilestone);
    return milestone == this.currentMilestone;
  }

  void changeMilestone($event){
    currentMilestone = $event.currentTarget.querySelector(".select-menu-item-text h4").text;    
    scope.emit('milestone-changed', [currentMilestone]); 
  }

  void clearMilestone(){
    currentMilestone = "No Milestone selected";
    scope.emit('milestone-cleared', []);
  }

  void _loadData() {
    milestones = milestonesdata;
    clearMilestone();
  }
}
