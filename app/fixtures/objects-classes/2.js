// === Classes : constructeurs et méthodes

class Person {
  // ???
}

// === Code de vérification -- ne pas toucher

const meilleurActeur = new Person('Clark', 'Gable')
assertEqual(meilleurActeur.first, 'Clark')
assertEqual(meilleurActeur.last, 'Gable')

try {
  assertEqual(meilleurActeur.fullName(), 'Clark Gable')
} catch (err) {
  createAssertResult(false, 'method missing', [err])
}