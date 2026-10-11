export interface Person {
  name: string;
  role: string;
  affiliation: string;
  photo?: string;  // path from public/
  url?: string;
}

export const advisors: Person[] = [
  { name: 'Dr. Jiayin Lu', role: 'Faculty Advisor', affiliation: 'UCLA Mathematics', photo: '/team/jiayin-lu.png', url: 'https://jlu227.wixsite.com/kay-lu' },
  { name: 'Dr. Ying Jiang', role: 'Faculty Advisor', affiliation: 'UCLA Mathematics', photo: '/team/ying-jiang.png', url: 'https://yingjiang96.github.io/' },
  { name: 'Dr. Yue Sun', role: 'Faculty Advisor', affiliation: 'UW–Madison Mathematics', photo: '/team/yue-sun.JPG', url: 'http://sun-yue.com/' },
  { name: 'Wanxi Yang', role: 'Faculty Advisor', affiliation: 'Independent' },
  { name: 'Yumeng He', role: 'Faculty Advisor', affiliation: 'UCLA Computer Science', photo: '/team/yumeng-he.JPG', url: 'https://heyumeng.com/' },
  { name: 'Prof. Chris Rycroft', role: 'Faculty Advisor', affiliation: 'UW–Madison Mathematics', photo: '/team/chris-rycroft.jpg', url: 'https://people.math.wisc.edu/~chr/' },
  { name: 'Prof. Chenfanfu Jiang', role: 'Faculty Advisor', affiliation: 'UCLA Mathematics', photo: '/team/chenfanfu-jiang.png', url: 'https://www.math.ucla.edu/~cffjiang/' },
];

export const developers: Person[] = [
  { name: 'Shanmei Wanyan', role: 'Student Developer', affiliation: 'UCLA', photo: '/team/shanmei-wanyan.jpg'},
  { name: 'Hanyin (Coco) Zhang', role: 'Student Developer', affiliation: 'UCLA' },
  { name: 'Junhao Jia', role: 'Student Developer', affiliation: 'UCLA', photo: '/team/junhao-jia.jpg', url: 'https://rukaatre1.github.io/Harley-Studio/' },
  { name: 'Weimo Zhu', role: 'Student Developer', affiliation: 'UCLA', photo: '/team/weimo-zhu.JPG' },
  { name: 'Tucker Nielson', role: 'Student Developer', affiliation: 'The Rivers School, Weston MA' },
  { name: 'Meichen Wan', role: 'Student Developer', affiliation: 'UCLA', photo: '/team/meichen-wan.png', url: 'https://meichenwan0704.wixsite.com/eportfolio'},
  { name: 'Dengyuhan Dai', role: 'Student Developer', affiliation: 'UCLA', photo: '/team/dengyuhan-dai.jpg', url: 'https://tomorina0.github.io/'},
  { name: 'Qiyang (Rosalinda) Chen', role: 'Student Developer', affiliation: 'UCLA', photo: '/team/qiyang-chen.jpg', url: 'https://rosiechen1005.github.io/'},
  { name: 'Winxon Nguyen', role: 'Student Developer', affiliation: 'UCLA' },
  { name: 'Chenchen (Amily) Zheng', role: 'Student Developer', affiliation: 'UW–Madison', photo: '/team/chenchen_zheng.JPG', url: 'https://chenchenzheng.com/' },
];
