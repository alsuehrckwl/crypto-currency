# CryptoCurrency
> coingecko api를 활용하여 가상자산 목록 및 상세 데이터를 조회 할 수 있는 토이 프로젝트 입니다.

## Content
1. [디렉토리](#directory)
2. [설치 및 실행 방법](#installation)
3. [Dependencies](#dependencies)
4. [결과](#solution)

<h2 id="directory">
    1. 디렉토리
</h2>

### Folder Structure

```bash
  └── src
      ├── @shared               # 프로젝트 전체에서 공유되어 사용되는 모듈 모음
      │    ├── api              # axios를 사용하여 http통신을 위한 get, delete, post, put 구현체
      │    ├── componnents      # 공통으로 사용될 컴포넌트 입니다. (ex: header, menu...)
      │    ├── constants        # 공통으로 사용될 상수들 입니다.
      │    ├── hooks            # 공통으로 사용될 커스텀 hooks 입니다.
      │    ├── stores           # 공통으로 사용될 stores 입니다. (mobx)
      │    └── util             # 공통으로 사용될 util 입니다.
      ├── pages                 # router 기준 페이지 모듈, 사용 유무에 따라 하위폴더를 구성합니다.
      │    └── [route]          # route path에 맞는 폴더 명입니다.
      ├── aseets                # image와 svg같은 정적 파일을 등록하는 폴더입니다.
      └── styles                # 공용으로 사용될 style입니다.
```

<h2 id="installation">
    2. 설치 및 실행 방법
</h2>

### Front-End
~~~javascript
$> yarn or npm install

$> yarn start or npm run start
~~~

<h2 id="dependencies">
    3.Dependencies
</h2>


| Dependency | description |
|-----------------------|------------------------------|
| autobind-decorator | this를 바인드 해주는 유틸 |
| axios | 서버와통신을 위한 유틸 |
| clsx | 컴포넌트에서 스타일에 조건을 위한 유틸 |
| mobx | state management를 위하여 사용 |
| mobx-react-lite | mobx를 react에서 사용하기 위하여 사용 |
| mobx-util | mobx에서 generator함수를 사용하기 위하여 사용 |
| styled-components | 스타일을 컴포넌트화 하기 위하여 사용 |

