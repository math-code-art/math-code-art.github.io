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
  { name: 'Dr. Yue Sun', role: 'Faculty Advisor', affiliation: 'University of Wisconsin-Madison', photo: '/team/yue-sun.png', url: 'http://sun-yue.com/' },
  { name: 'Wanxi Yang', role: 'Faculty Advisor', affiliation: 'Independent' },
  { name: 'Yumeng He', role: 'Faculty Advisor', affiliation: 'UCLA Computer Science', photo: '/team/yumeng-he.JPG', url: 'https://heyumeng.com/' },
  { name: 'Prof. Michael Andrews', role: 'Faculty Advisor', affiliation: 'UCLA Mathematics', photo: '/team/michael-andrews.png', url: 'https://www.math.ucla.edu/~mjandr/' },
  { name: 'Prof. Chenfanfu Jiang', role: 'Faculty Advisor', affiliation: 'UCLA Mathematics', photo: '/team/chenfanfu-jiang.png', url: 'https://www.math.ucla.edu/~cffjiang/' },
];

export const developers: Person[] = [
  { name: 'Shanmei Wanyan', role: 'Tutorial Developer', affiliation: 'UCLA', photo: '/team/shanmei-wanyan.jpg'},
  { name: 'Hanyin (Coco) Zhang', role: 'Tutorial Developer', affiliation: 'UCLA' },
  { name: 'Junhao Jia', role: 'Tutorial Developer', affiliation: 'UCLA', photo: '/team/junhao-jia.jpg', url: 'https://rukaatre1.github.io/Harley-Studio/' },
  { name: 'Weimo Zhu', role: 'Tutorial Developer', affiliation: 'UCLA', photo: '/team/weimo-zhu.JPG' },
  { name: 'Tucker Nielson', role: 'Tutorial Developer', affiliation: 'The Rivers School, Weston MA' },
  { name: 'Meichen Wan', role: 'Tutorial Developer', affiliation: 'UCLA', photo: '/team/meichen-wan.png', url: 'https://meichenwan0704.wixsite.com/eportfolio'},
  { name: 'Dengyuhan Dai', role: 'Tutorial Developer', affiliation: 'UCLA', photo: '/team/dengyuhan-dai.jpg', url: 'https://tomorina0.github.io/'},
  { name: 'Qiyang (Rosalinda) Chen', role: 'Tutorial Developer', affiliation: 'UCLA', photo: '/team/qiyang-chen.jpg', url: 'https://rosiechen1005.github.io/'},
];
