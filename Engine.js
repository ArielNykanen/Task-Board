let thisApp = (function(){

let notesRepo = {
    noteArr:[{name:'Example',time:'12:00:Am',date:'22/08/2018', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque exercitationem, atque distinctio corrupti alias rem, sed nemo, quia hic temporibus pariatur repellat illum minima rerum culpa! Necessitatibus consectetur ex architecto.',indexInArr:0, justPosted:'onhover'}],
    init: function(){
            this.cacheDom();
            this.render();
    },
    cacheDom: function(){
        this.notesPlace = document.getElementById('notesPlace');
    },
    render: function(){
        this.notesPlace.innerHTML = 'it worked';
        postAllCurrentTasks();
    }
    
}

let deletedNotesRepo = {
    deletedNotesArr:[],
    counter:this.counter = 0,
    init: function(e){
        e.preventDefault();
        this.counter++;
        this.getStorage();
        this.getcache();
        this.events();
        this.animation();
        this.render();
    },

    getcache: function(){
        this.deleteSection = document.getElementById('removedSection');
        this.main = document.getElementById('main');
        this.headerH1 = document.getElementById('h1');
    },
    getStorage: function(){ 
        if(localStorage.getItem('removedNotes')){
        let temp = localStorage.getItem('removedNotes');
        temp = JSON.parse(temp);
        this.deletedNotesArr = temp;
        }
    },

    events: function(){
        this.deleteSection.addEventListener('click', this.animation(event));
    },

    animation: function(){
        event.preventDefault();
        this.deleteSection.setAttribute('style', 'transition:170ms ease-in; right: -770px;')
        setTimeout(() => this.deleteSection.setAttribute('style', 'transition:220ms ease-in; right: -980px;background-color: rgba(0, 0, 20, 0.884);') ,250);
        setTimeout(() => this.deleteSection.setAttribute('style', 'transition:1s ease-in; right: -830px;'),500);
        setTimeout(() => this.deleteSection.setAttribute('style', ''),500);
        setTimeout(() => {
            this.deleteSection.innerHTML = 'Back to task board'
            this.deleteSection.setAttribute('style', 'letter-spacing: 10px;')
            this.main.innerHTML = '';
            this.postDeletedNotes();
    },500);
        if(this.counter%2 === 0){
            setTimeout(() => {
                this.deleteSection.setAttribute('style', 'letter-spacing: 10px;')
                this.deleteSection.innerHTML = 'deleted Section';
                    startApp.init();
            }, 1000); 
        }
    },
    postDeletedNotes: function(){
        this.main.innerHTML += `<div><button id='clearBtn' onclick="thisApp.deletedNotesRepo.confirmRemove()">clear All</button></div>`
        let mainTemp = `<div id='maint' class='row'></div>`
        this.main.innerHTML += mainTemp;
        let temp = document.getElementById('maint');
        for(let i = 0;i < this.deletedNotesArr.length;i++){
            this.html = Mustache.to_html(TEMP$_yellowNoteRemovedExampleTemp(), this.deletedNotesArr[i]);
            temp.innerHTML += this.html;
            let temp2 = document.getElementById(this.deletedNotesArr[i].name);
            temp2.setAttribute('style', 'opacity:0.7')}
            this.deletedNotesArr.length === 0 ? temp.innerHTML += TEMP$_emptyDeletedSectionAlert():false;
    },

    render: function(){
    this.headerH1.innerHTML = 'removed notes'   
    },
    confirmRemove: function(){
        if(this.deletedNotesArr[0] === undefined){
            return this.main.innerHTML = TEMP$_template_alertNothingToRemove();
        }
        this.main.innerHTML = TEMP$_template_alertBeforeRemovingNote();
    },
    removeStorage: function(c){
        if(this.deletedNotesArr[0] === undefined){
            this.main.innerHTML = '';
            this.postDeletedNotes();
            return;
        }else if(this.deletedNotesArr[0]){
        if(c){
        localStorage.removeItem('removedNotes');
        this.deletedNotesArr = [];
        this.main.innerHTML = '';
        this.postDeletedNotes();
        }else if(!c){
        this.main.innerHTML = '';
        this.postDeletedNotes();
        }
    }
}
    
}

let createNote = {
    init: function(e){
        e.preventDefault();
        this.getcache();
        this.validateContent();
        this.render();
        this.saveToLocal();
        
    },
    getcache: function(){
        this.dateRegex = /\d{2}\/\d{2}\/\d{4}/g;
        this.timeRegex = /(^[0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g
        this.checkInputs = document.getElementsByClassName('forNote');
        this.inputAlert = document.getElementsByClassName('inputAlert');
        this.reg = /\d/g;
        this.taskName = document.getElementById('tasksName').value;
        this.taskDesc = document.getElementById('noteText').value;
        this.taskTime = document.getElementById("noteTime").value;
        this.taskDate = document.getElementById("noteDate").value;
    },
    validateContent: function(){
        this.inputValidation = ['*you need to add name and details for the task',  '*fill the date please','*fill the time please'];
        let allInputs = document.getElementsByClassName('text');
        for(let i = 0;i < allInputs.length;i++){
            if(!allInputs[i].value) return  this.inputAlert[0].innerHTML = this.inputValidation[0]; else this.inputAlert[0].innerHTML = '';
        }
    for(let j = 0;j < notesRepo.noteArr.length;j++){
        let taskIsTaken = "the name of the task is allready taken chose another name"
        if(notesRepo.noteArr[j].name === this.taskName){ return this.inputAlert[0].innerHTML = taskIsTaken;}else{
            this.inputAlert[0].innerHTML = '';
        }
    }
    if(!this.taskDate.match(this.dateRegex)){
        return this.inputAlert[1].innerHTML = '*the date you inserted is invalid';
    } else{this.inputAlert[1].innerHTML = ''}
    if(!this.taskTime.match(this.timeRegex)){ return this.inputAlert[2].innerHTML = '*the time you inserted is invalid';}else{
        this.inputAlert[2].innerHTML = '';
    }

    this.ConstructNote(this.taskName, this.taskDesc, this.taskTime, this.taskDate);
    startApp.postIncomeNotes();
    },

    ConstructNote: function(name, text, time, date){
                this.name = name; /*|| confirm('you didnt insert name would you like it to be untitled');*/
                this.text = text;
                this.time = time;
                this.date = date;
                this.index = notesRepo.noteArr.length;
                notesRepo.noteArr.push({name:this.name, text:this.text, time:this.time, date:this.date, indexInArr:this.index, justPosted:'on-hover1'})
    },

    render: function(){
        this.saveToLocal();
    },

    removeNote: function(id){
        for(let i = 0;i < notesRepo.noteArr.length;i++){
            if(notesRepo.noteArr[i].name === id){
                if(localStorage.getItem('removedNotes')){
                let storage = localStorage.getItem('removedNotes');
                storage = JSON.parse(storage);
                deletedNotesRepo.deletedNotesArr = storage;
                deletedNotesRepo.deletedNotesArr.push(notesRepo.noteArr[i]);
                let temp = deletedNotesRepo.deletedNotesArr;
                temp = JSON.stringify(temp);
                localStorage.setItem('removedNotes', temp)  
                }else if(!localStorage.getItem('removedNotes')){
                    deletedNotesRepo.deletedNotesArr.push(notesRepo.noteArr[i]);
                    let temp = deletedNotesRepo.deletedNotesArr;
                    temp = JSON.stringify(temp);
                    localStorage.setItem('removedNotes', temp)
                }
                notesRepo.noteArr.splice(i,1);
                document.getElementById(id).setAttribute('style','transition:1s;opacity:0')
                startApp.saveStorage();
                setTimeout(()=> startApp.render() ,500)
            }
        }
        
    }
            
}

let startApp = {
    init: function(){
        main.innerHTML = TEMP$_noteCreator();
        this.cacheDom();
        this.render();
        this.getStorage();
        this.appSettings();
        this.postIncomeNotes();
        this.renderLiveTyping();
        this.events();
        this.saveStorage();
        this.checkTasks();
    },
    cacheDom: function(){
    this.note = 'notes'
    this.header = document.getElementById('h1').innerHTML = 'Make Things Organized'
    this.notesPlace = document.getElementById('notesPlace');
    //--------Start of creating notes variables--------//
    this.addEventOnEnter = document.getElementsByClassName('forNote');
    this.date_date = document.getElementById('noteDate');
    this.date_time = document.getElementById('noteTime');
    //--------END Of creating notes variables--------//
    //--------Start of appSettings variables--------//
    this.noteTime = document.getElementById('noteTime');
    this.tasksName = document.getElementById('tasksName');
    this.noteDate = document.getElementById('noteDate');
    //--------END Of appSettings variables--------//
    },
    appSettings: function(){
        if(window.innerWidth > 360){
            this.noteTime.style.width = "150px";
            this.tasksName.style.width = "150px";
            this.noteDate.style.width = "150px";}
        if(window.innerWidth <= 291){
            this.noteTime.style.width = "130px";
            this.tasksName.style.width = "130px";
            this.noteDate.style.width = "130px";} 
        if(window.innerWidth <= 360){
            this.noteTime.style.width = "130px";
            this.tasksName.style.width = "130px";
            this.noteDate.style.width = "130px";} 
        if(window.innerWidth <= 322){
            return alert('your screen is too small for this app!');}
    },
    postIncomeNotes: function(){
        this.notesPlace.innerHTML = '';
        for(let i = 0; i < notesRepo.noteArr.length;i++){
        this.html = Mustache.to_html(TEMP$_yellowNoteExampleTemp(),notesRepo.noteArr[i]);
        if(notesRepo.noteArr[i].justPosted){
            this.notesPlace.innerHTML += this.html;
            this.fadeIn(notesRepo.noteArr[i].name)
            notesRepo.noteArr[i].justPosted = 'on-hover'
            this.saveStorage();
            }else if(!notesRepo.noteArr[i].justPosted){
                this.notesPlace.innerHTML += this.html;
            }
        }
        let inputs = document.getElementsByClassName('inputs');
        for(let j = 0;j < inputs.length;j++){
            inputs[j].value = '';}
            this.render();
    },
    fadeIn:function(note){
        let temp = document.getElementById(`${note}`);
        setTimeout(function(){
            temp.setAttribute('style', 'transition:1s;opacity:1') 
        },)
    },
    events:function(){
        this.cacheDom();
        this.date_date.addEventListener('keyup', this.dateHelper.bind(this));
        this.date_time.addEventListener('keyup', this.timeHelper.bind(this));
    },
    dateHelper: function(e){
        this.dateLength = this.date_date.value.length;
        if(this.dateLength === 2)  this.date_date.value += '/';
        if(this.dateLength === 5)  this.date_date.value += '/';
        if(this.date_date === 5)  this.date_date.value += '/';
        if(this.date_date.value.match(this.dateSumCheck) > this.numOfDay) this.date_date.value = `${this.numOfDay}/`; 
        if(this.date_date.value.search(this.dayCheck) && this.date_date.innerText.length < 5)  this.date_date.value = this.date_date.value.replace(this.dayCheck, "/"+12+"/");
        if(this.date_date.value.match(this.yearCheck) < this.currentDate.getFullYear()) this.date_date.value = this.date_date.value.replace(this.yearCheck, this.currentDate.getFullYear());
    },
    timeHelper: function(){
        this.timeLength = this.date_time.value.length;
        if(this.date_time.value.match(this.hourReg) && this.date_time.value.length === 2)this.date_time.value += ':';
    },
    render:function(){
        this.renderNotes();
        this.cacheDom();
        this.getStorage();
        // this.createStorage();
    },
    renderNotes:function(){
        setTimeout(() => {
        this.cacheDom();
        this.notesPlace.innerHTML = '';
        for(let k = 0; k < notesRepo.noteArr.length;k++){
            this.notesPlace.innerHTML += Mustache.to_html(TEMP$_yellowNoteExampleTemp(),notesRepo.noteArr[k]);
        }
        },500);
    },
    renderLiveTyping: function(){
    //--------Start of date--------//                
    this.dateReg = /(a-z A_Z)/g;
    this.dateSumCheck = /\d{2}/g;
    this.dayCheck =  /\/[23456789]{2}\/|\d{2}\/1[3456789]{1}|\s/g;
    this.yearCheck =  /[\d]{4}/g;
    this.currentDate = new Date();
    this.numOfDay = new Date(this.currentDate.getYear(), this.currentDate.getMonth(), 0).getDate();
    //--------END Of date--------//
    //--------Start of time--------//
    this.hourReg = /\d{2}|[3456789]/g;
    //--------END Of time--------//

    },
    getStorage: function(){
        if(localStorage.getItem(this.note)){
        let get = localStorage.getItem(this.note);
        get = JSON.parse(get);
        notesRepo.noteArr = get;
        }
    },
    saveStorage: function(){
        // if(localStorage.getItem(this.note)){
        let temp = JSON.stringify(notesRepo.noteArr);
        localStorage.setItem(this.note,temp)
        // }
    },
    
    checkTasks: function(){
        let date = new Date();
        let yearReg = /\d{4}/g;
        let dayReg = /\d{2}/g;
        let monthReg = /\d{2}/g;
        for(let i =0;i < notesRepo.noteArr.length;i++){
            let ask = function(){return alert (`
            the time for the task ${notesRepo.noteArr[i].name} is finished did you complete it?`
        )
        }
            if(notesRepo.noteArr[i].date.match(yearReg) < date.getFullYear())  ask() ;
            if(notesRepo.noteArr[i].date.match(monthReg)[1] < date.getMonth()+1) return ask() ;
            if(notesRepo.noteArr[i].date.match(dayReg)[0] < date.getDate() && notesRepo.noteArr[i].date.match(monthReg)[1] <= date.getMonth()+1) return ask();
            console.log(notesRepo.noteArr[i].date.match(monthReg)[1] > 8);
        }
    }
}

startApp.init();

(function localClock(){
    setInterval(function(){
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let secounds = time.getSeconds();
        document.getElementById('clockGui').innerHTML = `${hours}:${minutes < 10 ? '0' + minutes:minutes}:${secounds <10 ?  '0' + secounds:secounds}`;
    },1000)    
}());
return{
    createNote:createNote,
    deletedNotesRepo:deletedNotesRepo
}
})(); 

