import json


with open('exemple.json') as f:
  data = json.load(f)

print(data)
print('\n')
print(data['animals'])
print('\n')
data['animals']
print(len(data['animals']))

for i in range(len(data['animals'])):
    print(data['animals'][i])
    data2=json.loads(json.dumps(data['animals'][i]))
    print(data2['species'])