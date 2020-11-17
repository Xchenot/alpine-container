import json


with open('exemple.json') as f:
  data = json.load(f)

# output --> data json
print(data)
print('\n')
# output --> element 'animals' from data json
print(data['animals'])
print('\n')
# output --> len of the element 'animals' from data json
print(len(data['animals']))

for i in range(len(data['animals'])):
    # output --> print the i element 'animals' from data json
    print(data['animals'][i])
    data2=json.loads(json.dumps(data['animals'][i]))
    # output --> print the element 'species' from the i element of 'animals' data json
    print(data2['species'])