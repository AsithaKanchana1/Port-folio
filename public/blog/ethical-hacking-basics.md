# What I Learned from the Cisco Ethical Hacker Course

In July 2025, I earned the **Cisco Certified Ethical Hacker** badge from the Cisco Networking Academy. Here's a summary of the key things I learned.

## What is Ethical Hacking?

Ethical hacking (also called **penetration testing** or **white-hat hacking**) is the practice of deliberately probing a computer system, network, or application to find security vulnerabilities — before malicious hackers do.

The key difference: you have **explicit permission** from the system owner.

## Core Concepts Covered

### 1. Threat Intelligence

Understanding the adversary is step one. The course covered:

- **Threat actors** — who attacks systems and why (nation-states, cybercriminals, hacktivists, insiders)
- **Attack vectors** — the paths attackers use to gain access
- **TTPs** — Tactics, Techniques, and Procedures used in real-world attacks

### 2. Network Security Fundamentals

A solid understanding of networking is essential for ethical hacking:

```
OSI Model Layers (from bottom to top):
1. Physical      → cables, signals
2. Data Link     → MAC addresses, switches
3. Network       → IP addresses, routing
4. Transport     → TCP/UDP, ports
5. Session       → connections, sessions
6. Presentation  → encryption, encoding
7. Application   → HTTP, DNS, FTP
```

Most attacks happen at layers 3, 4, and 7.

### 3. Reconnaissance

Before attacking, gather information:

- **Passive recon** — OSINT (Open Source Intelligence), no direct contact with target
  - Tools: Shodan, WHOIS, Google Dorks
- **Active recon** — Direct interaction with the target
  - Tools: Nmap, Ping, Traceroute

Example Nmap command:
```bash
# Scan open ports on a target (only on systems you own or have permission)
nmap -sV -O 192.168.1.1
```

### 4. Common Vulnerabilities

The course covered OWASP Top 10 and common attack types:

| Attack Type | Description |
|-------------|-------------|
| SQL Injection | Malicious SQL in user inputs |
| XSS | Injecting scripts into web pages |
| CSRF | Tricking users into unwanted actions |
| Buffer Overflow | Overwriting memory boundaries |
| Phishing | Social engineering via fake emails/sites |

### 5. The Penetration Testing Phases

Professional pen testing follows a structured process:

1. **Planning & Reconnaissance** — Define scope, gather info
2. **Scanning** — Identify live hosts, open ports, services
3. **Gaining Access** — Exploit discovered vulnerabilities
4. **Maintaining Access** — Establish persistence (in a controlled test)
5. **Reporting** — Document findings and recommendations

## Key Takeaways

**Security is a mindset, not a feature.** You can't bolt security on at the end. It has to be designed in from the start.

**Defense requires understanding offense.** To protect systems, you need to think like an attacker.

**Tools are just tools.** Nmap, Metasploit, Burp Suite — these are just instruments. Understanding *why* an attack works matters more than knowing which tool to run.

## The Badge

You can verify my Cisco Ethical Hacker certification on [Credly](https://www.credly.com/badges/0be5c035-e2b8-4b8b-8bd0-a51e3ff5317a/public_url).

## What's Next

I plan to continue in the cybersecurity space by:
- Practicing on platforms like **TryHackMe** and **HackTheBox**
- Learning more about web application security
- Exploring network defense and blue team operations

> **Important:** Always practice ethical hacking on systems you own or have explicit written permission to test. Unauthorized access is illegal and unethical.

---

*Published on July 20, 2025*
