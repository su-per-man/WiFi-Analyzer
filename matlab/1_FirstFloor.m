close All;
clc;

%Initialize variables 

%cdata is wifi signal strength : received signal power, which is measured in decibels, or dBm on a logarithmic scale
%closer to 0 dBm, the better the signal is i.e. -90 dBm	Unusable while -67 dBm	Very Good
cdata = [-88	-71	-74	-78	;	-80	-75	-54	-78	;	-76	-68	-59	-78	;	-73	-65	-61	-86	;	-81	-63	-58	-81	;	-72	-52	-63	-86	;	-76	-48	-59	-82	;	-79	-54	-54	-83	;	-74	-64	-64	-82	;	-72	-64	-64	-80	;	-69	-60	-60	-86	;	-75	-46	-46	-84	;	-65	-48	-48	-82	;	-65	-51	-54	-84	;	-73	-75	-79	-74	];
%Latitude valuse observed from GPS 
xvalues = {'-81.674599',	'-81.674438',	'-81.674263',	'-81.674118'};
%Longitude valuse observed from GPS 
yvalues = {'41.503641',	'41.503562',	'41.503511',	'41.503362',	'41.503011',	'41.502942',	'41.502844',	'41.502803',	'41.502740',	'41.502681',	'41.502642',	'41.502511',	'41.502283',	'41.502282',	'41.502211'};


%Plotting heatmap 
h = heatmap(xvalues,yvalues,cdata, 'Colormap',summer);

%Setting up Heatmap variables
h.Title = 'CSU Wifi Heatmap First Floor'; 
h.XLabel = 'Latitude  ';
h.YLabel = 'Longitude ';
h.GridVisible = 'off';
h.CellLabelColor="none";   

