import { wireframeJSONToSVG } from 'roadmap-renderer';
import { Topic } from './topic';

/**
 * @typedef {{ roadmapId: string, jsonUrl: string }} RoadmapConfig
 */

export class Roadmap {
  /**
   * @param {RoadmapConfig} config
   */
  constructor(config) {
    this.roadmapId = config.roadmapId;
    this.jsonUrl = config.jsonUrl;

    this.containerId = 'roadmap-svg';

    this.init = this.init.bind(this);
    this.onDOMLoaded = this.onDOMLoaded.bind(this);
    this.fetchRoadmapSvg = this.fetchRoadmapSvg.bind(this);
    this.handleRoadmapClick = this.handleRoadmapClick.bind(this);
  }

  /**
   * @param { string } jsonUrl
   * @returns {Promise<SVGElement>}
   */
  fetchRoadmapSvg(jsonUrl) {
    if (!jsonUrl) {
      console.error('jsonUrl not defined in frontmatter');
      return null;
    }

    return fetch(jsonUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        return wireframeJSONToSVG(json, {
          fontURL: '/assets/fonts/balsamiq.woff2',
        });
      });
  }

  onDOMLoaded() {
    this.fetchRoadmapSvg(this.jsonUrl)
      .then((svg) => {
        document.getElementById(this.containerId).replaceChildren(svg);
      })
      .catch(console.error);
  }

  handleRoadmapClick(e) {
    const targetGroup = e.target.closest('g') || {};
    const groupId = targetGroup.dataset ? targetGroup.dataset.groupId : '';
    if (!groupId) {
      return;
    }

    e.stopImmediatePropagation();

    window.dispatchEvent(
      new CustomEvent('topic.click', {
        detail: {
          topicId: groupId,
          roadmapId: this.roadmapId,
        },
      })
    );
  }

  init() {
    window.addEventListener('DOMContentLoaded', this.onDOMLoaded);
    window.addEventListener('click', this.handleRoadmapClick);
  }
}

/**
 * @param {RoadmapConfig} roadmapConfig
 */
window.initRoadmap = function (roadmapConfig) {
  const roadmap = new Roadmap(roadmapConfig);
  roadmap.init();

  // Initialize the topic loader
  const topic = new Topic();
  topic.init();
};
