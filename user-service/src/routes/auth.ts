import jwt from 'jsonwebtoken';

interface Route {
    url: string;
    reqType?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    callback?: (req: any, res: any) => void;
}

const ROUTES: Route[] = [
    // LIST
    {
        url: '/login',
        reqType: 'POST',
        callback: (req: any, res: any) => {
            const { email, password } = req.body;

            //TO DO
            // requette pour recuperer l'user avec son mod de passe
            // user = userModel.findOne({ email });

            // AVEC bcrypt on peut comparer 2 hash facilement
	        if (hash(password) === user.passord) {
		        // Encodage du JWT via la variable d'environnement JWT_SECRET
		        const jwtToken = jwt.sign({ email }, 'shhhhh', {
			    expiresIn: "24h",
		    });
		    // Stockage du JWT dans un cookie HttpOnly
		    res.cookie("jwtToken", jwtToken, { httpOnly: true, secure: true });
		    // res.json(jwtToken);
	    } else {
		res.status(401).json({ message: "Authentification échouée." });
	}
        }
        
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
        reqType: 'POST',
    },
    // PUT FOR UPDATE
    {
        url: '/<id>',
        reqType: 'PUT',
    },
    // GET USER
    {
        url: '/<id>',
        reqType: 'GET',

    }
    ,
    // GET USER
    {
        url: '/<id>',
        reqType: 'DELETE',

    }
];

export { ROUTES, Route };