import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

import leaf from '../images/leaf.svg';

import componentStyles from './projects.module.css'

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div className={componentStyles.container}>
          <aside>
          <div className={componentStyles.projectsInfo}>
              <h2>Projects</h2>
              <p>Collection of various projects and experiments created during my coding journey.</p>
              <h3>Technologies I Use:</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>Gatsby.js</li>
                <li>Contentful</li>
                <li>Netlify</li>
                <li>Node.js</li>
                <li>Greensock</li>
                <li>Adobe Illustrator</li>
                <li>SVG</li>
              </ul>
            </div>
            <div className={componentStyles.github} >
              <p>Github</p>
            </div>
            <div className={componentStyles.codepen} >
              <p>CodePen</p>
            </div>
          </aside>

          <section className={componentStyles.projectGrid}>
          <div className={componentStyles.project1}>
            <h3>Project Name</h3>
            <p>Ut ac nibh nec ligula egestas egestas. Sed tristique condimentum magna vel laoreet. Aenean euismod in leo non dignissim. Quisque ornare convallis congue. Etiam sit amet iaculis sem. Fusce accumsan purus nec dolor consectetur lobortis. Proin congue dapibus aliquam. Pellentesque pharetra nisi id ante fermentum maximus nec eu metus. Vivamus at sapien eget sem maximus vehicula nec quis ipsum. Donec tristique felis ut nisl rutrum, et posuere erat consectetur. </p>
            <button>Github</button>
            <button>Live</button>
          </div>
          <div className={componentStyles.project2}>
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis nulla est. Cras massa lorem, euismod nec dui a, ultricies euismod eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam at consequat magna, vitae malesuada justo. Integer quis augue pharetra, tempor odio eget, suscipit dolor. Nam finibus eu lacus id aliquam. Suspendisse potenti. Etiam tincidunt velit lectus, placerat ultricies leo commodo at. Nulla augue erat, efficitur ac nulla nec, volutpat faucibus orci. Nulla efficitur arcu nunc, sed aliquam ante accumsan eget. Vestibulum ipsum lorem, tincidunt nec eros a, accumsan vulputate ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <button>Github</button>
            <button>Live</button>
          </div>
          <div className={componentStyles.project3}>
            <h3>Project Name</h3>
            <p>Mauris dictum auctor nunc in rhoncus. Morbi accumsan viverra eros sit amet scelerisque. Vivamus nisl lacus, efficitur ut massa vel, rutrum tempor lectus. Curabitur feugiat maximus maximus. Cras ac ornare nibh. Proin vitae fermentum mauris. Aenean pellentesque enim ac vestibulum aliquet. Mauris ante ipsum, mattis vitae tristique ac, consectetur quis ex. Cras gravida lacinia lorem et faucibus. </p>
            <button>Github</button>
            <button>Live</button>
          </div>
          <div className={componentStyles.project4}>
            <h3>Project Name</h3>
            <p>Maecenas ut nulla non neque malesuada sollicitudin. Nullam vitae diam maximus, cursus nibh a, mattis risus. Fusce vel neque imperdiet, dapibus dolor non, scelerisque dolor. Pellentesque id tincidunt libero. Nullam magna leo, malesuada sed maximus ut, imperdiet rutrum est. Duis a lectus ac mauris tristique molestie vitae sit amet nibh. Morbi pretium, turpis ac vulputate tincidunt, elit libero fermentum metus, id pellentesque purus lorem vel sem. Pellentesque interdum dui sed risus accumsan, in sagittis eros hendrerit. Morbi ultricies turpis viverra placerat pharetra. </p>
            <button>Github</button>
            <button>Live</button>
          </div>
          <div className={componentStyles.project5} >
            <h3>Project Name</h3>
            <p>Nulla efficitur, ligula et condimentum pharetra, nisl nulla vehicula enim, nec feugiat ligula diam et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque mauris ipsum, consectetur et risus at, pretium viverra ligula. Ut in purus venenatis, ultrices sem vitae, tristique velit. Cras sagittis suscipit rutrum. Quisque tortor mauris, scelerisque sed elementum sed, blandit quis sapien. Donec fermentum auctor risus ac semper. Pellentesque dapibus in nulla quis euismod. Nunc sodales sit amet ex eget ornare. In mi augue, posuere id semper ac, pretium quis turpis. Nulla facilisi. Nam tincidunt dolor urna, in mollis magna consequat sit amet. Ut malesuada lorem in mauris placerat, eu scelerisque arcu ornare. Sed non arcu vitae urna molestie feugiat et vitae sapien. Vestibulum sollicitudin, elit eget tristique imperdiet, dui nulla sodales lectus, vel pretium quam diam vel velit. Curabitur dignissim commodo augue, ac laoreet leo sagittis vel.</p>
            <button>Github</button>
            <button>Live</button>
          </div>
          <div className={componentStyles.project6} >
            <h3>Project Name</h3>
            <p>Pellentesque dapibus in nulla quis euismod. Nunc sodales sit amet ex eget ornare. In mi augue, posuere id semper ac, pretium quis turpis. Nulla facilisi. Nam tincidunt dolor urna, in mollis magna consequat sit amet. Ut malesuada lorem in mauris placerat, eu scelerisque arcu ornare. Sed non arcu vitae urna molestie feugiat et vitae sapien. Vestibulum sollicitudin, elit eget tristique imperdiet, dui nulla sodales lectus, vel pretium quam diam vel velit. Curabitur dignissim commodo augue, ac laoreet leo sagittis vel.</p>
            <button>Github</button>
            <button>Live</button>
          </div>
          
        </section>
        </div>
      </Layout>
    );
  }
}


export default ProjectsPage
