@echo off
echo Starting ScropIDS Backend and Frontend...

cd %~dp0backend
if not exist ".venv" (
    python -m venv .venv
)
call .venv\Scripts\activate.bat
pip install -r requirements.txt
if not exist ".env" (
    copy .env.example .env
)
python manage.py migrate
python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@example.com', 'admin')"

start "ScropIDS Backend" cmd /k "call .venv\Scripts\activate.bat & python manage.py runserver"

cd %~dp0frontend
if not exist "node_modules" (
    call npm install
)
start "ScropIDS Frontend" cmd /k "npm run dev"

echo ScropIDS is running! Connect to the frontend at http://localhost:5173 and backend at http://localhost:8000
pause
