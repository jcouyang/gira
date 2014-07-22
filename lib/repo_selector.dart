library reposelector;

import 'package:angular/angular.dart';
import 'dart:convert';
import 'package:gira/services/repo_service.dart';

@Controller(
    selector: '[repo-selector]',
    publishAs: 'repoctrl')
class RepoController {
  var repo;
  Scope scope;
  String currentOwner;
  String currentRepo;
  RepoService repoService;
  RepoController(this.scope ,this.repoService) {
    _loadData();
  }
  
  bool isCurrentOwner(String owner){
    return true;
  }

  void changeOwner($event){
    Element input = $event.currentTarget.querySelector("input");
    currentOwner = input.id;
    repoService.loadRepos(url:input.dataset["repos-url"])
    .then( (_) {
      currentRepo = repoService.repos.first['name'];
      repo['repos'] = repoService.repos;
      scope.emit('owner-changed', [currentOwner]);
    });
  }

  void changeRepo($event){
    currentRepo = $event.currentTarget.querySelector("input").id;
    scope.emit('repo-changed', [currentOwner, currentRepo]);
  }
  void _loadData() {
    repoService.loaded.then((_) {
      currentOwner = repoService.user['login'];
      currentRepo = repoService.repos.first['name'];
      repoService.orgs.add(repoService.user);
      repo = {
          'owners': repoService.orgs, 'repos': repoService.repos
      };
    });
  }
}
