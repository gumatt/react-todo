# React Boilerplate Application

Basic application with forms and retrieval of temperature information through a REST call to openweathermap.org.  This application was build during the Udemy Complete React Web App Developer course, which I highly recommend.  

I have made numerous changes to tools used in the course to better match my preferred development environment.  

### NPM Build System vs Webpack

I have completely changed the build system used in the course (webpack) to an npm script based build system.  NPM scripts seem much cleaner build system to me, so I got rid of webpack and use cli tools and npm to build the project.  All the dependencies are included in the package.json file.

### Bootstrap vs Foundation

I also prefer Bootstrap to Foundation, and have handled all the UI using react-bootstrap.   

### Stylus v SCSS

I like the syntax of Stylus over that of SCSS, and so the css pre-compiler used in this project is Stylus.

## Deploying to Heroku

Install heroku cli tool on your machine.
`heroku create
git push heroku master`

## Template Project Architecture

This template is for a web-based, single-page application built with React.js.  

### Project Structure

The development files live in the ./dev/ directory, and are 'built' into the ./dist/ directory. The build is accomplished using browserify and babelify (with react, es205, stage-0, and airbnb plugins).  As noted above, css build is accomplished using a base bootstrap theme file included in ./dev/styles/includes/  Users of this template can incorporate any bootstrap theme file here if a custom theme is needed.  

### Testing

I have added a karma.conf.js configuration file that expects tests to live in ./dev/app/**/*.test.jsx files.  Placing test files along side component files makes it easier for me to see what has tests and what doesn't.

## Lessons Learned

### react-bootstrap FormControls

The suggested method for getting FormControl values is to use the component's this.refs.X.getDOMNode().value mechanism.  For some reason, I couldn't seem to get that to work; and, moreover, I don't like it. To me, this call violates encapsulation (I shouldn't have to know that refs.X has a getDOMNode() method).

As a result I used the more verbose, method of setting the FormControl's value to a state variable, and updating the state variable using the FormControl's onChange handler.  The two advantages are:
1. The mechanisms for accessing form input values are in the domain of Forms and FormControls; not bleeding into the domain of the DOM.
2. I think that, at some point the react-bootstrap Forms API will change to make  value retrieval of form input more rational; and this approach feels like it is relying on more stable parts of the react-bootstrap framework
3. I don't like reaching into the DOM with react around.  I would rather react deal with all DOM manipulation, and I work through react framework.

#### uncontrolled to controlled component

I did run into one issue with supplying FormControl with value={this.state.X}:  If this.state.X is not initialized (or is initialized to undefined), then the FromControl is instantiated as an uncontrolled form.  This causes a warning to appear in the console when the value of this.state.X is updated and fed back to the FormControl (now making the FormControl a controlled component -- which is a no-no).  To eliminate the warning, I had to initialize the value of this.state.X  to something like 0 or ''.
