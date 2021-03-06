module.exports = {
    execShellCommand : function(cmd) {
        const { exec } = require("child_process");
        // String will be executed in Command Prompt
        // const cmd = 'pwsh.exe -c "Get-LastBootTime"';
    
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
  };