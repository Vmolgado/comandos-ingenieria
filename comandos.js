const comandos = [
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "PARO DE MOTOR",
        comando: "AT+GTOUT=gv300,1,,,0,0,0,0,0,0,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv300,0,,,0,0,0,0,0,0,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv300,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "RESET",
        comando: "AT+GTRTO=gv300,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "APN TELCEL",
        comando: "AT+GTBSI=gv300,internet.itelcel.com,webgprs,webgprs2002,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "APN TELEFONICA TRIAL",
        comando: "AT+GTBSI=gv300,m2mtrial.telefonica.com,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "APN TELEFONICA GLOBAL",
        comando: "AT+GTBSI=gv300,m2mglobal.telefonica.mx,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "3 MIN ON 10 MIN OFF",
        comando: "AT+GTFRI=gv300,1,0,,0,0000,0000,180,180,1000,1000,,0,600,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "REPORTE A MINUTO",
        comando: "AT+GTFRI=gv300,1,0,,0,0000,0000,60,60,1000,1000,,0,600,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "CARGA SOLO ENCENDIDO",
        comando: "AT+GTCFG=gv300,gv300,gv300,1,0,0,,37,2,,383F,0,1,0,300,0,1,1,1,1F,30,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "WATCHDOG",
        comando: "AT+GTDOG=gv300,1,10,1,1000,,1,0,,60,60,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "OBTENER VERSION FIRMWARE",
        comando: "AT+GTRTO=gv300,8,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "MANIPULAR ODOMETRO",
        comando: "AT+GTCFG=gv300,gv300,gv300,,0,,,,,,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "SPEED ALARM 2KMH",
        comando: "AT+GTSPD=gv300,1,0,2,1,600,0,0,0,0,0,,,,,,,,,,,FFFF$",
        notas: ""
    },

    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "CARGA CONSTANTE",
        comando: "AT+GTCFG=gv300,gv300,gv300,1,0,0,,37,2,,383F,0,1,0,300,0,1,0,1,1F,30,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "DESACTIVAR SPEED ALARM",
        comando: "AT+GTSPD=gv300,0,0,0,60,300,0,0,0,0,0,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "IP/PUERTO Gurtam",
        comando: "AT+GTSRI=gv300,,,,193.193.165.165,20479,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Reporte con giro (45 Grados)",
        comando: "AT+GTFRI=gv300,,,,,,,,,,,,45,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Quitar reporte giro (0 Grados)",
        comando: "AT+GTFRI=gv300,,,,,,,,,,,,0,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Panico instantaneo",
        comando: "AT+GTDIS=gv300,,,,,,,,0,,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Panico con retraso",
        comando: "AT+GTDIS=gv300,,,,,,,,1,,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Bufer baja prioridad",
        comando: "AT+GTSRI=gv300,,,1,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Borrar buffer",
        comando: "AT+GTRTO=gv300,4,BUF,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "Habilitar conducción brusca",
        comando: "AT+GTHBM=gv300,2,3,,,,,,,,,,,,,,0,0,0,0,30,50,20,65,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "BUZZER EXCESO DE VELOCIDAD",
        comando: "AT+GTSPD=gv300w,2,0,90,1,3600,2,1,0,0,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "DESACTIVAR BUZZER",
        comando: "AAT+GTSPD=gv300,0,0,0,0,30,0,0,0,0,0,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "COMANDO PRUEBAS BUZZER",
        comando: "AT+GTOUT=gv300,0,,,1,50,3,0,0,0,0,,0,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV300",
        dispositivo: "GV300",
        descripcion: "ACTIVACIÓN DE LLAMADA ENTRANTE",
        comando: "AT+GTMON=gv300,2,,10,7,0,0,0,0,FFFF$",
        notas: ""
}, 
//////////////////////////////////////////////////////
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "PARO DE MOTOR",
    comando: "AT+GTOUT=gv300w,1,,,0,0,0,0,0,0,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "HABILITADO DE MOTOR",
    comando: "AT+GTOUT=gv300w,0,,,0,0,0,0,0,0,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "ACTUALIZAR POSICION",
    comando: "AT+GTRTO=gv300w,1,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "RESET",
    comando: "AT+GTRTO=gv300w,3,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "APN TELCEL",
    comando: "AT+GTBSI=gv300w,internet.itelcel.com,webgprs,webgprs2002,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "APN TELEFONICA TRIAL",
    comando: "AT+GTBSI=gv300w,m2mtrial.telefonica.com,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "APN TELEFONICA GLOBAL",
    comando: "AT+GTBSI=gv300w,m2mglobal.telefonica.mx,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "3 MIN ON 10 MIN OFF",
    comando: "AT+GTFRI=gv300w,1,0,,0,0000,0000,180,180,1000,1000,,0,600,0,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "REPORTE A MINUTO",
    comando: "AT+GTFRI=gv300w,1,0,,0,0000,0000,60,60,1000,1000,,0,600,0,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "CARGA SOLO ENCENDIDO",
    comando: "AT+GTCFG=gv300w,gv300w,gv300w,1,0,0,,37,2,,383F,0,1,0,300,0,1,1,1,1F,30,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "WATCHDOG",
    comando: "AT+GTDOG=gv300w,1,10,1,1000,,1,0,,60,60,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "OBTENER VERSION FIRMWARE",
    comando: "AT+GTRTO=gv300w,8,,0,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "MANIPULAR ODOMETRO",
    comando: "AT+GTCFG=gv300w,gv300w,gv300w,,0,,,,,,,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "SPEED ALARM 2KMH",
    comando: "AT+GTSPD=gv300w,1,0,2,1,600,0,0,0,0,0,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "CARGA CONSTANTE",
    comando: "AT+GTCFG=gv300w,gv300w,gv300w,1,0,0,,37,2,,383F,0,1,0,300,0,1,0,1,1F,30,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "DESACTIVAR SPEED ALARM",
    comando: "AT+GTSPD=gv300w,0,0,0,60,300,0,0,0,0,0,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "IP/PUERTO Gurtam",
    comando: "AT+GTSRI=gv300w,,,,193.193.165.165,20479,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Reporte con giro (45 Grados)",
    comando: "AT+GTFRI=gv300w,,,,,,,,,,,,45,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Quitar reporte giro (0 Grados)",
    comando: "AT+GTFRI=gv300w,,,,,,,,,,,,0,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Panico instantaneo",
    comando: "AT+GTDIS=gv300w,,,,,,,,0,,,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Panico con retraso",
    comando: "AT+GTDIS=gv300w,,,,,,,,1,,,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Bufer baja prioridad",
    comando: "AT+GTSRI=gv300w,,,1,,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Borrar buffer",
    comando: "AT+GTRTO=gv300w,4,BUF,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "Habilitar conducción brusca",
    comando: "AT+GTHBM=gv300w,2,3,,,,,,,,,,,,,,0,0,0,0,30,50,20,65,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "BUZZER EXCESO DE VELOCIDAD",
    comando: "AT+GTSPD=gv300w,2,0,90,1,3600,2,1,0,0,,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "DESACTIVAR BUZZER",
    comando: "AAT+GTSPD=gv300w,0,0,0,0,30,0,0,0,0,0,,,,,,,,,,,FFFF$",
    notas: ""
},
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "COMANDO PRUEBAS BUZZER",
    comando: "AT+GTOUT=gv300w,0,,,1,50,3,0,0,0,0,,0,0,,,,FFFF$",
    notas: ""
    },
{
    idDispositivo: "GV300W",
    dispositivo: "GV300W",
    descripcion: "ACTIVACIÓN DE LLAMADA ENTRANTE",
    comando: "AT+GTMON=gv300w,2,,10,7,0,0,0,0,FFFF$",
    notas: ""
},
{
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv310lau,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv310lau,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv310lau,1,0,0,0,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv310lau,0,0,0,0,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "BLOQUEO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv310lau,0,0,0,1,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV310LAU",
        dispositivo: "GV310LAU",
        descripcion: "HABILITADO DE MOTOR JAMMER",
        comando: "AT+GTOUT=gv310lau,0,0,0,0,0,0,0,0,0,0,,0,0,0,,,FFFF$",
        notas: ""
    },
    //////////////////////////////////////////////
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "IP/PUERTO GURTAM",
        comando: "AT+GTSRI=gv75w,,,,193.193.165.165,21127,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "APN TELEFONICA",
        comando: "AT+GTBSI=gv75w,m2mtrial.telefonica.com,,,,,,0,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "RESET",
        comando: "AT+GTRTO=gv75w,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv75w,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "Borrar Buffer",
        comando: "AT+GTRTO=gv75w,4,BUF,,,,,FFFF$",
        notas: ""
    },
      {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "Info de dispositivo",
        comando: "AT+GTRTO=gv75w,D,,0,,,,FFFF$",
        notas: ""
    },
       {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "Panico",
        comando: "AT+GTSOS=gv75w,2,1,,0,0,0,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "Conultar nivel señal GSM",
        comando: "AT+GTRTO=gv300,7,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "Modo Ahorro Profundo",
        comando: "AT+GTCFG=gv75w,gv75w,GV75W,1,0,,,37,1,F,300C,,1,0,300,00,1,0,1,1F,30,FFFF$",
        notas: ""
    },
     {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "APN-IP-PUERTO TELEFONICA GURTAM",
        comando: "AT+GTQSS=gv75w,m2mtrial.telefonica.com,3,,1,193.193.165.165,21127,,0,,0,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "APN-IP-PUERTO TELCEL GURTAM",
        comando: "AT+GTQSS=gv75w,internet.itelcel.com,webgprs,webgprs2002,3,,1,193.193.165.165,21127,,0,,0,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "GLOBAL",
        comando: "AT+GTCFG=gv75w,gv75w,GV75W,1,0,,,37,2,F,300C,,1,0,300,00,1,0,1,1F,30,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "REPORTE 3 ON Y 10 OFF",
        comando: "AT+GTFRI=gv75w,1,0,,0,0000,0000,,180,1000,1000,,0,600,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "SOS",
        comando: "AT+GTSOS=gv75w,2,1,,0,0,0,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "SPEED ALARM",
        comando: "AT+GTSOS=gv75w,2,1,,0,0,0,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "WATCH DOG",
        comando: "AT+GTDOG=gv75w,1,10,5,1200,,1,0,,60,60,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "EXTERNAL POWER SUPPLY",
        comando: "AT+GTEPS=gv75w,1,7500,30000,5,2,0,0,0,0,1,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "SALIDAS DIGITALES",
        comando: "OUT=gv75w,0,,,0,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "ENTRADAS DIGITALES",
        comando: "AT+GTDIS=gv75w,0,1,,0,1,1,0,0,,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "REPORTE FORZADO",
        comando: "AT+GTRTO=gv75w,D,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75W",
        dispositivo: "GV75W",
        descripcion: "CONFIGURACION ACTUAL",
        comando: "AT+GTRTO=gv75w,2,,,,,,FFFF$",
        notas: ""
    },

    ///////////////////////////////////////////////////////
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: " APN TELEFONICA global",
        comando: "AT+GTBSI=gv600mg,m2mglobal.telefonica.mx,,,,,,00,2,0,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "IP/PUERTO GURTAM",
        comando: "AT+GTSRI=gv600mg,3,,1,193.193.165.165,22139,,0,,0,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "REINICIO",
        comando: "AT+GTRTO=gv600mg,3,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "APAGAR DISPOSITIVO",
        comando: "AT+GTRTO=gv600mg,5,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "ACTUALIZAR POSICIÓN",
        comando: "AT+GTRTO=gv600mg,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "REPORTE 3MIN ON_ 30MIN OFF",
        comando: "AT+GTFRI=gv600mg,1,1,,1,0000,0000,,180,1000,1000,,30,1800,00000000,1,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "Configuración actual",
        comando: "AT+GTRTO=gv600mg,2,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "Coonsultar nivel de bateria",
        comando: "AT+GTRTO=gv600mg,9,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "DESACTIVAR IGNICIÓN",
        comando: "AT+GTCFG=gv600w,,gv600w,1,0,,,007F,2,,08E1,0,0,0,300,00,,0,1,001F,30,,,,,,24,5,15,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "ENCENDIDOS/APAGADOS",
        comando: "AT+GTCFG=gv600w,,gv600w,1,0,,,007F,2,,08E1,0,0,0,300,00,,0,1,001F,30,,,,,,24,5,15,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "CONEXIONES/DESCONEXIONES",
        comando: "AT+GTCFG=gv600w,,gv600w,1,0,,,007F,2,,08E1,0,0,0,300,00,,0,1,001F,30,,,,,,24,5,15,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV600MG",
        dispositivo: "GV600MG",
        descripcion: "ENCENDER BLUETOOTH",
        comando: "AT+GTBTS=gv600mg,1,,,,,,,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    ///////////////////////////////////////////////
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "IP/PUERTO POSITION LOGIC",
        comando: "AT+GTSRI=gv600w,3,,1,209.34.233.121,13887,192.0.0.0,0,,0,0,0,0,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "APN TELEFONICA",
        comando: "AT+GTBSI=gv600w,m2mtrial.telefonica.com,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "IP/PUERTO GURTAM",
        comando: "AT+GTSRI=gv600w,,,,193.193.165.165,21419,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "AHORRO DE BATERIA",
        comando: "AT+GTCFG=gv600w,,gv600w,0,0.0,,,007F,1,,38EF,0,0,0,300,00,,0,0,001F,0,,,,,,24,,15,,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "REINICIO",
        comando: "AT+GTRTO=gv600w,03,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "APAGAR DISPOSITIVO",
        comando: "AT+GTRTO=gv600w,05,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "ACTUALIZAR POSICIÓN",
        comando: "AT+GTRTO=gv600w,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "REPORTE CADA 30 SEG. TEST",
        comando: "AT+GTFRI=gv600w,1,1,,1,0000,0000,,30,1000,1000,,0,30,00000002,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "REPORTE 3MIN ON_ 10MIN OFF",
        comando: "AT+GTFRI=gv600w,1,1,,1,0000,0000,,180,1000,1000,,0,1200,00000002,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "DESACTIVAR IGNICIÓN",
        comando: "AT+GTCFG=gv600w,,gv600w,1,0,,,007F,2,,08E1,0,0,0,300,00,,0,1,001F,30,,,,,,24,5,15,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "ENCENDIDOS/APAGADOS",
        comando: "AT+GTCFG=gv600w,,gv600w,1,0,,,007F,2,,08E1,0,0,0,300,00,,0,1,001F,30,,,,,,24,5,15,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV628W-GV648W",
        dispositivo: "GV628W-GV648W",
        descripcion: "CONEXIONES DESCONEXIONES",
        comando: "AT+GTCFG=gv600w,,gv600w,1,0,,,007F,2,,08E1,0,0,0,300,00,,0,1,001F,30,,,,,,24,5,15,0,0,,FFFF$",
        notas: ""
    },

    /////////////////////////////////////////
    {
        idDispositivo: "GL300W",
        dispositivo: "GL300W",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gl300w,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL300W",
        dispositivo: "GL300W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gl300w,3,,,,,,FFFF$",
        notas: ""
    },
    /////////////////////////////////////////////
    {
        idDispositivo: "GL300",
        dispositivo: "GL300",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gl300,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL300",
        dispositivo: "GL300",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gl300,3,,,,,,FFFF$",
        notas: ""
    },
    ///////////////////////////////////////////
    {
        idDispositivo: "CV100LG-DASHCAM",
        dispositivo: "CV100LG DASHCAM",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=cv100,1,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "CV100LG-DASHCAM",
        dispositivo: "CV100LG DASHCAM",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=cv100,3,,,,,,,,FFFF$",
        notas: ""
    },
    //////////////////////////////////////////////
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "APN TELEFÓNICA M2MTRIAL",
        comando: "AT+GTBSI=gv55w,m2mtrial.telefonica.com,,,,,,0,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "APN TELEFÓNICA GLOBAL",
        comando: "AT+GTBSI=gv55w,m2mglobal.telefonica.mx,,,,,,0,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "GURTAM  IP/PUERTO",
        comando: "AT+GTSRI=gv55w,3,,1,193.193.165.165,20979,,0,,0,0,0,0,,30,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "APN TRIAL/IP/PUERTO GURTAM",
        comando: "AT+GTQSS=gv55w,m2mtrial.telefonica.com,,,3,,1,193.193.165.165,20979,,0,,0,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "APN GLOBAL/IP/PUERTO GURTAM",
        comando: "AT+GTQSS=gv55w,m2mglobal.telefonica.mx,,,3,,1,193.193.165.165,20979,,0,,0,0,0,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "ACTUALIZAR POSICIÓN",
        comando: "AT+GTRTO=gv55w,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv55w,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "REPORTE  3 MIN ON / 10 MIN OFF",
        comando: "AT+GTFRI=gv55w,1,0,,0,0000,0000,,180,1000,1000,,0,600,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "REPORTE A MINUTO",
        comando: "AT+GTFRI=gv55w,1,0,,0,0000,0000,,60,1000,1000,,0,60,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "PARO DE MOTOR",
        comando: "AT+GTOUT=gv55w,1,0,0,0,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "HABILITADOR DE MOTOR",
        comando: "AT+GTOUT=gv55w,0,0,0,0,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "ACTIVAR BUZZER PRUEBAS",
        comando: "AT+GTOUT=gv55w,0,0,0,1,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "DESACTIVAR BUZZER PRUEBAS",
        comando: "AT+GTOUT=gv55w,0,0,0,0,0,0,,,,3,,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "ACTIVAR SPEED ALARM 90 KM/H",
        comando: "AT+GTSPD=gv55w,2,0,90,1,3600,2,1,0,0,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "DESACTIVAR SPEED ALARM",
        comando: "AT+GTSPD=gv55w,0,0,0,0,30,0,0,0,0,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "APAGAR DISPOSITVO",
        comando: "AT+GTRTO=gv55w,5,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV55W",
        dispositivo: "GV55W",
        descripcion: "BORRAR BUFFER",
        comando: "AT+GTRTO=gv55w,D,,0,,,,FFFF$",
        notas: ""
    },

    //////////////////////////////////////////////////
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv57,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv57,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "AT+GTOUT=gv57,1,0,0,,,,1,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV57MG",
        dispositivo: "GV57MG",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gv57,0,0,0,,,,1,,,,,,,FFFF$",
        notas: ""
    },
    ////////////////////////////////////////////
    {
        idDispositivo: "GV75MG",
        dispositivo: "GV75MG",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gv75m,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GV75MG",
        dispositivo: "GV75MG",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gv75m,3,,0,,,,FFFF$",
        notas: ""
    },
    //////////////////////////////////////////
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gmt100,1,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gmt100,3,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "PARO DE MOTOR",
        comando: "AT+GTOUT=gmt100,,,,1,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "HABILITADO DE MOTOR",
        comando: "AT+GTOUT=gmt100,,,,0,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "CARGA SOLO ENCENDIDO",
        comando: "AT+GTCFG=gmt100,gmt100,gmt100,1,0,1,0,37,2,,1840C,,0,0,300,0,,1,1,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "CARGA CONSTANTE",
        comando: "AT+GTCFG=gmt100,gmt100,gmt100,1,0,1,0,37,2,,1C40F,,0,0,300,0,,0,1,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "REPORTE IGN ON 5 MIN MOTOS 1/2",
        comando: "AT+GTFRI=gmt100,1,0,,0,0000,0000,300,300,1000,1000,,0,1200,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "REPORTE IGN ON 5 MIN MOTOS 2/2",
        comando: "AT+GTTOW=gmt100,1,300,300,300,0,0,0,0,3,6,3,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "WATCHDOG",
        comando: "AT+GTDOG=gmt100,1,10,1,1200,,1,0,,60,60,30,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "SOS Activar Salida para panico(azul)",
        comando: "AT+GTDIS=gmt100,0,1,,,1,1,2,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "SOS Crear Boton de Panico",
        comando: "AT+GTSOS=gmt100,1,1,,0,0,0,0,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "MANIPULAR ODOMETRO",
        comando: "AT+GTCFG=gmt100,gmt100,gmt100,,0,,,,,,,,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "APN TELEFONICA",
        comando: "AT+GTBSI=gmt100,m2mtrial.telefonica.com,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "IP/PUERTO Position Logic",
        comando: "AT+GTSRI=gmt100,,,,209.34.233.121,11535,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "IP/PUERTO GURTAM",
        comando: "AT+GTSRI=gmt100,,,,193.193.165.165,20546,,,,,,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "Intervalo de reporte 1min ON 10min OFF",
        comando: "AT+GTFRI=gmt100,1,0,,0,0000,0000,60,60,1000,1000,,0,600,,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "DESHABILITA: IGNICION",
        comando: "AT+GTCFG=gmt100,gmt100,gmt100,1,0,1,0,37,2,,40C,,0,0,300,0,,0,1,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GMT100",
        dispositivo: "GMT100",
        descripcion: "DESHABILITA: IGNICIÓN-ENCENDIDOS-APAGADOS-CONEXIONES Y DESCONEXIONES DE BATERIA",
        comando: "AT+GTCFG=gmt100,gmt100,gmt100,1,0,1,0,37,2,,400,,0,0,300,0,,0,1,,,FFFF$",
        notas: ""
    },

    ///////////////////////////////////////
    {
        idDispositivo: "GT301",
        dispositivo: "GT301",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gt301,1,FFFF",
        notas: ""
    },
    {
        idDispositivo: "GT301",
        dispositivo: "GT301",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gt301,3,FFFF",
        notas: ""
    },
    ////////////////////////////////////////
    {
        idDispositivo: "GL500",
        dispositivo: "GL500",
        descripcion: "ACTUALIZAR POSICION",
        comando: "AT+GTRTO=gl500,1,,0,,,,FFFF$",
        notas: ""
    },
    {
        idDispositivo: "GL500",
        dispositivo: "GL500",
        descripcion: "REINICIAR EQUIPO",
        comando: "AT+GTRTO=gl500,3,,,,,,FFFF$",
        notas: ""
    },
    ////////////////////////////////////////
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12BL",
        dispositivo: "TLW2-12BL",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    ////////////////////////////////////////
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW2-12B",
        dispositivo: "TLW2-12B",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    ////////////////////////////////////
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-10A",
        dispositivo: "TLW1-10A",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    //////////////////////////////////////////
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "TLW1-8A",
        dispositivo: "TLW1-8A",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    ///////////////////////////////////////////
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "RELAY,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "HABILITADO DE MOTOR",
        comando: "RELAY,0000,0#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "ACTIVAR BUZZER",
        comando: "DOUT2,0000,1#",
        notas: ""
    },
    {
        idDispositivo: "PIONNERX",
        dispositivo: "PIONNERX",
        descripcion: "DESACTIVAR BUZZER",
        comando: "DOUT2,0000,0#",
        notas: ""
    },
    ////////////////////////////////////////
    {
        idDispositivo: "KNIGHTX-100",
        dispositivo: "KNIGHTX-100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "KNIGHTX-100",
        dispositivo: "KNIGHTX-100",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    /////////////////////////////////////////////
    {
        idDispositivo: "TLP1-P",
        dispositivo: "TLP1-P",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-P",
        dispositivo: "TLP1-P",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    ///////////////////////////////////////////
    {
        idDispositivo: "TLP1-LF",
        dispositivo: "TLP1-LF",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
     {
        idDispositivo: "TLP1-LF",
        dispositivo: "TLP1-LF",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    /////////////////////////////////////////////
    {
        idDispositivo: "SOLARGUARDX-100",
        dispositivo: "SOLARGUARDX-100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "SOLARGUARDX-100",
        dispositivo: "SOLARGUARDX-100",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    {
        idDispositivo: "SOLARGUARDX-100",
        dispositivo: "SOLARGUARDX-100",
        descripcion: "APERTURA CANDADO",
        comando: "UNLOCK,0000#",
        notas: ""
    },
    ///////////////////////////////////////////////////
    {
        idDispositivo: "TLP2-SFB",
        dispositivo: "TLP2-SFB",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP2-SFB",
        dispositivo: "TLP2-SFB",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    ////////////////////////////////////////////////
    {
        idDispositivo: "TLP1-SF",
        dispositivo: "TLP1-SF",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLP1-SF",
        dispositivo: "TLP1-SF",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    /////////////////////////////////////////////
    {
        idDispositivo: "TLD2-D",
        dispositivo: "TLD2-D",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "TLD2-D",
        dispositivo: "TLD2-D",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    //////////////////////////
    {
        idDispositivo: "WARRIORX-100",
        dispositivo: "WARRIORX-100",
        descripcion: "ACTUALIZAR POSICION",
        comando: "GOOGLE,0000#",
        notas: ""
    },
    {
        idDispositivo: "WARRIORX-100",
        dispositivo: "WARRIORX-100",
        descripcion: "REINICIAR EQUIPO",
        comando: "REBOOT,0000#",
        notas: ""
    },
    /////////////////////////
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "ACTUALIZAR POSICION",
        comando: "RESET",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "REINICIAR EQUIPO",
        comando: "COORDS",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "setio 0,2",
        notas: ""
    },
    {
        idDispositivo: "TRACE5",
        dispositivo: "TRACE5",
        descripcion: "HABILITADO DE MOTOR",
        comando: "setio 1,2",
        notas: ""
    },
    ///////////////////////////////
    {
        idDispositivo: "OB22",
        dispositivo: "OB22",
        descripcion: "ACTUALIZAR POSICION",
        comando: "STATUS#",
        notas: ""
    },
    {
        idDispositivo: "OB22",
        dispositivo: "OB22",
        descripcion: "REINICIAR EQUIPO",
        comando: "RESET#",
        notas: ""
    },
    ////////////////////////////////
    {
        idDispositivo: "AT1",
        dispositivo: "AT1",
        descripcion: "ACTUALIZAR POSICION",
        comando: "STATUS#",
        notas: ""
    },
    {
        idDispositivo: "AT1",
        dispositivo: "AT1",
        descripcion: "REINICIAR EQUIPO",
        comando: "RESET#",
        notas: ""
    },
    /////////////////////////
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "PARO DE MOTOR SMS",
        comando: "STOPELEC123456",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "HABILITADO SMS",
        comando: "SUPPLYELEC123456",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "SOLICITAR POSICION SMS",
        comando: "POSITION123456",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "RESET SMS",
        comando: "REBOOT123456",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "DIRECCION IP POSITION",
        comando: "ip209.34.233.126port11204",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "DIRECCION IP GURTAM",
        comando: "ip193.193.165.165port21178",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "APN TELCEL",
        comando: "apn123456 internet.itelcel.com",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "APN TELEFONICA",
        comando: "apn123456 m2mtrial.telefonica.com",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "USUARIO Y PASS APN",
        comando: "user webgprs webgprs2002",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "TIEMPO DE REPORTE",
        comando: "at300sum0",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "IMEI",
        comando: "number20000001",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "ESTATUS E INFO IMEI",
        comando: "TCP",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "BORRAR DATOS",
        comando: "REQUESTDELETEADMIN",
        notas: ""
    },
    {
        idDispositivo: "ATA5",
        dispositivo: "ATA5",
        descripcion: "INICIALIZACIÓN",
        comando: "Begin123456",
        notas: ""
    },
    ////////////////////////////////
    {
        idDispositivo: "JT701",
        dispositivo: "JT701",
        descripcion: "ACTUALIZAR POSICION",
        comando: "(P02)",
        notas: ""
    },
    {
        idDispositivo: "JT701",
        dispositivo: "JT701",
        descripcion: "REINICIAR EQUIPO",
        comando: "(P14)",
        notas: ""
    },
    {
        idDispositivo: "JT701",
        dispositivo: "JT701",
        descripcion: "APERTURA CANDADO",
        comando: "(P43,123456)",
        notas: ""
    },
    ///////////////////
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST300CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST300CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "ST300CMD;IMEI;02;Enable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST310U",
        dispositivo: "ST310U",
        descripcion: "HABILITADO DE MOTOR",
        comando: "ST300CMD;IMEI;02;Disable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    ////////////////
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "ACTUALIZAR POSICION",
        comando: "CMD;IMEI;03;01",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "REINICIAR EQUIPO",
        comando: "CMD;IMEI;03;03",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "DESPERTAR DISPOSITIVO PASO 1",
        comando: "CMD;ESN;03;05",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4910",
        dispositivo: "ST4910",
        descripcion: "DESPERTAR DISPOSITIVO PASO 2",
        comando: "CMD;IMEI;03;01",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    ///////////
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Enable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST640LC",
        dispositivo: "ST640LC",
        descripcion: "HABILITADO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Disable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    ////////////////////////////////
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "BLOQUEO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Enable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST600R",
        dispositivo: "ST600R",
        descripcion: "HABILITADO DE MOTOR",
        comando: "ST600CMD;IMEI;02;Disable1",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    /////////////////////////
    {
        idDispositivo: "ST940",
        dispositivo: "ST940",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST910;PRESET;IMEI",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST940",
        dispositivo: "ST940",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST910;Reboot;IMEI",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    ////////////////////////////
    {
        idDispositivo: "ST3940",
        dispositivo: "ST3940",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST3940",
        dispositivo: "ST3940",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    //////////////////////////
    {
        idDispositivo: "ST4940",
        dispositivo: "ST4940",
        descripcion: "ACTUALIZAR POSICION",
        comando: "ST600CMD;IMEI;02;StatusReq",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    },
    {
        idDispositivo: "ST4940",
        dispositivo: "ST4940",
        descripcion: "REINICIAR EQUIPO",
        comando: "ST600CMD;IMEI;02;Reboot",
        notas: "SE DEBE SUSTITUIR 'IMEI' CON ID UNICO DE PLATAFORMA"
    }


 ];
