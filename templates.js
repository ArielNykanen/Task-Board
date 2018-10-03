function TEMP$_noteCreator(){
    return`<div class='container'>
    <div id="appsFutures">
    <span>Apps Futures</span>
    <div class="pIn">
        <h2>My task board</h2>
        <p>save note's</p>
        <p>check deleted note's</p>
        <p>alert when task date is over</p>
    </div>
    </div>
    <div class="space"></div> <!--just for making some space for a neat look-->
    <div class="title"></div> <!--for the title image-->
    <div class="wholeNoteWrap row">
    <div class="col-md"></div>
    <div id="noteWraper" class="col-md-10 container">
    <div class="row">
    <div class="col-md-4">
    <span style="font-size:36px;border-bottom:3px solid black;border-radius:10px;">Task Name:</span>
    </div>
    
    <div class="col-md nameInput inputs">
    <input id="tasksName" class="text forNote inputs" type="text" style="margin:0" placeholder="Task name here" maxlength="15" autofocus required/>
        <p class="inputAlert"></p>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12" style="min-height:20px"></div>
    <div class="col-md" style="margin-left:60px;">
            <textarea id="noteText" class='text inputs' maxlength="50" cols="40" rows="3" placeholder="write the task here..."></textarea>
            </div>
            </div>
            <div class="col-md container" style="border-bottom:3px solid black;border-radius:10px;" >
                    <h4 id="GoalTime">Goal Time</h4>
                </div>
            <div class="row goal-wraper">
                
                <div class="col-xs-5 col-md-5 date">
                        <label>date:</label>
                    <input  id="noteDate"  class="forNote inputs" placeholder="dd/mm/yyyy" maxlength="10" style="width:150px" required/>
                    <p class="inputAlert"></p>
                </div>
                <div class="col-xs-5 col-md-5 date">
                    <label>time:</label>
                    <input id="noteTime"  class="forNote inputs" placeholder="00:00" maxlength="5" style="width:150px" required />
                    <p class="inputAlert"></p>
                </div>
            </div>
            <div>
                <button id='makeNote' onclick="thisApp.createNote.init(event)">Add task</button>
            </div>
        </div>
        <div class="col-md"></div>
    </div>
    <div>
    <h1 style="border-bottom:5px dotted rgb(141,44,0);">your tasks will show here</h1>
    </div>
    
    <div id="notesPlace" class="row">
    
    </div>
    </div>
    `
}

function TEMP$_yellowNoteExampleTemp(){
    return ` 
        <div id="{{name}}"  class="col-md-3 {{justPosted}}">
        <div class="row newTaskWraper notes" >
        <div class="col-md">
        <div style="min-height:25px">
        <p style=""> <i data-id="{{name}}" title="delete note" onclick="thisApp.createNote.removeNote(this.dataset.id)" class="far fa-trash-alt"></i></p>
        </div>
        <span id="noteName" style="border-bottom: 1px solid">{{name}}</span>
        </div>
    <div class="notesInsideText col-md-12">
        <p class="noteInText">{{text}}</p>
    </div>
    <div class="row container" style='padding-bottom:15px;'>
        <div class="col-md">
            <span>time:</span>
            <span id="noteTime">{{time}}</span>
        </div>
        <div class="col-md">
            <span>Date:</span>
            <span id="noteDtae">{{date}}</span>
        </div>
        <div class="col-md-12">
            
        </div>
        
    </div>
    
    </div>
    </div>
    `
}

function TEMP$_yellowNoteRemovedExampleTemp(){
    return ` 
        <div id="{{name}}"  class="col-md-3 {{justPosted}}">
        <div class="row newTaskWraperForRemovedNotes notes" >
        <div class="col-md">
        <div style="min-height:25px">
        <p style=""> </p>
        </div>
        <span id="noteName" style="border-bottom: 1px solid">{{name}}</span>
        </div>
    <div class="notesInsideText col-md-12">
        <p class="noteInText">{{text}}</p>
    </div>
    <div class="row container" style='padding-bottom:15px;'>
        <div class="col-md">
            <span>time:</span>
            <span id="noteTime">{{time}}</span>
        </div>
        <div class="col-md">
            <span>Date:</span>
            <span id="noteDtae">{{date}}</span>
        </div>
        <div class="col-md-12">
            
        </div>
        
    </div>
    
    </div>
    </div>
    `
}

function TEMP$_template_alertBeforeRemovingNote(){
return`
<div id="overAll"></div>
<div class="container  alert-on-remove">
    <div class="row">
        <div class="col-md-12">
            <h3>Are you sure?</h3>
        </div>
        <div class="col-md-6">
            <button onclick="thisApp.deletedNotesRepo.removeStorage(true)">Yes</button>
        </div>
        <div class="col-md-6">
            <button onclick="thisApp.deletedNotesRepo.removeStorage(false)">no</button>
        </div>
    </div>
</div>
`
}

function TEMP$_template_alertNothingToRemove(){
    return`
<div id="overAll"></div>
<div class="container  alert-on-remove">
    <div class="row">
        <div class="col-md-12">
            <h3>There is nothing to remove</h3>
        </div>
        <div class="col-md-6">
            <button style='margin-left:50% auto;' onclick="thisApp.deletedNotesRepo.removeStorage(false)">ok</button>
        </div>
    </div>
</div>
`
}

function TEMP$_emptyDeletedSectionAlert(){ 
return `<h1 id='emptyDeletedAlert'>Deleted Section Is Empty</h1>`
}