# reactNative-todoList
react-native를 활용한 Tode list

react-native 공부를 위한 예제 실습일 뿐입니다... 코딩괴물들의 예제와 방법 정말 감사합니다!

## todo-list 예제 따라하기

https://catchdream.tistory.com/176?category=829219

## react-native emulator 실행

### android
```bash
cd react-todoList
npm run android
```

### iOS
```bash
cd react-todoList
npm run ios
```

## [윈도우에서 react-native 개발 환경 구축]
[Create a react-native development environment in Windows]

  출처 : https://dev-yakuza.posstree.com/ko/react-native/install-on-windows/

  본 개발자는 아직 mac book을 가지고 있지 않기 때문에 부득이하게 윈도우로 작업을 하기로 했다.

  대부분의 내용은 나의 의견이 아니라 출처에 관한 내용을 정리한 것으로 문제가 있을시 수정할 예정.

  다시 이것을 볼때 이해를 높이기 위해서 간단하고 명료한 설명만 써놓음.


## 1. 필요한 것

  Nodejs, Python, jdk, Android studio

## 2. react-native 개발 방법 (2번을 추천해서 2번씀)

  (1) Expo CLI
  (2) React Native CLI (o)

## 3. 순서

### (1) Chocolatey 설치

#### cmd

```bash
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco –version
0.10.15
```


(2) Nodejs 설치

```bash
choco install -y nodejs.install

node --version
v12.6.0

npm --version
6.9.0
```


(3) Python 설치

```bash
choco install -y python2

python --version
2.7.16
```


(4) React Native CLI 설치

```bash
npm install -g react-native-cli

npx react-native --version
react-native-cli: 2.0.1
react-native: n/a - not inside a React Native project
```


(5) JDK 설치

```bash
choco install -y jdk8

java -version
openjdk version "1.8.0_222"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_222-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.222-b10, mixed mode)

javac -version
javac 1.8.0_222
```

(6) 안드로이드 스튜디오 설치

https://developer.android.com/studio

여기 들어가서 안전하게 설치프로그램 받아서 설치

<주의> 한글 이름이 포함된 폴더가 설치 위치에 지정되지 않도록 한다. (이건 모든 설치프로그램 기본중의 기본)


안드로이드 스튜디오 설치 완료 후, Do not import settings 선택(설치가 끝나면 새로운 팝업창이 뜸)... 안드로이드 스튜디오 실행

전부 다 (다음)으로 넘기고 안드로이드 스튜디오 첫 팝업창 오른쪽 밑에 Configure선택

SDK Manager 로 들어가서 System Settings > Android SDK

Android SDK Platform 29
Intel x86 Atom System Image
Google APIs Intel x86 Atom System Image
Google APIs Intel x86 Atom_64 System Image

설치


(7) 안드로이드 스튜디오 환경 변수 설치

내PC > 속성 > 고급 시스템 설정 > 시스템 속성 (팝업창)에서 고급 탭 > 환경변수 버튼클릭 > 000에 대한 사용자 변수에 새로만들기 >

변수이름: ANDROID_HOME
변수 값: C:\디렉토리\Android\Sdk 설치 위치   

하나 만들고

Path 변수에
C:\Users\[사용자 이름]\AppData\Local\Android\Sdk\platform-tools
값 추가

```bash
adb

Android Debug Bridge version 1.0.41
Version 29.0.1-5644136
Installed as /Users/jeonghean_kim/Library/Android/sdk/platform-tools/adb
```

(8) react-native 프로젝트 생성 및 확인

SampleApp이라는 디렉토리를 만들고 그안에 SampleApp의 새로운 react-native 프로젝트를 생성
```bash
npx react-native init SampleApp
cd SampleApp
npm run android
````

에뮬레이터에 Welcom to React라는 화면이 뜸
  아마 안되는 경우 있음


(9) 에뮬이 안뜨는 경우

- 안드로이드 스튜디오에서 에뮬을 설치해야함

  설치하면됨
  
- 컴퓨터에서 가상장치를 enabled를 하지않아서 에뮬을 설치 못함 (에러뜸)

  컴퓨터를 껐다가 켜서 단축키 (나같은 경우 f2)를 눌러서 바이오스로 들어갑니다, 또는 그냥 바로 바이오스 설정으로 들어갑니다.
  Advanced > CPU Configuration > Intel (VMX) Virtualization Technology > Enabled
  보통의 경우의 경로를 말합니다. 특이한 경우에는 Advanced 탭도 없이 찾아야하는 경우도 있는데 CPU Configuration 이라는 것만 잘 찾아봅시다.
  
- 안드로이드 스튜디오에서 에뮬설치 뭐해야함?

  SDK Manager 로 들어가서 System Settings > Android SDK > SDK Tools 
  Android Emulator
  Android SDK Platform-Tools
  
  사용자가 Intel,
  Intel x86 Emulator Accelerator (HAXM installer)
  
  사용자가 AMD,
  Android Emulator Hypervisor Driver for AMD Processors (installer)
