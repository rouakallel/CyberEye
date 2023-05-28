import subprocess

search_term = 'vulnérabilité'
searchsploit_path = r'C:\Users\Rouak\Desktop\BootCamp\CyberEye\opt\exploitdb\searchsploit_rc'  

command = [searchsploit_path, search_term]
result = subprocess.run(command, capture_output=True, text=True)

if result.returncode == 0:
    output = result.stdout
    print(output)
else:
    error_message = result.stderr
    print(f"Erreur : {error_message}")

