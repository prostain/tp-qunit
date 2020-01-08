QUnit.test('surface()', function(assert){
    assert.equal(surface("test"),-1);
    assert.equal(surface({'forme':'Carré','coté':10}), 100);
    assert.equal(surface({'forme':'Rectangle','longueur':100,'largeur':50}), 5000);
    assert.equal(surface({"forme":"Cercle","rayon":10}), 314.16);
    assert.equal(surface({"forme":"Carré", "coté":"yes"}), -1);
    assert.equal(surface(100), -1);
})