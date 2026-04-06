# Script to run ScropIDS backend and frontend on Windows
Write-Host "Setting up ScropIDS Backend..."

cd "$PSScriptRoot\backend"
if (-Not (Test-Path ".venv")) {
    python -m venv .venv
}
.venv\Scripts\activate
pip install -r requirements.txt
if (-Not (Test-Path ".env")) {
    Copy-Item .env.example .env
}
python manage.py migrate

Write-Host "Creating Superuser if not exists..."
python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@example.com', 'admin')"

Write-Host "Starting Backend..."
Start-Process powershell -NoNewWindow -ArgumentList "-Command", ".venv\Scripts\activate; python manage.py runserver"

Write-Host "Setting up ScropIDS Frontend..."
cd "$PSScriptRoot\frontend"
if (-Not (Test-Path "node_modules")) {
    npm install
}
Write-Host "Starting Frontend..."
Start-Process powershell -NoNewWindow -ArgumentList "-Command", "npm run dev"

Write-Host "ScropIDS is running! Connect to the frontend at http://localhost:5173 and backend at http://localhost:8000"
