library repo_service;

import 'dart:async';
import 'package:gira/tokenizer.dart';
import 'package:angular/angular.dart';

@Injectable()
class RepoService {
  static const String _githubApi = 'https://api.github.com';
  static const String _userUrl = '${_githubApi}/user';
  static const String _orgsUrl = '${_githubApi}/user/orgs';

  static const String _reposUrl = '${_githubApi}/user/repos';
  Future loaded;

  var user;
  var orgs;
  var repos;

  final Http _http;

  final Token token;

  RepoService(Http this._http, Token this.token) {
    loaded = Future.wait([_loadUser(), _loadOrgs(), loadRepos(url:_reposUrl)]);
  }

  Future _loadUser() {
    return _http.get(token.izer(_userUrl)).then((HttpResponse response) {
      user = response.data;
    });
  }

  Future _loadOrgs() {
    return _http.get(token.izer(_orgsUrl)).then((HttpResponse response) {
      orgs = response.data;
    });
  }

  Future loadRepos({url: _reposUrl}) {
    return _http.get(token.izer(url)).then((HttpResponse response) {
      repos = response.data;
    });
  }

//  Future<Recipe> getRecipeById(String id) {
//    return _recipesCache == null
//        ? _loaded.then((_) => _recipesCache[id])
//        : new Future.value(_recipesCache[id]);
//  }
//
//  Future<Map<String, Recipe>> getAllRecipes() {
//    return _recipesCache == null
//        ? _loaded.then((_) => _recipesCache)
//        : new Future.value(_recipesCache);
//  }
//
//  Future<List<String>> getAllCategories() {
//    return _user == null
//        ? _loaded.then((_) => {
//      return {
//      'user': _user,
//      'orgs': _
//    };
//    })
//        : new Future.value(_categoriesCache);
//  }
}
