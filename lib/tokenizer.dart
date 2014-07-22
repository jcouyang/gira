library tokenizer;

import 'package:angular/angular.dart';
import 'dart:html';
Storage localStorage = window.localStorage;

@Injectable()
class Token {
  String token;
  Token(){
    token = localStorage['access_token'];
  }

  String izer(String url){

    if(url.indexOf('?') > -1){
      return url + "&access_token=" + token;
    }
    return "${url}\?access_token=${token}";

  }
}  
