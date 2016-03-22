echo restoring nuget packages
NuGet.exe restore Khws.Project.Web.sln

echo building solution
C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe /t:rebuild /p:VisualStudioVersion=14.0;Configuration=Debug;DeployOnBuild=true

echo copying web
robocopy Khws.Project.Web\obj\Debug\Package\PackageTmp ..\Deploy /MIR /xd Public