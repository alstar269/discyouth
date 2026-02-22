const DATA = {
  questions: [
    { q: "조별 과제가 주어졌을 때, 나의 첫 마디는?", options: ["자, 시간 없으니까 역할부터 빨리 나누자. 내가 발표할게.", "우리 조 대박! 끝나고 마라탕 먹으러 갈 사람?", "너희들은 어떤 역할 하고 싶어? 남는 거 내가 할게.", "잠깐만, 선생님이 주신 평가 기준표부터 꼼꼼히 읽어보자."] },
    { q: "친한 친구가 우울하다며 갑자기 울음을 터뜨렸을 때, 나는?", options: ["누가 그랬어? 어떻게 해결해 줄까?", "헐 어떡해 ㅠㅠ (같이 안아주며) 매점 가서 단 거 먹자!", "(조용히 등을 토닥이며) 무슨 일 있었어? 천천히 다 말해봐.", "언제, 어디서, 누구 때문에 그런 건지 정확히 말해줄래?"] },
    { q: "주말에 친구들과 놀러 가기로 했을 때, 나의 스타일은?", options: ["이번엔 여기로 가자. 몇 시까지 모여!", "완전 신난다! 다른 애들도 더 부를까?", "난 너희들이 가고 싶은 곳이면 다 좋아.", "버스 시간표랑 맛집 리뷰 다 찾아봤어. 이 코스로 움직이자."] },
    { q: "짝꿍이 내 지우개를 허락 없이 가져가서 쓰고 있을 때, 나는?", options: ["야, 내 지우개 왜 마음대로 써? 당장 돌려줘.", "오~ 내 지우개 탐났어? 빌려줄 테니까 이따 젤리 사줘~", "(기분은 좀 그렇지만) 쓰고 돌려주겠지 뭐...", "남의 물건을 쓸 때는 먼저 물어보는 게 예의 아닐까?"] },
    { q: "학교 축제 장기자랑에 우리 반이 나가게 되었다! 나의 포지션은?", options: ["연습 일정을 짜고 애들을 이끄는 '리더'", "무대 정중앙에서 시선을 즐기는 '센터'", "뒤에서 조용히 소품을 챙겨주는 '서포터'", "안무 대형이 맞는지, 음악 타이밍이 맞는지 체크하는 '디렉터'"] },
    { q: "반 단톡방에서 아무도 대답을 안 하는 정적이 흐를 때, 나는?", options: ["다들 확인했으면 빨리 대답 좀 해.", "(웃긴 짤이나 이모티콘을 보내며 분위기를 띄운다)", "(누군가 먼저 말할 때까지 기다렸다가 조심스럽게 동조한다)", "(내가 정확히 아는 정보나 사실일 때만 대답한다)"] },
    { q: "새로 산 옷을 입고 왔는데, 친구가 \"그 옷 좀 별로다\"라고 한다면?", options: ["내 맘이야. 난 예쁘기만 한데 뭐.", "진짜? 이상해? 아씨.. 다른 거 입을걸ㅠㅠ", "그래? 알았어... (겉으론 웃지만 하루 종일 신경 쓰임)", "어떤 부분이 별로라는 건지 구체적으로 말해줄래?"] },
    { q: "체육대회나 게임을 할 때 나의 승부욕은?", options: ["무조건 이겨야 한다! 지는 건 참을 수 없다.", "이기면 좋고, 져도 재밌게 즐겼으면 그만이다.", "나 때문에 우리 팀이 질까 봐 조마조마하고 미안하다.", "규칙을 어기면서까지 이기고 싶지는 않다. 정정당당이 최고."] },
    { q: "처음 보는 친구와 짝꿍이 되었을 때, 나는?", options: ["먼저 말을 걸고 통성명부터 확실히 한다.", "폭풍 수다를 떨며 10분 만에 베프가 된다.", "어색하게 미소만 짓고 먼저 말 걸어주기를 기다린다.", "어떤 친구인지 파악하기 위해 조용히 관찰한다."] },
    { q: "방과 후 자유시간이 주어졌을 때, 내가 가장 하고 싶은 것은?", options: ["평소에 목표했던 운동이나 자기계발 하기", "친구들과 코인노래방이나 피시방 가서 신나게 놀기", "집에서 넷플릭스 보거나 침대에 누워 편안하게 쉬기", "평소 관심 있던 분야의 책을 읽거나 정보 찾아보기"] },
    { q: "다 같이 배달 음식을 시켜 먹기로 했을 때, 메뉴를 고르는 방식은?", options: ["오늘은 치킨 먹자! 내가 시킬게.", "요즘 엽떡 신메뉴 완전 핫하대! 그거 먹어보자!", "난 다 괜찮아, 너희들 먹고 싶은 걸로 시켜.", "리뷰 별점 5점짜리랑 배달비 제일 싼 곳으로 비교해 볼게."] },
    { q: "화가 머리끝까지 났을 때, 나의 행동은?", options: ["참지 않고 그 자리에서 화난 이유를 따져 묻는다.", "감정이 격해져서 목소리가 커지고 말이 많아진다.", "갈등이 싫어서 일단 자리를 피하거나 입을 닫아버린다.", "논리적으로 조목조목 상대방의 잘못을 반박한다."] },
    { q: "내 방의 현재 상태는?", options: ["내가 필요한 물건만 딱 꺼내놓고 쓸 수 있는 상태.", "좀 어질러져 있지만, 나름의 규칙과 느낌이 있는 상태.", "포근하고 아늑해서 한 번 들어가면 나오기 싫은 상태.", "모든 물건이 제자리에 각 맞춰 정리되어 있는 상태."] },
    { q: "시험 기간에 공부하는 나의 스타일은?", options: ["목표 점수를 딱 정해놓고 핵심만 빠르게 파고든다.", "도서관이나 카페에서 친구들과 같이(떠들며) 해야 잘 된다.", "늘 하던 익숙한 내 자리에서 차분하고 꾸준하게 한다.", "완벽한 스터디 플래너를 짜고 디테일한 부분까지 암기한다."] },
    { q: "친구가 내 생일 선물을 줬을 때 가장 기분 좋은 반응은?", options: ["내가 딱 필요했던 실용적이고 쓸모 있는 선물.", "포장부터 화려하고 서프라이즈 파티와 함께 주는 선물.", "진심이 듬뿍 담긴 정성스러운 손 편지와 의미 있는 선물.", "내가 평소에 갖고 싶다고 말했던 걸 정확히 기억하고 사준 선물."] },
    { q: "놀이기구를 타려고 1시간 넘게 줄을 서야 할 때, 나는?", options: ["아, 시간 아까워. 그냥 딴 거 타자.", "친구들과 사진 찍고 틱톡 찍으면서 놀면 1시간 순삭!", "조금 지루하긴 하지만 참고 끝까지 얌전히 기다린다.", "줄이 줄어드는 속도를 계산하며 예상 탑승 시간을 유추한다."] },
    { q: "대화 중 누군가 내 말을 끊었을 때, 나는?", options: ["\"내 말 아직 안 끝났어.\"라고 단호하게 끊고 다시 내 말을 한다.", "끊긴 김에 나도 그 친구의 다른 주제로 넘어가서 신나게 떠든다.", "기분이 상해도 표현하지 않고 상대방의 이야기를 끝까지 들어준다.", "그 사람이 말을 마칠 때까지 기다렸다가, 정확히 내가 멈춘 부분부터 다시 이어 나간다."] },
    { q: "진로를 결정해야 할 때, 나의 기준은?", options: ["내가 주도적으로 무언가를 성취하고 리더가 될 수 있는 일.", "사람들과 즐겁게 소통하고 내 인기를 끌어올릴 수 있는 일.", "경쟁이 심하지 않고 안정적이며 사람들을 돕는 일.", "전문적인 지식을 바탕으로 정확하게 분석하고 해결하는 일."] },
    { q: "친구 관계에서 내가 가장 중요하게 생각하는 것은?", options: ["서로의 목표를 존중하고 의리가 있는 관계.", "만나면 항상 텐션이 높고 즐거운 추억을 많이 쌓는 관계.", "언제나 내 편이 되어주고 편안하게 의지할 수 있는 관계.", "약속을 잘 지키고 서로에게 솔직하고 신뢰할 수 있는 관계."] },
    { q: "성격 검사(지금 하고 있는 이 검사!)를 할 때 나의 마음가짐은?", options: ["빨리 끝내고 결과가 어떻게 나오는지 결론만 보고 싶다.", "결과가 재밌게 나오면 인스타 스토리에 공유해야지!", "나는 친구들에게 얼마나 좋은 친구로 나올까 기대된다.", "이 문항들이 정말 과학적이고 정확하게 나를 분석할 수 있을까?"] }
  ],
  results: {
    D: {
      title: "🔥 불도저 직진 리더",
      summary: "\"답답한 건 못 참아! 내가 대장함.\"",
      charm: "목표 잡히면 바로 풀악셀 밟는 추진력! 어떤 상황에서도 당황 안 하는 든든한 해결사 재질임.",
      style: "빙빙 돌리는 거 딱 질색. 핵심만 팩트로 꽂아버리는 시원시원한 스타일.",
      tip: "난 '효율'이 국룰이지만, 누군가는 '감정'이 우선임. 조언 전에 \"많이 속상했지?\" 한마디만 얹어도 티키타카 레벨업!"
    },
    I: {
      title: "✨ 인간 비타민 메이커",
      summary: "\"노잼은 범죄임! 다 같이 텐션 올리자!\"",
      charm: "처음 봐도 베프 먹는 미친 친화력! 리액션 혜자에 긍정 에너지 뿜뿜하는 우리 반 분위기 메이커.",
      style: "감정 표현 풍부하고, 썰 풀기 시작하면 시간 순삭시키는 마법사 스타일.",
      tip: "내 텐션에 취해서 친구 말 끊고 있진 않은지 체크! 진지한 고민 상담 때는 장난기 빼고 들어주는 게 진정한 갓생 리더임."
    },
    S: {
      title: "🍀 힐링 마스코트",
      summary: "\"네가 좋으면 나도 좋아. 우리 싸우지 말자.\"",
      charm: "내 말 다 들어주는 최고의 리스너! 갈등 극혐하고 한 번 사귀면 우정 끝까지 책임지는 의리파.",
      style: "내 주장 펼치기보다 상대방 의견에 공감하고 맞장구쳐주는 서포터 스타일.",
      tip: "착한 사람 병은 이제 그만! \"난 이게 더 좋아\"라고 솔직하게 말해도 친구들은 널 여전히 아끼고 좋아함."
    },
    C: {
      title: "🔎 팩트폭격기 분석가",
      summary: "\"대충은 없음. 한 번 할 때 제대로 갓생!\"",
      charm: "결정할 때 뇌절 안 하는 스마트함! 맡은 일은 완벽하게 끝내는 책임감에 논리적인 조언까지 가능한 팩트 폭격기.",
      style: "감정보다는 '사실'과 '논리'를 기반으로 정확하게 말하는 걸 선호함.",
      tip: "내 팩트 체크가 가끔 친구한텐 '얼음'처럼 차가울 수 있음. 실수해도 \"그럴 수 있지~\"라며 가끔은 빈틈 보여주는 여유가 필요함."
    }
  }
};

const CHARACTERS = {
  D: `<svg viewBox="0 0 100 100" class="char-svg"><circle cx="50" cy="50" r="45" fill="#afff00"/><rect x="20" y="30" width="60" height="15" rx="2" fill="black"/><path d="M30 45 L30 55 M70 45 L70 55" stroke="black" stroke-width="4"/><path d="M40 75 Q50 65 60 75" stroke="black" stroke-width="5" fill="none"/></svg>`,
  I: `<svg viewBox="0 0 100 100" class="char-svg"><circle cx="50" cy="50" r="45" fill="#ff007a"/><path d="M25 40 L75 40 L70 25 L30 25 Z" fill="black"/><circle cx="35" cy="50" r="6" fill="white"/><circle cx="65" cy="50" r="6" fill="white"/><path d="M35 70 Q50 85 65 70" fill="white"/></svg>`,
  S: `<svg viewBox="0 0 100 100" class="char-svg"><circle cx="50" cy="50" r="45" fill="#00e0ff"/><path d="M20 40 Q50 20 80 40" stroke="white" stroke-width="8" fill="none"/><circle cx="35" cy="50" r="4" fill="black"/><circle cx="65" cy="50" r="4" fill="black"/><path d="M35 70 Q50 80 65 70" stroke="black" stroke-width="4" fill="none"/></svg>`,
  C: `<svg viewBox="0 0 100 100" class="char-svg"><circle cx="50" cy="50" r="45" fill="#ffffff"/><rect x="20" y="35" width="25" height="15" fill="none" stroke="black" stroke-width="3"/><rect x="55" y="35" width="25" height="15" fill="none" stroke="black" stroke-width="3"/><line x1="45" y1="42" x2="55" y2="42" stroke="black" stroke-width="3"/><path d="M40 75 L60 75" stroke="black" stroke-width="5"/></svg>`
};

class DiscApp extends HTMLElement {
  constructor() {
    super();
    this.state = 'HOME';
    this.currentIndex = 0;
    this.scores = { D: 0, I: 0, S: 0, C: 0 };
    this.render();
  }

  setState(newState) {
    this.state = newState;
    this.render();
    window.scrollTo(0, 0);
  }

  handleAnswer(index) {
    const types = ['D', 'I', 'S', 'C'];
    this.scores[types[index]]++;
    
    if (this.currentIndex < DATA.questions.length - 1) {
      this.currentIndex++;
      this.render();
    } else {
      this.setState('RESULT');
    }
  }

  getTopType() {
    const s = this.scores;
    return ['D', 'I', 'S', 'C'].reduce((a, b) => s[a] >= s[b] ? a : b);
  }

  reset() {
    this.currentIndex = 0;
    this.scores = { D: 0, I: 0, S: 0, C: 0 };
    this.setState('HOME');
  }

  render() {
    if (this.state === 'HOME') {
      this.innerHTML = `
        <div class="screen home">
          <h1>DISC<br>VIBE CHECK</h1>
          <p class="hero-text">친구 사이 내 티키타카 스타일은?</p>
          
          <div class="why-section">
            <b>왜 하냐고?</b><br>
            친구랑 대화하다 갑자기 <b>'갑분싸'</b> 되거나 <b>'뇌절'</b>하기 싫지? 내 소통 바이브를 알아야 진정한 <b>'갓생'</b> 소통이 가능함. 너의 리듬을 체크해봐!
          </div>

          <div class="char-grid">
            <div class="char-item">${CHARACTERS.D}<span>불도저</span></div>
            <div class="char-item">${CHARACTERS.I}<span>비타민</span></div>
            <div class="char-item">${CHARACTERS.S}<span>힐링</span></div>
            <div class="char-item">${CHARACTERS.C}<span>팩트</span></div>
          </div>

          <button class="btn btn-primary" onclick="this.closest('disc-app').setState('QUIZ')">바이브 체크 시작</button>
          
          <div class="footer">
            TRINITY AI FORUM // STREET EDITION
          </div>
        </div>
      `;
    } else if (this.state === 'QUIZ') {
      const q = DATA.questions[this.currentIndex];
      const progress = ((this.currentIndex + 1) / DATA.questions.length) * 100;
      
      this.innerHTML = `
        <div class="screen quiz">
          <div class="progress-container">
            <div class="progress-bar" style="width: ${progress}%"></div>
          </div>
          <p style="color: var(--secondary); font-family: 'Black Han Sans'; font-size: 1.2rem; margin-bottom: 8px;">STEP ${this.currentIndex + 1}</p>
          <h2 style="font-size: 1.3rem; margin-bottom: 24px; color: #fff;">${q.q}</h2>
          
          <div class="options">
            ${q.options.map((opt, i) => `
              <button class="btn btn-option" onclick="this.closest('disc-app').handleAnswer(${i})">${opt}</button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (this.state === 'RESULT') {
      const topType = this.getTopType();
      const result = DATA.results[topType];
      
      this.innerHTML = `
        <div class="screen result">
          <div class="result-card">
            <div class="result-header">
              <div class="result-char">${CHARACTERS[topType]}</div>
              <div class="result-title">${result.title}</div>
            </div>
            
            <div class="result-summary">${result.summary}</div>
            
            <div class="section-title">REAL 매력 (장점)</div>
            <p class="content-text">${result.charm}</p>
            
            <div class="section-title">내 대화 스타일</div>
            <p class="content-text">${result.style}</p>
            
            <div class="section-title">🤝 티키타카 LEVEL UP</div>
            <div class="tip-box">${result.tip}</div>
          </div>
          
          <button class="btn btn-primary" style="margin-top: 32px;" onclick="this.closest('disc-app').reset()">다시 체크하기</button>
          
          <div class="footer">
             TRINITY AI FORUM // STREET EDITION
          </div>
        </div>
      `;
    }
  }
}

customElements.define('disc-app', DiscApp);
