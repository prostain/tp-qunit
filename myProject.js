function surface(surf) {
    if (typeof (surf) !== 'object') {
        return -1;
    }
    else {
        if (surf['forme']) {
            if (surf['forme'] === 'Carré') {
                if (surf['coté']) {
                    if (typeof(surf['coté']) === 'number') {
                        return surf['coté'] * surf['coté'];
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            } else if (surf['forme'] === 'Rectangle') {
                if (surf['longueur'] && surf['largeur']) {
                    if (typeof (surf['longueur']) === 'number' && typeof (surf['largeur']) === 'number') {
                        if(surf['longueur'] !== surf['largeur']) {
                            return surf['longueur'] * surf['largeur'];
                        } else {
                            return -1;
                        }
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            } else if (surf['forme'] === 'Cercle') {
                if (surf['rayon']) {
                    if (typeof(surf['rayon']) === 'number') {
                        return (Math.PI*( surf['rayon'] * surf['rayon'])).toFixed(2);
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            } else {
                return -1;
            }
        }
        else {
            return -1;
        }
    }
}

var test = {'forme':'Carré','coté':10};
var test2 = {'forme':'Rectangle','longueur':100,'largeur':50};
var test3 = {'forme':'Cercle','rayon':10};

console.log(surface(test));
console.log(surface(test2));
console.log(surface(test3));