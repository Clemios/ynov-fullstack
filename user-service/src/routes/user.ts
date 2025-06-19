interface Route {
  url: string;
  reqType?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  callback?: (req: any, res: any) => void;
}

const ROUTES: Route[] = [
  // LIST
  {
    url: '/',
    reqType: 'GET'
  },
  {
    url: '/test',
    reqType: 'GET',
    callback: (req: any, res: any) => {
      res.send('Test route for user service');
    }
  },
  // POST FOR CREATE
  {
    url: '/',
    reqType: 'POST'
  },
  // PUT FOR UPDATE
  {
    url: '/<id>',
    reqType: 'PUT'
  },
  // GET USER
  {
    url: '/<id>',
    reqType: 'GET'
  },
  // GET USER
  {
    url: '/<id>',
    reqType: 'DELETE'
  }
];

export { ROUTES, Route };
