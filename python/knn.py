classes = {
    'car': 0,
    'fish': 1,
    'house': 2,
    'tree': 3,
    'bicycle':4,
    'guitar': 5,
    'pencil': 6,
    'clock': 7
}

def readFeatures(p):
    with open(p, 'r') as f:
        lines = f.readlines()
    X = []
    y = []

    for i in range(1, len(lines)):
        row = lines[i].split(',')
        X.append((
            [float(row[j]) for j in range(len(row)-1)]
        ))
        y.append(classes[row[-1].strip()])
    return (X, y)
    
from sklearn.neighbors import KNeighborsClassifier

train_X, train_y = readFeatures('../data/dataset/training.csv')
knn = KNeighborsClassifier(n_neighbors=50, algorithm='brute', weights='uniform')
knn.fit(train_X, train_y)

testing_X, testing_y = readFeatures('../data/dataset/training.csv')
accuracy = knn.score(testing_X, testing_y)
print(f'Accuracy: {accuracy}')

