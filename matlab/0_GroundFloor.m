close All;
clc;

%Initialize variables 

%cdata is wifi signal strength : received signal power, which is measured in decibels, or dBm on a logarithmic scale
%closer to 0 dBm, the better the signal is i.e. -90 dBm	Unusable while -67 dBm	Very Good
cdata = [-76 -76	-73	-80; -72	-80	-90	-77;-70	-81	-92	-76;-72	-86	-92	-80;-82	-88	-92	-85;-80	-70	-72	-84;-75	-72	-77	-88];
%Latitude valuse observed from GPS 
xvalues = {'-81.674637','-81.674706','-81.674759' ,'-81.674828'};
%Longitude valuse observed from GPS 
yvalues = {'41.502048','41.502327','41.502609','41.502892','41.503181' ,'41.503464','41.503738'};

%Plotting heatmap 
h = heatmap(xvalues,yvalues,cdata, 'Colormap',summer);

%Setting up Heatmap variables
h.Title = 'CSU Wifi Heatmap Ground Floor';
h.XLabel = 'Latitude  ';
h.YLabel = 'Longitude ';
h.GridVisible = 'off';
h.CellLabelColor="none";                                                                                                                                                                                                                                                                                                                                                    

