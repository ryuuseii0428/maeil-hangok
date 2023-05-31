var albumNum = 0;
var albumImgs = document.getElementsByClassName("album");
var lyses = document.getElementsByClassName("lys");
var albumText = document.getElementsByClassName("albumMenuText");
var youtubehref = document.getElementsByClassName("youtubeButton");
var instarhref = document.getElementsByClassName("instarButton");
var twitterhref = document.getElementsByClassName("twitterButton");
var youtubeText = document.getElementsByClassName("youtubeText")
var instarText = document.getElementsByClassName("instarText")
var twitterText = document.getElementsByClassName("twitterText")

var singerName = [];

function AlbumRandomSys()
        {
            albumNum = parseInt(Math.random() * 12);
            if(albumNum == 0) num_0("結束バンド");
            if(albumNum == 1) num_1("結束バンド");
            if(albumNum == 2) num_2("레몬시티(Lemon City)");
            if(albumNum == 3) num_3("あいみょん");
            if(albumNum == 4) num_4("TEE");
            if(albumNum == 5) num_5("레몬시티(Lemon City)");
            if(albumNum == 6) num_6("향성(向性)");
            if(albumNum == 7) num_7("향성(向性)");
            if(albumNum == 8) num_8("향성(向性)");
            if(albumNum == 9) num_9("향성(向性)");
            if(albumNum == 10) num_10("향성(向性)");
            if(albumNum == 11) num_11("향성(向性)");
        }

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        function num_0(singer)
        {
            albumImgs[0].src = "./imgs/album_00.jpg";
            lyses[0].innerHTML = "<br/>出来れば世界を僕は塗り変えたい<br/>"+
                                "戦争をなくすような大逸れたことじゃない<br/>"+
                                "だけどちょっと それもあるよな<br/><br/>"+

                                "俳優や映画スターには成れない<br/>"+
                                "それどころか 君の前でさえも上手に笑えない<br/>"+
                                "そんな僕に術はないよな<br/>"+
                                "嗚呼...<br/><br/>"+

                                "何を間違った それさえもわからないんだ<br/>"+
                                "ローリング ローリング<br/>"+
                                "初めから持ってないのに胸が痛んだ<br/>"+
                                "僕らはきっとこの先も<br/>"+
                                "心絡まって ローリング ローリング<br/>"+
                                "凍てつく地面を転がるように走り出した<br/><br/>"+

                                "理由もないのに何だか悲しい<br/>"+
                                "泣けやしないから 余計に救いがない<br/>"+
                                "そんな夜を温めるように歌うんだ<br/><br/>"+

                                "岩は転がって 僕たちを何処かに連れて行くように ように<br/>"+
                                "固い地面を分けて命が芽生えた<br/>"+
                                "あの丘を越えたその先は<br/>"+
                                "光輝いたように ように<br/>"+
                                "君の孤独も全て暴き出す朝だ<br/><br/>"+

                                "赤い 赤い小さな車は君を乗せて<br/>"+
                                "遠く向こうの角を曲がって<br/>"+
                                "此処からは見えなくなった<br/><br/>"+
                                
                                "何をなくした それさえもわからないんだ<br/>"+
                                "ローリング ローリング<br/>"+
                                "初めから持ってないのに胸が痛んだ<br/>"+
                                "僕らはきっとこの先も<br/>"+
                                "心絡まって ローリング ローリング<br/>"+
                                "凍てつく世界を転がるように走り出した<br/>";

            albumText[0].innerHTML = "転がる岩、君に朝が降る - 結束バンド<br/>";
            youtubehref[0].href = "https://youtu.be/E5O0mCrUdAM";
            instarhref[0].href = "https://www.instagram.com/btr_isosta/";
            twitterhref[0].href = "https://twitter.com/BTR_anime";
            singerName[0] = singer;
        }

        function num_1(singer)
        {
            albumImgs[0].src = "./imgs/album_01.png";
            lyses[0].innerHTML = "<br/>(私+期待－不安)×ギター=ロックだ<br/>"+
                                "(私+君－時間)÷ギター=ライブだ<br/><br/>"+
                                
                                "戦々恐々になってる<br/>"+
                                "本番8小節前<br/>"+
                                "劣等感ぶっ壊して<br/>"+
                                "光の中へ飛び出した<br/><br/>"+
                                
                                "生まれたよ一つ<br/>"+
                                "新しい世界が<br/>"+
                                "心この時間 この場所 まるで絵空事<br/><br/>"+
                                
                                "毎分毎秒が奇跡<br/>"+
                                "刹那の煌めき<br/>"+
                                "日々の隙間に意味を落とせ<br/><br/>"+
                                
                                "上手くいかなくても<br/>"+
                                "前を向けなくても<br/>"+
                                "このフレーズ この歌<br/>"+
                                "本当に好きな音<br/><br/>"+
                                "頑張ったって爪弾き<br/>"+
                                "それでも爪弾き<br/><br/>"+
                                "届けてみよう 不器用でも<br/>"+
                                "束ねていこう 何処までも<br/><br/>"+
                                
                                "(私+世間－意思疎通)×理解=アウトだ<br/>"+
                                "私+君はバイアス 音÷無限の輪=バンドだ<br/><br/>"+
                                
                                "現実駆けずり回って<br/>"+
                                "理想が頓挫する実態<br/>"+
                                "幻想捏ねくり回して<br/>"+
                                "離島に正座する正体<br/>"+
                                "固定観念取っ払って<br/>"+
                                "予感を察知した今夜<br/><br/>"+
                                
                                "光の先へダイブする歌<br/><br/>"+
                                
                                "生まれたよ一つ<br/>"+
                                "新しい世界が<br/>"+
                                "この時間 この場所 まるで絵空事<br/><br/>"+
                                
                                "毎分毎秒が奇跡<br/>"+
                                "刹那の煌めき<br/>"+
                                "日々の隙間に意志よ 宿れ<br/><br/>"+
                                
                                "理解不能であっても<br/>"+
                                "世迷言としても<br/>"+
                                "このスケール このドライブ<br/>"+
                                "本当に好きな音<br/><br/>"+
                                
                                "どうやったって爪弾き<br/>"+
                                "それすら爪弾き<br/><br/>"+
                                
                                "届けてみよう 不器用でも<br/>"+
                                "奏でてみよう この日々を<br/>"+
                                "束ねていこう 今を 明日も もっと きっと<br/>"+
                                "何処までも<br/>";

            albumText[0].innerHTML = "光の中へ - 結束バンド<br/>";
            youtubehref[0].href = "https://youtu.be/29t3pJd75XU";
            instarhref[0].href = "https://www.instagram.com/btr_isosta/";
            twitterhref[0].href = "https://twitter.com/BTR_anime";
            singerName[0] = singer;
        }

        function num_2(singer)
        {
            albumImgs[0].src = "./imgs/album_02.jpg";
            lyses[0].innerHTML = "<br/>heaven on earth don’t you know that<br>"+
                                "when together<br>"+
                                "intertwining souls, we’re meant to belong<br>"+
                                "I’ll spend my time waiting for you<br>"+
                                "if you needed it to be loved,<br>"+
                                "ohh<br><br>"+
                                
                                "sometimes it’s too good to be true is it real<br>"+
                                "I trust you more than you’ll ever understand<br>"+
                                "every new day that we get<br>"+
                                "is a blessing to be let near your heart<br><br>"+
                                
                                "Don’t want nobody but you<br>"+
                                "Oh I just need you<br>"+
                                "nothing else matters in this lifetime<br>"+
                                "If I have you by<br>"+
                                "my side nothing can break me down I’ll be alright<br><br>"+
                                
                                "Don’t want nobody but you<br>"+
                                "Oh I just need you baby<br>"+
                                "everything makes sense when you lay<br>"+
                                "your head next to mine<br>"+
                                "I’ll be here, longing<br>"+
                                "for this moment everytime<br><br>"+
                                
                                "I know that you won’t let me go<br>"+
                                "you can tell me what is on your mind<br>"+
                                "just talk to me, no matter what I will<br>"+
                                "get us through the storms and clouds that we pass through, ooh<br><br>"+
                                
                                "for you there’s not a limit on sacrifice<br>"+
                                "there’s not a thing that ever would be too much<br>"+
                                "I’d risk it all for love<br>"+
                                "you’re worth more than life<br><br>"+
                                
                                "Don’t want nobody but you<br>"+
                                "Oh I just need you<br>"+
                                "nothing else matters in this lifetime<br>"+
                                "If I have you by<br>"+
                                "my side nothing can break me down I’ll be alright<br><br>"+
                                
                                "Don’t want nobody but you<br>"+
                                "Oh I just need you baby<br>"+
                                "everything makes sense when you lay<br>"+
                                "your head next to mine<br>"+
                                "I’ll be here, longing<br>"+
                                "for this moment everytime<br>";

            albumText[0].innerHTML = "need you - 레몬시티(Lemon City)<br>";
            youtubehref[0].href = "https://youtu.be/CWfjjYMJl6U";
            instarhref[0].href = "https://www.instagram.com/lemon_city11/";
            twitterhref[0].href = "";
            twitterText[0].style.textDecoration = "line-through";
            singerName[1] = singer;        
        }

        function num_3(singer)
        {
            albumImgs[0].src = "./imgs/album_03.jpg";
            lyses[0].innerHTML = "<br>少し寂しそうな君に<br>"+
                                "こんな歌を聴かせよう<br>"+
                                "手を叩く合図 雑なサプライズ<br>"+
                                "僕なりの精一杯<br><br>"+

                                "埃まみれ ドーナツ盤には<br>"+
                                "あの日の夢が踊る<br>"+
                                "真面目に針を落とす<br>"+
                                "息を止めすぎたぜ<br>"+
                                "さあ腰を落ろしてよ<br><br>"+

                                "フツフツと鳴り出す青春の音<br>"+
                                "乾いたメロディーで踊ろうよ<br><br>"+

                                "君はロックなんか聴かないと 思いながら<br>"+
                                "少しでも僕に近づいてほしくて<br>"+
                                "ロックなんか聴かないと 思うけれども<br>"+
                                "僕はこんな歌で あんな歌で 恋を乗り越えてきた<br><br>"+

                                "僕の心臓のBPMは<br>"+
                                "190になったぞ<br>"+
                                "君は気づくのかい？<br>"+
                                "なぜ今笑うんだい？<br>"+
                                "嘘みたいに泳ぐ目<br><br>"+

                                "ダラダラと流れる青春の音<br>"+
                                "乾いたメロディーは止まないぜ<br><br>"+

                                "君はロックなんか聴かないと 思いながら<br>"+
                                "あと少し僕に近づいてほしくて<br>"+
                                "ロックなんか聴かないと 思うけれども<br>"+
                                "僕はこんな歌で あんな歌で 恋に焦がれてきたんだ<br><br>"+

                                "君がロックなんか聴かないこと 知ってるけど<br>"+
                                "恋人のように寄り添ってほしくて<br>"+
                                "ロックなんか聴かないと 思うけれども<br>"+
                                "僕はこんな歌であんな歌で また胸が痛いんだ<br><br>"+

                                "君はロックなんか聴かないと 思いながら<br>"+
                                "少しでも僕に近づいてほしくて<br>"+
                                "ロックなんか聴かないと 思うけれども<br>"+
                                "僕はこんな歌で あんな歌で 恋を乗り越えてきた<br>"+
                                "恋を乗り越えてきた<br>"

            albumText[0].innerHTML = "君はロックを聴かない - あいみょん<br/>";
            youtubehref[0].href = "https://youtu.be/ARwVe1MYAUA";
            instarhref[0].href = "https://www.instagram.com/aimyon36";
            twitterhref[0].href = "https://twitter.com/aimyonGtter";
            singerName[2] = singer;
        }

        function num_4(singer)
        {
            albumImgs[0].src = "./imgs/album_04.jpg";
            lyses[0].innerHTML = "<br/>なぁ旅に出ないか なぁ海を見ないか<br>"+
                                "通り過ぎゆく日々の中<br>"+
                                "君に会い俺の中の何かがはじけた<br>"+
                                "伝えたくて言えなくて それがまた苦しくて<br>"+
                                "ああ どおすりゃいい 遠い空見上げて Naturally<br>"+
                                "そんな日は変わらない Diary<br><br>"+

                                "目にはうつらないもの 幸せの赤い糸<br>"+
                                "君の小指に運ぶ風 薬指に誰かの影<br>"+
                                "聞きたくて聞けなくて<br>"+
                                "それがまた Jealousy で I'm so crazy<br>"+
                                "今はまだ気づかぬふり<br>"+
                                "Please let me know, if you love me<br><br>"+

                                "いつからだろう君を思うと<br>"+
                                "(Baby you don't know why)<br>"+
                                "心痛くて眠れないよ<br>"+
                                "今夜さよならが切なくて<br>"+
                                "ほつれた糸たぐりよせて<br>"+
                                "誰よりも心こめて歌うよ<br><br>"+

                                "Baby I love you, I love you, I love you 何度も<br>"+
                                "Only one, only one 感じあえる<br>"+
                                "You always on my mind<br>"+
                                "強くなる全て大切に思える<br>"+
                                "(Baby I love you) I love you, I love you, I love you これからも<br>"+
                                "Only one, only one 変わらない<br>"+
                                "I'm always by your side 見上げよう<br>"+
                                "二人だけの空 ずっと ずっと<br><br>"+

                                "この街は変わってく 明日も明後日も<br>"+
                                "水に映った君の横顔<br>"+
                                "照らし出すオレンジの夕空よ<br>"+
                                "眩しくて消えないでそれがまた恋しくて<br>"+
                                "ああ もどかしい 世界の果てまで follow me<br>"+
                                "君の過去をうけとめる everything everything<br><br>"+

                                "波の静かな夜には歌い<br>"+
                                "網をかけて引き寄せた未来<br>"+
                                "夜の終わり近づくといつも<br>"+
                                "君の小さなリップにキスを<br>"+
                                "握ったこの手はなす事できずにまた寄り添って眠るの<br><br>"+

                                "Baby I love you, I love you, I love you いつまでも<br>"+
                                "Only one, only one そばにいて<br>"+
                                "You always on my mind<br>"+
                                "悲しみも全て大切に思える<br>"+
                                "(Baby I love you) Oh I love you, I love you, I love you これからも<br>"+
                                "Only one, only one 変わらない<br>"+
                                "I'm always by your side いつまでも<br>"+
                                "君のぬくもりを ずっと ずっと<br><br>"+

                                "光のない道が二人の<br>"+
                                "明日をうばったとしても<br>"+
                                "過ごした思い出たちと君を信じて<br>"+
                                "(Love you, love you, love you, love you)<br><br>"+

                                "Baby I love you, I love you, I love you 何度も<br>"+
                                "Only one, only one 感じあえる<br>"+
                                "You always on my mind<br>"+
                                "強くなる全て大切に思える<br>"+
                                "(Baby I love you) Oh I love you, I love you, I love you これからも<br>"+
                                "Only one, only one 変わらない<br>"+
                                "I always by your side 誓うよ<br>"+
                                "二人だけの日々<br>"+
                                "ずっと ずっと ずっと<br><br>"+

                                "Baby I will always fall in love with you...<br>"+
                                "I promise you, 'cause you'll be mine<br>"+
                                "I will always love you<br>";

            albumText[0].innerHTML = "ベイビー・アイラブユー - TEE<br/>";
            youtubehref[0].href = "https://youtu.be/l7z0QXvE1gs";
            instarhref[0].href = "";
            instarText[0].style.textDecoration = "line-through";
            twitterhref[0].href = "";
            twitterText[0].style.textDecoration = "line-through";
            singerName[3] = singer;
        }

        function num_5(singer)
        {
            albumImgs[0].src = "./imgs/album_05.jpg";
            lyses[0].innerHTML = "<br/>Something about ya has changed In my eyes<br>"+
                                "Suddenly I want you close all the time<br>"+
                                "It's so gradual<br>"+
                                "Slowly we fall<br>"+
                                "Until we can't deny<br><br>"+
                                
                                "Maybe we should just give in<br>"+
                                "We both know what we're wanting<br>"+
                                "Baby it could be just like heaven<br><br>"+
                                
                                "So can I call you mine<br>"+
                                "Baby let's make this climb<br>"+
                                "I can't pretend, I can't lie<br>"+
                                "I don't wanna be just friends<br>"+
                                "Cause this feels more like heaven<br><br>"+
                                
                                "I've never felt this sure of somebody<br>"+
                                "You got me like<br>"+
                                "obsessed, impressed,<br>"+
                                "how you move your body<br>"+
                                "Yeah you're so godly<br>"+
                                "Somehow I didn't see it before now<br>"+
                                "Like my heart was hiding<br>"+
                                "and you brought it out<br>"+
                                "Make me so nervous<br>"+
                                "How do I put this<br>"+
                                "Baby we could be just like heaven<br><br>"+
                                
                                "So can I call you mine<br>"+
                                "Baby let's make this climb<br>"+
                                "I can't pretend, I can't lie<br>"+
                                "I don't wanna be just friends<br>"+
                                "Cause this feels more like heaven<br><br>"+
                                
                                "La la la la, uh huh, ooh<br>"+
                                "La la la la la, uh huh, ooh<br><br>"+
                                
                                "Maybe we should just give in<br>"+
                                "We both know what we're wanting<br>"+
                                "Baby it could be just like heaven<br>";

            albumText[0].innerHTML = "need you - 레몬시티(Lemon City)<br>";
            youtubehref[0].href = "https://youtu.be/qq6F8G6in0U";
            instarhref[0].href = "https://www.instagram.com/lemon_city11/";
            twitterhref[0].href = "";
            twitterText[0].style.textDecoration = "line-through";
            singerName[1] = singer;        
        }

        function num_6(singer)
        {
            albumImgs[0].src = "./imgs/album_06.jpg";
            lyses[0].innerHTML = "<br>팽창해버린 채로 굳어진<br>"+
                                "감정 회로의 끝을 잡고서<br>"+
                                "어느 유인에서 자라나버린 마음이<br>"+
                                "내내 밟혀<br><br>"+

                                "너의 마음의 뒤편을 마주하는 날에는<br>"+
                                "추앙하는 마음과 절대적의 복종을<br>"+
                                "구름만 더 짙어져 해를 다 가린 채로<br>"+
                                "고장 나버린 낮<br><br>"+

                                "어디를 향해 깃을 피고 있는 건지<br>"+
                                "몰라 과열되어버린 채로 환상방황<br>"+
                                "우린 끝내 고도를 맞추지 못한 채<br>"+
                                "부서진 잔해처럼<br>"+
                                "사라진 섬처럼 되어<br><br>"+

                                "되살아나는 너와 나의 라퓨타<br>"+
                                "구겨진 날의 기억을 다시<br>"+
                                "빳빳하게 펼치면<br>"+
                                "마치 프로펠러처럼<br>"+
                                "회전하듯이 끊임없이 돌고 있어<br><br>"+

                                "지는 달의 저편이 나의 나락일 테니<br>"+
                                "사무치는 사애와 어느 상실을 앓고<br>"+
                                "나의 젖은 날개를 부둥켜 안은 채로<br>"+
                                "흐드러지는 밤<br><br>"+

                                "어디를 향해 깃을 피고 있는 건지<br>"+
                                "몰라 과열되어버린 채로 환상방황<br>"+
                                "우린 끝내 고도를 맞추지 못한 채<br>"+
                                "부서진 잔해처럼<br>"+
                                "사라진 섬처럼 되어<br><br>"+

                                "흐르는 배에 마음을 싣고<br>"+
                                "어떤 이유로 널 가둬두고<br>"+
                                "선잠에 빠져 지도에 지워진 곳으로<br>"+
                                "여기 우릴 내려<br><br>"+

                                "우린 지겹도록 영원을 걷는데<br>"+
                                "짙은 그림자에 몸이 다 닳도록<br>"+
                                "결국 가장 아픈 얼굴을 네게 매어<br>"+
                                "이제는 서로를 옥죄는 듯해<br><br>"+

                                "(영원을 걸어 몸이 닳을 때까지 아픈 얼굴의 네가 더 부서져)<br>"+
                                "어디를 향해 깃을 피고 있는 건지<br>"+
                                "몰라 결국 전부 타오르는 밤<br>"+
                                "우린 끝내 지도를 펼치지 못한 채<br>"+
                                "지워진 항로처럼<br>"+
                                "늘어진 닻처럼 되어<br>"
            
            albumText[0].innerHTML = "나태 비행 (Vocal. 설아) - 향성(向性)<br>";
            youtubehref[0].href = "https://youtu.be/pzGJ9O1WLAM";
            instarhref[0].href = "https://www.instagram.com/hyangseong_music/";
            twitterhref[0].href = "https://twitter.com/hyangseong_";
            singerName[4] = singer;        
        }
        
        function num_7(singer)
        {
            albumImgs[0].src = "./imgs/album_07.png";
            lyses[0].innerHTML = "<br>새하얀 토끼 너의 분홍 눈빛도<br>"+
                                "다 망쳐버렸지<br>"+
                                "잔인한 밤 세계를 삼키네<br>"+
                                "그의 이름 the queen of heart<br>"+
                                "난 여기 모두의 주인공이 될 순 없으니<br>"+
                                "환영 받지조차 못한 이방인이니<br>"+
                                "꼭두각시로 보진 말아줘<br>"+
                                "푸른 드레스는 찢어버릴 뿐<br><br>"+
                                
                                "손끝에 들려진 controller<br>"+
                                "쥐어 든 카드는 spade ACE<br>"+
                                "세상을 향하는 my trigger<br>"+
                                "drink it, 이제 시작되는 thriller<br><br>"+
                                
                                "붉은 장미를 강요하지 마<br>"+
                                "순백의 마음도 뒤덮여<br>"+
                                "모든 판결을 벗어 던지고<br>"+
                                "끝없는 다과회에서<br>"+
                                "우리 같이 춤을 추자<br>"+
                                "자유의 땅이야<br><br>"+
                                
                                "절하고 발을 맞추고<br>"+
                                "예의를 갖춰 여왕 폐하께<br>"+
                                "칼끝이 가리킨 곳은 여기인가<br>"+
                                "구덩이로 달린 건 나 이려나<br>"+
                                "피 묻은 선고 당신의 규칙<br>"+
                                "이제는 상관하지 않을래<br>"+
                                "초대받지 못한 탁자에<br>"+
                                "기대앉아 너를 겨눠볼게<br><br>"+
                                
                                "손끝에 들려진 controller<br>"+
                                "쥐어 든 카드는 spade ACE<br>"+
                                "세상을 향하는 my trigger<br>"+
                                "drink it, 이제 시작되는 thriller<br><br>"+
                                
                                "붉은 장미를 강요하지 마<br>"+
                                "순백의 마음도 뒤덮여<br>"+
                                "모든 판결을 벗어 던지고<br>"+
                                "끝없는 다과회에서<br><br>"+
                                
                                "서론이 시작된 길 위를<br>"+
                                "나는 뛰어가네<br>"+
                                "너를 따라 들어온 곳은<br>"+
                                "어둠이었나<br><br>"+
                                
                                "붉은 장미를 강요하지 마<br>"+
                                "순백의 마음도 뒤덮여<br>"+
                                "모든 판결을 벗어 던지고<br>"+
                                "끝없는 다과회에서<br>"+
                                "우리 같이 춤을 추자<br>"+
                                "자유의 땅이야<br>"+
                                "우리 같이 춤을 추자<br>"+
                                "자유의 땅이야<br>"
            
            albumText[0].innerHTML = "『그곳에 앨리스는 없었어』 (Vocal. 설아) - 향성(向性)<br>";
            youtubehref[0].href = "https://youtu.be/SWP9z4f4k90";
            instarhref[0].href = "https://www.instagram.com/hyangseong_music/";
            twitterhref[0].href = "https://twitter.com/hyangseong_";
            singerName[4] = singer;
        }

        function num_8(singer)
        {
            albumImgs[0].src = "./imgs/album_08.jpeg";
            lyses[0].innerHTML = "<br>희미한 안개가 드리운 거리"
                                +"<br>철갑의 마천루 푸르게 불타면"

                                +"<br><br>손끝에 깃드는 칠흑빛 심판"
                                +"<br>칼바람이 옷깃을 할퀴고 떠나네"

                                +"<br><br>숨죽인 괴물의 밤에"
                                +"<br>You must abandon what makes you weak"
                                +"<br>You must betray your belief and wish"
                                +"<br>If you've decided to kill yourself"
                                +"<br>끝까지 나아가"

                                +"<br><br>Check the blunder 꿰뚫어라 한계의 빈틈을"
                                +"<br>마지막 수를 두는 것은 이쪽일 테니"
                                +"<br>Pull the trigger 거짓 따위 날려 버리고 나서는"
                                +"<br>썩어빠진 세상에 해답을 써 내릴 뿐"

                                +"<br><br>So now let's start one's fairy tale that"
                                +"<br>No one knows who is the villain until the end"
                                +"<br>It's time for bout with all guns blazing"
                                +"<br>No one knows who is the hero until the end"

                                +"<br><br>Hey! Don't shut your eyes to your anger"
                                +"<br>Don't stale! Be a maverick you want to be"
                                +"<br>Don't doubt! The answer is in the back-rank"
                                +"<br><br>Rise and blow out for now just break it up"

                                +"<br>You must abandon what makes you lose"
                                +"<br>You must betray your scheme and sight"
                                +"<br>허상이 드러난 그때 다시 나아가"
                                +"<br>Take the gambit 간파해라 반격할 순간을"
                                +"<br>모든 의문은 해답을 위해 존재하니"

                                +"<br><br>Rid the stigma 후회마저 베어버리기 위해서"
                                +"<br>비릿한 미소를 삼켜 앞으로 나아갈 뿐"

                                +"<br><br>빛바랜 맹세들은"
                                +"<br>이곳에 살고있어"
                                +"<br>몇천 번을 되뇌고"
                                +"<br>몸부림쳐 갈망할 때"
                                +"<br>널 이끌던 목소리가 멎으면"
                                +"<br>눈을 뜰 수 있도록"

                                +"<br><br>Check the blunder 꿰뚫어라 한계의 빈틈을"
                                +"<br>마지막 수를 두는 것은 이쪽 일 테니"
                                +"<br>Pull the trigger 거짓 따위 날려 버리고 나서는"
                                +"<br>흑백으로 물든 도시에 해답을 써 내릴 뿐<br>"
            
            albumText[0].innerHTML = "불완전 이니그마 (Vocal.악월) - 향성(向性)<br>";
            youtubehref[0].href = "https://youtu.be/dUDvBqVhrqo";
            instarhref[0].href = "https://www.instagram.com/hyangseong_music/";
            twitterhref[0].href = "https://twitter.com/hyangseong_";
            singerName[4] = singer;
        }

        function num_9(singer)
        {
            albumImgs[0].src = "./imgs/album_09.jpg";
            lyses[0].innerHTML = "<br>빛 조차 비추지 않는"
                                +"<br>누구도 닿지 못한 곳에"
                                +"<br>난 홀린채 바라보며 떨어지는"
                                +"<br>이 곳에 삼켜져가"

                                +"<br><br>LIke a Carousel Carousel"
                                +"<br>마치 룰렛처럼"
                                
                                +"<br><br>Like a Parasite Parasite"
                                +"<br>네 안에 퍼져가고"

                                +"<br><br>Like a Dai Sai Dai Sai"
                                +"<br>가늠할 수 없는 걸"
                                +"<br>가려지는 주사위 처럼"

                                +"<br><br>That Bluffing 건방진"
                                +"<br>안개 속에 널 비춰"
                                +"<br>Deep in Silence 더 조용히 네 목을 옥죄어가고"
                                +"<br>피할 수 없는 Maze Race"
                                +"<br>너의 패를 숨긴 순간"
                                +"<br>Truth? or Dare?"

                                +"<br><br>자 Showdown 모든 걸 다 걸어보는거야"
                                +"<br>벗겨지는 Veil 느껴지는 Vile"
                                +"<br>패자는 누구?"
                                +"<br>삼켜진 Trick Heart 느껴줘"
                                +"<br>널 위한 게임이야"
                                +"<br>모든 걸 내걸테니"
                                +"<br>시들어가는 이 곳에"

                                +"<br><br>기다리고 있던건 미치광이의 판 그 RAGE"
                                +"<br>다 미쳐 돌아가 흔들리는 너의 HEART 그 속에"
                                +"<br>의심스런 그 말에 넘어가진 않아 I'm Sorry"
                                +"<br>날 넘겨보고 싶다면 더 솔직해져"

                                +"<br><br>Show Your Fingertips"
                                +"<br>장난은 여기까지"

                                +"<br><br>Shake the Rum and Jin"
                                +"<br>술잔을 가득 채워"

                                +"<br><br>Take me to the top"
                                +"<br>나를 왕좌에 앉혀"
                                +"<br>내게 바쳐줘 모든 것을"

                                +"<br><br>That Bluffing 건방진"
                                +"<br>안개 속에 널 비춰"
                                +"<br>Deep in Silence 더 조용히 네 목을 옥죄어가고"
                                +"<br>부러진 날개는 깊은 혈관 속에 녹아 내려가"

                                +"<br><br>Truth? or Dare?"
                                +"<br>자 Showdown"
                                +"<br>모든 걸 다 내려놓는거야"
                                +"<br>전율하는 Feel 넘겨지는 Card"
                                +"<br>승자는 누구?"
                                +"<br>달콤한 Trick Heart"
                                +"<br>보여줘 감춰진 네 Psyche"
                                +"<br>쏟아줘 Raise Everything"
                                +"<br>짧아져버린 이 밤에<br>"
            
            albumText[0].innerHTML = "Royal Flush (Vocal. NXNX) - 향성(向性)<br>";
            youtubehref[0].href = "https://youtu.be/6nfDIPFIEQw";
            instarhref[0].href = "https://www.instagram.com/hyangseong_music/";
            twitterhref[0].href = "https://twitter.com/hyangseong_";
            singerName[4] = singer;
        }

        function num_10(singer)
        {
            albumImgs[0].src = "./imgs/album_10.jpg";
            lyses[0].innerHTML = "<br>가열된 마음 터지는 Ring My Bell"
                                +"<br>피어나버린 미로 속의 Fear"
                                +"<br>흔들거리는 네 눈동자에 Shooting My Love"
                                +"<br>오늘 밤 너와 단둘이"
                                +"<br>Your Phantom Phobia"

                                +"<br><br>밤을 가린 커튼 너머에 웅크린 채로"
                                +"<br>홀로 앉아있는 건 너 하나"
                                +"<br>감춰진 책장 속 그 안을 들여본 순간"
                                +"<br>너의 악몽은 시작된거야"
                                +"<br>어디에 숨어있을까 문틈 사이로"
                                +"<br>비친 너는 어떤 표정이려나"
                                +"<br>네 피부를 타고서 흐르는 비명소리에"
                                +"<br>주체할 수도 없을거야"

                                +"<br><br>뒷걸음치면 난"
                                +"<br>네 마음속 더 깊이"
                                +"<br>조금만 더 다가갈게"
                                +"<br>거칠어진 네 숨에 맞춰"
                                +"<br>춤출 테니"

                                +"<br><br>가열된 마음 터지는 Ring My Bell"
                                +"<br>피어나버린 미로 속의 Fear"
                                +"<br>흔들거리는 네 눈동자에 Shooting My Love"
                                +"<br>오늘 밤 너와 단둘이"
                                +"<br>자 다시 한번"
                                +"<br>하나 둘 셋 이제 시작할게"
                                +"<br>조금 더 세게 나를 안아줘 Come on ma Darling"
                                +"<br>파랗게 질린 Lip에 Nip Kiss"
                                +"<br>점점 더 조여올 테니"
                                +"<br>Your Phantom Phobia"

                                +"<br><br>(Step One) ah 소리 없는 Pray 침묵하는 Mirror"
                                +"<br>(Step Two) 눈을 감아 Slowly"
                                +"<br>그럼에도 You Can See it"
                                +"<br>(Tik Tok) 불을 붙여 Burn 끌어안고 세게 Runnin"
                                +"<br>(Tik Tok) 소리 내어 킥킥 방해꾼은 Kick it"
                                +"<br>다시 Replay"

                                +"<br><br>모두 어디로 간 걸까 손 틈 사이로"
                                +"<br>비춰진 내 모습 감추지 않아"
                                +"<br>네 절망과 공포에 얼룩진 열매를 쥐고"
                                +"<br>너를 한입에 삼킬 거야"
                                +"<br>뒷걸음치면 난"
                                +"<br>네 마음속 더 깊이"
                                +"<br>조금만 더 다가갈게"
                                +"<br>흐트러진 네 몸에 맞춰"
                                +"<br>춤출 테니"

                                +"<br><br>가열된 마음 터지는 Ring My Bell"
                                +"<br>피어나버린 미로 속의 Fear"
                                +"<br>흔들거리는 네 눈동자에 Shooting My Love"
                                +"<br>오늘 밤 너와 단둘이"
                                +"<br>자 다시 한번"
                                +"<br>하나 둘 셋 이제 시작할게"
                                +"<br>조금 더 세게 나를 안아줘 Come on ma Darling"
                                +"<br>파랗게 질린 Lip에 Nip Kiss"
                                +"<br>점점 더 조여올 테니"
                                +"<br>끊어져 버린 낮"
                                +"<br>끝나지 않는 밤"
                                +"<br>Your Phantom Phobia<br>"
            
            albumText[0].innerHTML = "Phantom Phobia (Vocal.NXNX) - 향성(向性)<br>";
            youtubehref[0].href = "https://youtu.be/cgetRnnEWS0";
            instarhref[0].href = "https://www.instagram.com/hyangseong_music/";
            twitterhref[0].href = "https://twitter.com/hyangseong_";
            singerName[4] = singer;
        }

        function num_11(singer)
        {
            albumImgs[0].src = "./imgs/album_11.jpg";
            lyses[0].innerHTML = "<br>눈부신 밤마다 짙은 그을음 아래로"
                                +"<br>비루한 손길도 닿지 않는 곳에서"
                                +"<br>언젠가 쥐여준 가시 박힌 꽃 하나가"
                                +"<br>한 줌 흔들리는 마음속에 다시 피어나"
                                +"<br>이젠 버려둔 아픔만 남아 있는데"
                                +"<br>차라리 이도 저도 아닌 숨결이"
                                +"<br>흩어지는 게 좋아"

                                +"<br><br>놓친 손끝에 날 비웃듯 찬란한 빛이 흘러내리면"
                                +"<br>이런 세상에 꽃 하나쯤은 시들어도 괜찮아"
                                +"<br>미쳐 웃을 때 잠들어 있던 어리숙한 나의 마음을"
                                +"<br>(Don't look just leave alone)"
                                +"<br>더 야속하게 밀어 넘겨주길"

                                +"<br><br>하루하루 적어나간 나의 거짓된 초상을"
                                +"<br>메마른 입술을 열어 저주하고서"
                                +"<br>한참 남아있는 하얀 미래는 깨어나"
                                +"<br>두 손을 적셔도 채워지지 않게 연기해"
                                +"<br>이젠 버려둔 아픔만 남아 있는데"
                                +"<br>차라리 이도 저도 아닌 숨결이"
                                +"<br>흩어지는 게 좋아"

                                +"<br><br>놓친 손끝에 날 비웃듯 찬란한 빛이 흘러내리면"
                                +"<br>이런 세상에 꽃 하나쯤은 시들어도 괜찮아"
                                +"<br>미쳐 웃을 때 잠들어 있던 어리숙한 나의 마음을"
                                +"<br>(Don't look just leave alone)"
                                +"<br>더 야속하게 밀어 넘겨주길"

                                +"<br><br>더 깊은 불안 속에 빠져"
                                +"<br>마음에 떠오르는 열망"
                                +"<br>결국엔 이 또한 끝날 이야기"
                                +"<br>차라리 이도 저도 아닌 삶은"
                                +"<br>토해내 버릴 수밖에"

                                +"<br><br>놓친 손끝에 날 비웃듯 찬란한 빛이 흘러내리면"
                                +"<br>이런 세상에 꽃 하나쯤은 시들어도 괜찮아"
                                +"<br>미쳐 웃을 때 잠들어 있던 어리숙한 나의 마음을"
                                +"<br>(Don't look just leave alone)"
                                +"<br>더 야속하게 밀어 넘겨주길<br>"
            
            albumText[0].innerHTML = "Cistus (Vocal.악월) - 향성(向性)<br>";
            youtubehref[0].href = "https://youtu.be/cgetRnnEWS0";
            instarhref[0].href = "https://www.instagram.com/hyangseong_music/";
            twitterhref[0].href = "https://twitter.com/hyangseong_";
            singerName[4] = singer;
        }
        
        