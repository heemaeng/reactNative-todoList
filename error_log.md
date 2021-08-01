### 에러로그

#### Only one default export allowed per module

```bash

error: SyntaxError: C:\github\react-todoList\App.js: Only one default export allowed per module. (22:0)

  20 | });
  21 |
> 22 | export default App;
     | ^
  23 |

```

세션을 진행하다가 생긴 오류

Parsing error: Only one default export allowed per module.
Export default class 를 사용하는 상태에서 

Export defalut를 아래에서 한번더 정의해 주어서 오류가 발생

출처 : https://ock-nomad.tistory.com/25

