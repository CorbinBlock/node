function execShellCommand(cmd) {
    const { exec } = require("child_process");
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
}
const cmd = 'pwsh.exe -c "Get-LastBootTime"'
execShellCommand(cmd)