# 인터넷

1. 인터넷의 시작
```
인터넷은 1960년대 미국 국방성에서 기금한 연구 프로젝트에서 시작됨 소련이 인공위성을 발사하는데 성공하자 위협을 느낀 미국은 새로운 기술을 연구하는 Advanced Research Project Agency, 고등 연구 계획국 부서를 창설하였고 ARPA는 현재 웹에 모태가 되는 ARPANET을 개발
여기서 민간 연구용의 ARPANET이 현재 전 세계의 모든 컴퓨터를 연결하고 있는 인터넷으로 발전

ARPANET : 전체 통신 시스템에서 데이터를 안전하게 보관 및 전송할 수 있는 시스템
```

2. 인터넷의 발전
```
첫 번째 1 : 1 연결
두 대의 컴퓨터가 통신이 필요할 때, 우리는 다른 컴퓨터와 물리적으로 (보통 이더넷 케이블, 일반적으로 우리가 말하는 '랜선') 또는 무선으로 (WiFi 나 Bluetooth) 연결되어야 한다. 모든 현대 컴퓨터는 이러한 연결중 하나를 이용하여 연결을 지속할 수 있다.

두 번째 多:多 연결
우리는 1 : 1 연결 방식으로 원하는 만큼 컴퓨터를 연결할 수 있으나, 그렇게 할 경우 컴퓨터의 수가 늘어날수록 복잡해진다. 예시로 1 : 1 연결 방식으로 10대의 컴퓨터를 연결한다 했을 때 이 경우 9개의 플러그가 각 컴퓨터에 필요하고 총 45개의케이블이 필요하다

세 번째 라우터 연결
이 문제를 해결하기 위해 우리는 라우터라고 하는 특수한 소형 컴퓨터에 연결한다. 이 라우터는 단 하나의 작업만 있는데 어느 한 컴퓨터에서 보낸 메시지가 올바른 대상 컴퓨터에 도착하는지 확인하는 것이다. 라우터를 시스템에 추가하면 10대의 컴퓨터 네트워크에는 10개의 케이블만 필요하다. 각 컴퓨터마다 단일 플러그와 10개의 플러그가 있는 하나의 라우터만이 필요하게 된다.

네 번째 네트워크 속 네트워크
그렇다면 수백, 수천, 수 십억 대의 컴퓨터를 연결하려면 그만큼의 플러그가 필요하고 모든 컴퓨터가 연결 되어야 할까? 일단, 라우터 자체로도 그만큼 확장할 수 없다. 그렇다면 어떻게 해야할까? 아까 라우터 또한 작은 컴퓨터 라고 했었다. 즉 각각의 라우터도 연결할 수 있다. 즉, 컴퓨터를 라우터에 연결하고, 라우터에서 라우터로 연결함으로써 연결을 무한히 확장할 수 있다.

그러나 이 방법또한 문제가 있다. 만약 400km의 유선 케이블을 연결해야 한다고 하면 어떻게 할것인가 사실 우리는 이미 모든 집집마다 연결된 케이블이 있다. 바로 '전화선'이다. 우리는 이 전화선을 통해 장거리 네트워크에 연결하기로 했다. 우리의 네트워크와 전화 시설을 연결하기 위해선, 모뎀(MODEM, MOdulator and DEModulator)이라는 특수 장비가 필요하다. 그러나 이 메시지가 전달되려면 인터넷 서비스 제공 업체(ISP, Internet Service Provider)에 연결되어야 한다. 따라서 우리 네트워크의 메시지는 ISP 네트워크의 네트워크를 통해 대상 네트워크로 전달된다. 인터넷은 아래 그림과 같이 이러한 전체 네트워크 인프라로 구성된다.


모뎀 : 우리 네트워크의 정보를 전화 시설에서 처리할 수 있는 정보로 바꾸며, 그 반대의 경우도 마찬가지이다.
```