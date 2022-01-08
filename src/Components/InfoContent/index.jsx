import Footer from "../Footer";
import "./info.css";

const InfoContent = () => {
    
	return (
		<div className="info-wrap">
			<h1>An online Pomodoro Timer to boost your productivity</h1>
            <div className="info">
				<h2>What is Pomofocus?</h2>
				<div className="red-line">
                </div>
                <p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by
                    <span>Pomodoro Technique</span>
                    which is a time management method developed by Francesco Cirillo.
                </p>
			</div>
            <div className="info">
                <h2>What is Pomodoro Technique?</h2>
                <div className="red-line">
                </div>
                <p>
                The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by 
                short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <span>Wikipedia</span> 
                </p>
            </div>
            <div className="info">
             <h2>How to use the Pomodoro Timer?</h2>
             <div className="red-line">
                </div>
             <ol>
                 <li>Add tasks to work on today</li>
                 <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
                 <li>Select a task to work on</li>
                 <li>Start timer and focus on the task for 25 minutes</li>
                 <li>Take a break for 5 minutes when the alarm ring</li>
                 <li>Iterate 3-5 until you finish the tasks</li>
             </ol>
            </div>
          <div className="info">
              <h2>Features</h2>
              <div className="red-line">
                </div>
              <ul>
                  <li>Responsive design that works with desktop and mobile</li>
                  <li> Color transition to switch moods between work time and rest 
                      <br/>time</li>
                  <li>Audio notification at the end of a timer period</li>
                  <li>Customizable timer intervals to suit your preference</li>
              </ul>
          </div>
          <div className="info">
              <h2>Download App</h2>
              <div className="red-line">
                </div>
              <ul>
                  <li><span>For macOS</span>(zip file)</li>
                  <li> <span>For Windows </span> (exe file)</li>
              </ul>
          </div>
          <Footer/>
		</div>
	);
};
export default InfoContent;
