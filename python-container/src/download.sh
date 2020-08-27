rm -rf libs
mkdir libs
pipenv lock -r > libs/requirements.txt
pip install -r libs/requirements.txt -t ./libs
