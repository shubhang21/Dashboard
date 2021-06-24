
// ui components
import tma_pai_eng from '../views/ui-components/1tmapaieng.jsx';
import tma_pai_merit from '../views/ui-components/2tmapaimerit.jsx';
import rajmerit from '../views/ui-components/3rajmerit.jsx';
import localUG from '../views/ui-components/4localUG.jsx';
import siblingUG from '../views/ui-components/5siblingUG.jsx';
import diffable from '../views/ui-components/6diffable.jsx';
import singlemother from '../views/ui-components/7singlemother.jsx';
import orphan from '../views/ui-components/8orphan.jsx';
import mujgrad from '../views/ui-components/9mujgrad.jsx';
import localpg from '../views/ui-components/10localPG.jsx';
import tsb from '../views/ui-components/11tsb';
import meritPG from '../views/ui-components/12meritPG.jsx';
import scholarshipPHD from '../views/ui-components/13scholarshipsPHD';
import sportUG from '../views/ui-components/14sportUG.jsx';
import sportPG from '../views/ui-components/15sportPG';
import highsemUG from '../views/ui-components/16highsemUG.jsx';
import highsemPG from '../views/ui-components/17highsemPG.jsx';
import staffchild from '../views/ui-components/18staffchild.jsx';
import semconfPG from '../views/ui-components/19semconfPG.jsx';
import semconfUG from '../views/ui-components/20semconfUG.jsx';

var ThemeRoutes = [
 
  {
    path: '/ui-components/2tmapaieng',
    name: 'TMA-PAI-ENGINEERING',
    icon: 'mdi mdi-comment-processing-outline',
    component: tma_pai_eng
  },
  {
    path: '/ui-components/2tmapaimerit',
    name: 'TMA-PAI-MERIT',
    icon: 'mdi mdi-comment-processing-outline',
    component: tma_pai_merit
  },
  {
    path: '/ui-components/3rajmerit',
    name: 'RAJASTHAN MERIT',
    icon: 'mdi mdi-comment-processing-outline',
    component: rajmerit
  },
  {
    path: '/ui-components/4localUG',
    name: 'LOCAL REGION (UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: localUG
  },
  {
    path: '/ui-components/5siblingUG',
    name: 'SIBLING (UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: siblingUG
  },
  {
    path: '/ui-components/6diffable',
    name: 'DIFFERENTLY-ABLED',
    icon: 'mdi mdi-comment-processing-outline',
    component: diffable
  },
  {
    path: '/ui-components/7singlemother',
    name: 'SINGLE MOTHER (UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: singlemother
  },
  {
    path: '/ui-components/8orphan',
    name: 'ORPHAN (UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: orphan
  },
  {
    path: '/ui-components/9mujgrad',
    name: 'MUJ GRADUATE',
    icon: 'mdi mdi-comment-processing-outline',
    component: mujgrad
  },
 
  {
    path: '/ui-components/10localPG',
    name: 'LOCAL (PG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: localpg
  },
  {
    path: '/ui-components/11tsb',
    name: 'TSB(MBA)',
    icon: 'mdi mdi-comment-processing-outline',
    component: tsb
  },
  {
    path: '/ui-components/12meritPG',
    name: 'MERIT (PG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: meritPG
  },
  {
    path: '/ui-components/13scholarshipsPHD',
    name: 'SCHOLORSHIPS (PHD)',
    icon: 'mdi mdi-comment-processing-outline',
    component: scholarshipPHD
  },
 
  {
    path: '/ui-components/14sportUG',
    name: 'SPORT (UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: sportUG
  },
  {
    path: '/ui-components/15sportPG',
    name: 'SPORT (PG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: sportPG
  },
  {
    path: '/ui-components/16highsemUG',
    name: 'HIGH SEM(UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: highsemUG
  },
  {
    path: '/ui-components/17highsemPG',
    name: 'HIGH SEM(PG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: highsemPG
  },
  {
    path: '/ui-components/18staffchild',
    name: 'STAFF CHILD',
    icon: 'mdi mdi-comment-processing-outline',
    component: staffchild
  },
  {
    path: '/ui-components/19semconfPG',
    name: 'SEM/CONF. (PG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: semconfPG
  },
  {
    path: '/ui-components/20semconfUG',
    name: 'SEM/CONF. (UG)',
    icon: 'mdi mdi-comment-processing-outline',
    component: semconfUG
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
