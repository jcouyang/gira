library user;

import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';
import 'package:gira/repo_selector.dart';
import 'package:gira/milestone_selector.dart';
import 'package:gira/services/repo_service.dart';
import 'package:gira/tokenizer.dart';
@Controller(
    selector: '[user-data]',
    publishAs: 'userctrl')
class UserDataController {
  final Http _http;
  User user;
  UserDataController(this._http) {
    _loadData();
  }

  void logOut(){
    print('logout');
  }
  void _loadData() {
    user =  new User("jcouyang", "1234", "asdfsfa");
  }
}

class User {
  String login;
  String id;
  String avatar_url;
  User(this.login, this.id, this.avatar_url);
}

class UserModel extends Module {
  UserModel(){
    type(UserDataController);
    type(RepoController);
    type(MilestoneController);
    type(RepoService);
    type(Token);
  }
}
void main() {
  applicationFactory()
    .addModule(new UserModel())
    .run();
}
