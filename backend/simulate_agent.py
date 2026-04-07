import os
import django
import random
from uuid import uuid4

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "scropids.settings")
django.setup()

from apps.core.models import Organization, Agent, Alert

# Create or get an organization
org, _ = Organization.objects.get_or_create(
    name="Test Security Corp",
    slug="test-sec"
)

# Create an agent
agent, _ = Agent.objects.get_or_create(
    organization=org,
    hostname="demo-workstation",
    defaults={
        "operating_system": "windows",
        "ip_address": "192.168.1.100",
    }
)

# Create a demo alert
threats = ["critical", "high", "medium", "low"]
reasons = [
    "Unauthorized PowerShell script executed bypassing execution policies.",
    "Multiple failed SSH logins from anomalous IP.",
    "Unusual registry modification detected in HKLM\\Software\\Microsoft\\Windows.",
    "A process injected memory into lsass.exe."
]

alert = Alert.objects.create(
    organization=org,
    agent=agent,
    threat_level=random.choice(threats),
    status="open",
    confidence=random.randint(60, 99),
    llm_analysis={
        "reasoning": random.choice(reasons),
        "recommended_action": "Isolate host and rotate credentials.",
        "mitigation_references": [
            {"label": "MITRE ATT&CK", "url": "https://attack.mitre.org"}
        ]
    }
)

print(f"✅ Generated simulated {alert.threat_level} alert on {agent.hostname}!")
