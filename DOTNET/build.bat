C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe /t:rebuild /p:VisualStudioVersion=14.0;Configuration=Debug;DeployOnBuild=true

echo copying Web
robocopy Khws.Project.Web\obj\Debug\Package\PackageTmp ..\Deploy /MIR /xd Public