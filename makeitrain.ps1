$UserId = ("insert username here")
$Password = ("insert password here")

$SecurePassword = ConvertTo-SecureString $Password -AsPlainText -Force
$MyCreds = [System.Management.Automation.PSCredential]::new($UserId, $SecurePassword)

# Hide PowerShell Console
Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")]
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
'
$consolePtr = [Console.Window]::GetConsoleWindow()
[Console.Window]::ShowWindow($consolePtr, 0)

New-SshSession -ComputerName [insert computer IP here] -Credential $MyCreds

Invoke-SSHCommand -SessionID 0 -Command "sudo python makeitrain.py"

Remove-SshSession -ComputerName [inset computer IP here]
