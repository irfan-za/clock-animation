const userP=prompt("Masukkan namamu : ");
         let txt;
         const user= document.getElementsByClassName('user')[0];
              function startTime() {
            const today = new Date();
            const y=today.getFullYear();
            const mo= today.getMonth();
            const d= today.getDate();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            const H=h;
            const M=m;
            function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
            const month=["january",'February', "March", "April","May",'June','July','August',"September","October","November","December"];
            if (M>0 && M<60) {
                txt="'Bermimpilah dalam hidup, jangan hidup dalam mimpi.'";
            }else if(M>2 && M<5){
                txt="'Satu-satunya kebijaksanaan sejati adalah mengetahui bahwa kamu tidak mengetahui apa-apa'\n~Socrates~";
            }else if(M>4 && M<7){
                txt="'Menaklukan rasa takut adalah awal dari kebjaksanaan'\n~Bertrand Russel~";
            }else if(M>6 && M<9){
                txt="'Satu-satunya kebijaksanaan sejati adalah mengetahui bahwa kamu tidak mengetahui apa-apa'\n~Socrates~";
            }else{
                txt="'Bermimpilah dalam hidup, jangan hidup dalam mimpi.'";
            }
            
   if (H>5 && H<11){
            user.innerHTML="Good Morning "+ userP+" :)" ;
        }else if (H>10 && H<17) { 
            user.innerHTML="Good Afternoon "+ userP+" :)" ;
        }
        else if(H>16 && H<18){
            user.innerHTML="Good Evening "+ userP+" :)";
            
        }
        else{
            user.innerHTML="Good Night "+ userP+" :)";
            
        }
        h=checkTime(h);
        m = checkTime(m);
			s = checkTime(s);
        document.getElementsByClassName('tgl')[0].innerHTML=d +' '+ month[mo-1]+ " " + y;
       document.getElementsByClassName('time')[0].innerHTML = h + ":" + m + ":" + s;
            t = setTimeout(function () {
                startTime();
            }, 500);
        
        }
        startTime();

     

        let i = 0;
           
        const speed = 50;
        const wrapper = document.getElementsByClassName('wrapper')[0];

        function typeWriter() {
            if (i < txt.length) {
                document.getElementsByClassName("txtberjalan")[0].innerHTML += txt.charAt(i);
                wrapper.style.paddingBottom = "100px";
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();


        let audio = new Audio("Undertale OST- 023 - Shop [TRAP REMIX] (PROD. @Mai).mp3" ) ;
        
audio.oncanplaythrough = function(){
audio.play();

 }
 audio.loop=true;
  audio.onended = function(){
 audio.pause();
 }
