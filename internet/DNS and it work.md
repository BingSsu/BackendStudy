# DNS
DNS란?
```
DNS(Domain Name System)는 사람이 읽을 수 있는 도메인 이름을 머신이 읽을 수 있는 IP주소로 변환하는 것이다.

스마트폰이나 노트북 부터 대규모 소매 웹 사이트의 콘텐츠를 서비스하는 서버에 이르기까지 인터넷상의 모든 컴퓨터들은 숫자를 사용하여 서로를 찾고 통신한다. 이러한 숫자를 우리는 IP라고 부른다. 그러나 웹 브라우저를 찾아 들어갈때는 example.com과 같은 도메인 주소를 사용해도 원하는 웹 사이트로 찾아갈 수 있다.
Amazon Route 53과 같은 DNS 서비스는 전 세계에 배포된 서비스로서, www.example.com과 같이 사람이 읽을 수 있는 이름을 192.0.2.1과 같은 숫자 IP 주소로 변환하여 컴퓨터가 서로 통신할 수 있도록 한다. 인터넷의 DNS 시스템은 이름과 숫자 간의 매핑을 관리하여 마치 전화번호부와 같은 역할을 한다.

 DNS 서버는 이름에 대한 요청을 IP 주소로 변환하여 최종 사용자가 도메인 이름을 웹 브라우저에 입력할 때 해당 사용자를 어떤 서버에 연결할 것인지를 제어하는데 이 요청을 쿼리라고 부른다.
```

DNS가 트래픽을 웹 어플리케이션에 라우팅하는 방법
```
1. 사용자가 도메인 주소를 웹 브라우저에 입력

2. www.example.com에 대한 요청을 인터넷 서비스 제공업체가 관리하는 DNS 해석기로 라우팅됨

3. ISP의 DNS 해석기가 www.example.com에 대한 요청을 DNS 루트 이름 서버에 전달

4. DNS 해석기가 www.example.com에 대한 요청을 이번엔 .com 도메인의 TLD 이름 서버중 하나에 다시 전달/ .com 도메인의 이름 서버는 example.com과 연관된 4개의 Amazon Route 53 이름 서버의 이름을 사용하여 요청에 응답.

5. DNS 해석기가 Amazon Route 53 이름 서버 하나를 선택해 www.example.com에 대한 요청을 해당 이름 서버에 전달

6. Amazon Route 53 이름 서버가 example.com 호스팅 영역에서 www.example.com 레코드를 찾아 웹 서버의 IP 주소 192.0.2.44 등 연관된 값을 받고 이 IP 주소를 DNS 해석기로 반환

7. 주소를 반환 받은 DNS 해석기가 값을 웹 브라우저에 반환 또한, DNS 해석기는 다음에 누군가가 example.com을 탐색할 때 좀 더 빠르게 응답할 수 있도록 사용자가 지정하는 일정 기간 동안 example.com의 IP 주소를 캐싱(저장)

8. 웹 브라우저가 DNS 해석기로부터 얻은 주소로 www.example.com에 대한 요청 전송

9. 192.0.2.44에 있는 웹 서버 또는 그 밖의 리소스는 www.example.com의 웹 페이지를 웹 브라우저로 반환하고, 웹 브라우저는 이 페이지를 표시
```