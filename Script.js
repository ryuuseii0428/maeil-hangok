var albumNum = 0;
var albumImgs = document.getElementsByClassName("album");
var lyses = document.getElementsByClassName("lys");
var albumText = document.getElementsByClassName("albumMenuText");
var youtubehref = document.getElementsByClassName("youtubeButton");
var instarhref = document.getElementsByClassName("instarButton");
var twitterhref = document.getElementsByClassName("twitterButton");
var twitterText = document.getElementsByClassName("twitterText")

function AlbumRandomSys()
        {
            albumNum = parseInt(Math.random() * 3);
            if(albumNum == 0) num_0();
            if(albumNum == 1) num_1();
            if(albumNum == 2) num_2();

        }

function AlbumButton()
{

}

function YoutubeButton()
{

}

function InstarButton()
{

}

function TwitterButton()
{

}

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        function num_0()
        {
            albumImgs[0].src = "./imgs/album_00.jpg"
            lyses[0].innerHTML = "出来れば世界を僕は塗り変えたい<br/>"+
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

        }

        function num_1()
        {
            albumImgs[0].src = "./imgs/album_01.png"
            lyses[0].innerHTML = "(私+期待－不安)×ギター=ロックだ<br/>"+
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
        }

        function num_2()
        {
            albumImgs[0].src = "./imgs/album_02.jpg"
            lyses[0].innerHTML = "heaven on earth don’t you know that<br>"+
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

            albumText[0].innerHTML = "레몬시티(Lemon City) - need you<br>";
            youtubehref[0].href = "https://youtu.be/CWfjjYMJl6U";
            instarhref[0].href = "https://www.instagram.com/lemon_city11/";
            twitterhref[0].href = "";
            twitterText[0].style.textDecoration = "line-through";        
        }
        