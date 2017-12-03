md ..\WSDD\TempFolder 
echo Vyacheslav Miroshnychenko>..\WSDD\TempFolder\practice.wsdd
echo IN - 51 >>..\WSDD\TempFolder\practice.wsdd
move ..\WSDD\TempFolder\practice.wsdd  ..\WSDD

attrib +R ..\WSDD\practice.wsdd


SetLocal EnableDelayedExpansion
set /a c=0
for /f "UseBackQ Delims=" %%A IN ("..\WSDD\practice.wsdd") do (
  set /a c+=1
  set "m!c!=%%A"
)
echo. I am, %m1%, student of  %m2% group

copy ..\WSDD\practice.wsdd ..\WSDD\TempFolder\practice_.wsdd


for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
set ldt=%ldt:~0,4%-%ldt:~4,2%-%ldt:~6,2% %ldt:~8,2%:%ldt:~10,2%:%ldt:~12,6%
echo Local date is [%ldt%] >>..\WSDD\practice.wsdd

attrib -R ..\WSDD\practice.wsdd

for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
set ldt=%ldt:~0,4%-%ldt:~4,2%-%ldt:~6,2% %ldt:~8,2%:%ldt:~10,2%:%ldt:~12,6%
echo Local date is [%ldt%] >>..\WSDD\practice.wsdd

FC ..\WSDD\practice.wsdd ..\WSDD\TempFolder\practice_.wsdd >..\WSDD\result.wsdd

pause