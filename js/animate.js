
        function getTop(Id){
            var obj = document.getElementById(Id);
            return obj.getBoundingClientRect().top;
        }

        function getDom(Id){
            var obj=document.getElementById(Id);
            return obj;
        }

		function setAnimation(Id, Animate){
            /*绗簩椤靛姩鐢荤殑瑙﹀彂*/
            if(getTop(Id) < 900){
                getDom(Id).classList.add('animated');
                getDom(Id).classList.add(Animate);
            }
		}

