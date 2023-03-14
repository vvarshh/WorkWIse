<template>
	<div class="sidenav">
		<a href="#">About</a>
		<a href="#">Services</a>
		<a href="#">Clients</a>
		<a href="#">Contact</a>
	</div>
  <main class='project'>
    <div class='project-info'>
      <h1>Team Dashboard</h1>
      <div class='project-participants'>
        <span></span>
        <button class='project-participants__add'>Add Participant</button>
          
        </div>
    </div>
    <div class='project-tasks'>
      <div class='project-column'>
		<div class='project-column-heading'>
          <h2 class='project-column-heading__title'>Jane's Task</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
          
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--design'>UI Design</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Replace lorem ipsum text in the final designs</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>5</span>
            <span><i class="fas fa-paperclip"></i>5</span> 
            <span class='task__owner'></span>
          </div>
        </div>
        
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Illustration</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Create and generate the custom SVG illustrations.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>8</span>
            <span><i class="fas fa-paperclip"></i>7</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Copywriting</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Proof read the legal page and check for and loopholes</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>12</span>
            <span><i class="fas fa-paperclip"></i>11</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Illustration</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Create the landing page graphics for the hero slider.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>4</span>
            <span><i class="fas fa-paperclip"></i>8</span>
            <span class='task__owner'></span>
          </div>
        </div>
      </div>

      <div class='project-column'><div class='project-column-heading'>
          <h2 class='project-column-heading__title'>Tom's Task</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
          
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Copywriting</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Check the company we copied doesn't think we copied them.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>4</span>
            <span><i class="fas fa-paperclip"></i>0</span>
            <span class='task__owner'></span>
          </div>
        </div>
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--design'>UI Design</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Design the about page.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>0</span>
            <span><i class="fas fa-paperclip"></i>5</span>
            <span class='task__owner'></span>
          </div>
        </div>
        <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Illustration</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Move that one image 5px down to make Phil Happy.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>2</span>
            <span><i class="fas fa-paperclip"></i>2</span>
            <span class='task__owner'></span>
          </div>
        </div>
        </div>
      <div class='project-column'><div class='project-column-heading'>
          <h2 class='project-column-heading__title'>Dick's Task</h2><button class='project-column-heading__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
        
         <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Illustration</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Send Advert illustrations over to production company.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>12</span>
            <span><i class="fas fa-paperclip"></i>5</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
         <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--illustration'>Illustration</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Dawn wants to move the text 3px to the right.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>3</span>
            <span><i class="fas fa-paperclip"></i>7</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
         <div class='task' draggable='true'>
          <div class='task__tags'><span class='task__tag task__tag--copyright'>Copywriting</span><button class='task__options'><i class="fas fa-ellipsis-h"></i></button></div>
          <p>Amend the contract details.</p>
          <div class='task__stats'>
            <span><time datetime="2021-11-24T20:00:00"><i class="fas fa-flag"></i>Nov 24</time></span>
            <span><i class="fas fa-comment"></i>8</span>
            <span><i class="fas fa-paperclip"></i>16</span>
            <span class='task__owner'></span>
          </div>
        </div>
        
        </div>
      
    </div>
  </main>
</template>

<style>

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 100px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */;
  padding: 200px 0px;
}

.sidenav a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 25px;
  color: #2e2e2f;
}

 body {
	 color: #2e2e2f;
   width: 100%;
}

 h1 {
	 font-size: 30px;
}
 .project {
	 padding: 0px 10px;
	 margin-left: 100px;
}
 .project-info {
	 padding: 2rem 0;
	 display: flex;
	 width: 100%;
	 justify-content: space-between;
	 align-items: center;
}
 .project-participants {
	 display: flex;
	 align-items: center;
}
 .project-participants span, .project-participants__add {
	 width: 30px;
	 height: 30px;
	 display: inline-block;
	 background: grey;
	 border-radius: 100rem;
	 margin: 0 0.2rem;
}
 .project-participants__add {
	 background: transparent;
	 border: 1px dashed #969696;
	 font-size: 0;
	 cursor: pointer;
	 position: relative;
}
 .project-participants__add:after {
	 content: '+';
	 font-size: 15px;
	 color: #969696;
}
 .project-tasks {
	 display: flex;
	 grid-template-columns: repeat(4, 1fr);
	 width: 100%;
	 grid-column-gap: 1.5rem;
}
 .project-column-heading {
	 margin-bottom: 1rem;
	 display: flex;
	 align-items: center;
	 justify-content: space-between;
}
 .project-column-heading__title {
	 font-size: 20px;
}
 .project-column-heading__options {
	 background: transparent;
	 color: black;
	 font-size: 18px;
	 border: 0;
	 cursor: pointer;
}
 .task {
	 cursor: move;
	 background-color: var(--white);
	 padding: 1rem;
	 border-radius: 8px;
	 width: 100%;
	 box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
	 margin-bottom: 1rem;
	 border: 3px dashed transparent;
}
 .task:hover {
	 box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
	 border-color: rgba(162, 179, 207, .2) !important;
}
 .task p {
	 font-size: 15px;
	 margin: 1.2rem 0;
}
 .task__tag {
	 border-radius: 100px;
	 padding: 2px 13px;
	 font-size: 12px;
}
 .task__tag--copyright {
	 color: var(--tag-4-text);
	 background-color: var(--tag-4);
}
 .task__tag--design {
	 color: var(--tag-3-text);
	 background-color: var(--tag-3);
}
 .task__tag--illustration {
	 color: var(--tag-2-text);
	 background-color: var(--tag-2);
}
 .task__tags {
	 width: 100%;
	 display: flex;
	 align-items: center;
	 justify-content: space-between;
}
 .task__options {
	 background: transparent;
	 border: 0;
	 color: var(--light-grey);
	 font-size: 17px;
}
 .task__stats {
	 position: relative;
	 width: 100%;
	 color: var(--light-grey);
	 font-size: 12px;
}
 .task__stats span:not(:last-of-type) {
	 margin-right: 1rem;
}
 .task__stats svg {
	 margin-right: 5px;
}
 .task__owner {
	 width: 25px;
	 height: 25px;
	 border-radius: 100rem;
	 background: var(--purple);
	 position: absolute;
	 display: inline-block;
	 right: 0;
	 bottom: 0;
}
 .task-hover {
	 border: 3px dashed var(--light-grey) !important;
}
 .task-details {
	 width: 24%;
	 border-left: 1px solid #d9e0e9;
	 display: inline-block;
	 height: 100%;
	 vertical-align: top;
	 padding: 3rem 2rem;
}
 .tag-progress {
	 margin: 1.5rem 0;
}
 .tag-progress h2 {
	 font-size: 16px;
	 margin-bottom: 1rem;
}
 .tag-progress p {
	 display: flex;
	 width: 100%;
	 justify-content: space-between;
}
 .tag-progress p span {
	 color: #b4b4b4;
}
 .tag-progress .progress {
	 width: 100%;
	 -webkit-appearance: none;
	 appearance: none;
	 border: none;
	 border-radius: 10px;
	 height: 10px;
}
 .tag-progress .progress::-webkit-progress-bar, .tag-progress .progress::-webkit-progress-value {
	 border-radius: 10px;
}
 .tag-progress .progress--copyright::-webkit-progress-bar {
	 background-color: #ecd8e6;
}
 .tag-progress .progress--copyright::-webkit-progress-value {
	 background: #d459e8;
}
 .tag-progress .progress--illustration::-webkit-progress-bar {
	 background-color: #dee7e3;
}
 .tag-progress .progress--illustration::-webkit-progress-value {
	 background-color: #46bd84;
}
 .tag-progress .progress--design::-webkit-progress-bar {
	 background-color: #d8e7f4;
}
 .tag-progress .progress--design::-webkit-progress-value {
	 background-color: #08a0f7;
}
 .task-activity h2 {
	 font-size: 16px;
	 margin-bottom: 1rem;
}
 .task-activity li {
	 list-style: none;
	 margin: 1rem 0;
	 padding: 0rem 1rem 1rem 3rem;
	 position: relative;
}
 .task-activity time {
	 display: block;
	 color: var(--light-grey);
}
 .task-icon {
	 width: 30px;
	 height: 30px;
	 border-radius: 100rem;
	 position: absolute;
	 top: 0;
	 left: 0;
	 display: flex;
	 align-items: center;
	 justify-content: center;
}
 .task-icon svg {
	 font-size: 12px;
	 color: var(--white);
}
 .task-icon--attachment {
	 background-color: #fba63c;
}
 .task-icon--comment {
	 background-color: #5dc983;
}
 .task-icon--edit {
	 background-color: #7784ee;
}

</style>