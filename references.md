# Shared Tools - History Manager and History Reporting‌

## Logging, undoing, and re-doing user actions‌

The history manager serves two purposes. On the one hand, it allows you to precisely log, and thereby document, all steps that lead to a particular result. This log can be saved to disk as an Excel® report. On the other hand, with the history available, the user can step back in the history to any previous state of the current session, and take that as starting point for a different direction in model development.

![History manager, and history related ribbon groups in PK-Sim®](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PKSIM_History.png)

The history manager is available both in PK-Sim® and MoBi®, with only minor differences between the two programs. It is located at the lower part of the application window screenshot above. If it is not apparent, look for the little handle on the lower left corner which can be used, by hovering over, to pop up the history manager. Use the top right controls (in this history window) to make the history permanently visible. Other elements of relevance for interaction with the history are placed in the "Modeling & Simulation" ribbon as Buttons:

*   Undo

*   Add Label...

*   Create Report

The history manager itself presents a table view of the history. Each line of the history describes a specific _state_ of the project that was arrived at after a user interaction. The topmost state in the list is the current state of the project. Each line has several columns that describe the state, with small differences between PK-Sim® and MoBi®:

*   PK-Sim®

*   State After Action: The number of the state of this history line

*   Building Block Type: Which building block _type_ was affected by the associated action

*   Building Block Name: Which building block name was affected by the associated action

*   Command Type: The particular command of this state

*   Object Type: A building block may be composed out of different objects, it is mentioned here which type was affected

*   Description: What was done in this action. This columns deserves your main attention

*   User: Since a project may be edited by several users, the user that caused this item is listed here

*   Time: Date and time of the action

*   MoBi®

*   State After Action: The number of the state of this history line

*   Command Type: The particular command of this state

*   Object Type: An object type may be a building block, a reaction, a formula, or something else. Here, the particular object type that was affected is listed

*   Description: What was done in this action. This columns deserves your main attention

*   User: Since a project may be edited by several users, the user that caused this item is listed here

*   Time: Date and time of the action

{% hint style="tip" %}
Like most tables in PK-Sim®, the history table view can be sorted and filtered by _any_ column. The column can be used for sorting by clicking on the column header. When hovering over the column header with the mouse, you can see a little funnel symbol: By clicking on the funnel a list with all entries in that particular column is shown. You can select one of the entries and the table will be filtered to show only rows containing that entry in the column.
{% endhint %}

The following sections describe the use of the history manager for a) navigating in the project history, b) adding labels and comments to the history, and c) exporting the history as a report.

### Undo and rollback: Navigating through the history‌
    
As known from other applications, user interactions of the current session can be un-done:
    
The history manager has a "Rollback..." button and an associated numerical field. Within the history manager, the history list displays all previous user actions. You can select an entry in this list. The entry is numbered, and the number appears in the numerical field. You can click the "Rollback..." button, and this will undo all actions that were performed after the respective step and revert the state of the project to that numbered state.

{% hint style="note" %}
Please note that by using the rollback function all intermediate steps will, nevertheless, be conserved and can be restored. However, in contrast to the undo functionality, simulation results will not be reconstructed and it is required to re-run the simulation.
{% endhint %}

PK-Sim® offers an additional way to achieve this:

The "Modeling & Simulation" ribbon has a ribbon group History that offers a button "Undo". By clicking this button, you undo the last action. A second click on this button will undo the undo - that is reverting to the original state.

### Labels and comments‌
    
At any stage, the current stage of the application can be labeled. The History Manager provides an button "Add Label...". When clicking on this button, an "Add Label..." window appears and allows you to add a label and a comment. This label will appear in the history manager and be time stamped with the current date and time. Labels are always applied to the _current_ state of the project.

In addition, the history manager provides an button, "Edit Comments". This can be used to add a comment to the currently selected entry of the history. If a comment already exists, it can be edited. Comments of a label can be edited as well.

In PK-Sim®, the "Add Label..." and "Edit Comments" functionality is additionally available as buttons in the "Modeling & Simulation" ribbon.

### Exporting the history‌
    
The "Modeling & Simulation" ribbon provides a "Export History" button. When clicking on this button and selecting "Export history to Excel®", a file save dialog appears. Please choose a location and name for the file. The file will be saved in Excel® format and opened in Excel® after saving is complete.anges in the Journal Editor are saved and displayed in the Journal view. Moreover, changes in the Working Journal made by other users are reflected in the Journal view. Keep in mind that a Working Journal can be shared by different project files and so different users can use the same Working Journal simultaneously.
    
#### Select Journal
    
A file selection dialog is opened, which allows you to select another Working Journal .sbj file. This is usually not necessary, only in case you have selected the wrong Working Journal before.

## Adding content to a Journal page‌

Besides manually entering content into a Journal page, you can copy and paste tables and charts from PK-Sim or MoBi. So you can for example copy the

Favorites table and the simulation chart within seconds to a Journal page and in this way document input and output of your model.

{% hint style="tip" %}
It is recommended to select all parameters under consideration as **Favorites** and to document the source of all parameter values changed from the default in the column **Value Description**. This ensures a comprehensive overview of the essential input of your simulation which you can document by copying just the Favorites table.
{% endhint %}

### Copy & paste of tables‌
    
You can copy tables or selection of rows to a Journal Page.

In both cases only the visible rows and columns are copied. So you can use the sorting and filtering features of the table to restrict the transferred table content. You can also remove a column by just dragging the column header out of the table area.

To copy the visible table into the Working Journal, do the following:

1.  Right click into a row header (on the left of a row) and select
    
    *   Copy Table \- to copy the whole visible table - or
        
    *   Copy Selected Rows \- to copy all selected rows (you should have selected rows before by SHFT + Click or CTRL + Click)
        
2.  Switch to the Journal Editor, move the cursor to the intended position and select Paste from the context menu (by right click).
    
Alternatively, you can paste the tables also to other tools like Powerpoint® or Excel®.
    
![Copy and paste a Table](C:\Users\Jean Manzo\Desktop\pharma-dev\images\CopyAndPasteTable.png)

{% hint style="tip" %}    
Use short cuts for copy (CTRL+C for Selected Rows, SHFT+CTRL+C for whole table) and paste (CTRL+V).
{% endhint %}

### Copy & paste of charts‌
    
You can copy charts in standard size independent on the size of the application window. To define the chart size and also font sizes open in the **Chart Editor** the Tab **Chart Export Options** and define the properties.

To copy the chart into the Working Journal, do the following

1.  Right click into the chart area and select **Copy to Clipboard**.

2.  Switch to the Journal Editor, move the cursor to the intended position and select Paste from the context menu.

Alternatively you can paste the tables also to other tools like Powerpoint® .

![Copy and paste a Chart](C:\Users\Jean Manzo\Desktop\pharma-dev\images\CopyAndPasteChart.png)

## Working with Related Items‌

Additionally to the content written and copied in a Journal Page, you can attach Simulations and Building Blocks to a Journal Page as **Related Items** to save the current state of your work.

For example, you create a Journal Page to document the working state at some milestone presentation and attach the simulations used. Later, you can easily compare current simulations to those milestone simulations and identify differences. Or you can even reload the simulation in its old state and rerun it with a changed parameter value. (Reload of a simulation in MoBi results in loading missing Building blocks, too - in PK-Sim only the simulation itself is reloaded.)

To attach a Simulation or a Building Block to the active Journal Page, just select the context menu entry ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add to Journal ...** at a Simulation or Building Block in the respective Explorer view.

The Simulation or Building Block is then displayed in the **Related Items** list at the bottom of the Journal view.

![Image](C:\Users\Jean Manzo\Desktop\pharma-dev\images\RelatedItemsList.png)

Using the icons on the right of a **Related Item** you can

*   compare the attached Simulation or Building Block to one of the current Simulations or Building Blocks of the project,

*   reload the attached Simulation or Building Block into the project using a unique name,

*   delete the **Related Item**.

## Searching the Journal‌

After you documented your project work using the Working Journal, you might want to use these "memories". To do so, you can use the meta data like Title, creation date or tags to find the Journal Page you are interested in. But often it is easier just to search for a specific keyword or phrase you used in your documentation.

To search for a word or phrase do the following:

1.  Click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Search-32x32.png) Search button in the tab **Working Journal** to open the Search area in the **Journal view**.
    
2.  Enter the phrase into the Search field (or select one previous search phrase from the list you get by clicking the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\JournalSearchPhraseList.png) button at the right of the Search field). If necessary, open the Search Options by clicking the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\JournalSearchOptionsButton.png) button and select options.
    
3.  Click on the **Find** button.
    
4.  A list of Journal Pages which contain the search phrase is displayed. For each Page the matches are displayed in the context.
    
Double click on a Journal Page to open the Page in the Journal Editor - the **Find Dialog** of the Editor is displayed automatically; so you can browse through the find results in the Page. (A direct navigation from the match in the Journal view is not possible.)

![Image](C:\Users\Jean Manzo\Desktop\pharma-dev\images\JournalSearch.png)

Click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\JournalSearchCloseButton.png) button on the left of the Search field to close the search area.

## The Journal Diagram‌

The modelling process in PBPK/PD projects is often not straight forward but requires consideration of different alternatives and testing of several approaches. So the working process is mostly not represented appropriately by just a sequence of work status. Instead, it looks like a tree with several dead ends and one path to the final solution.

Using the **Journal Diagram**, you can visualize your working process in a more appropriate way to maintain an overview of complex projects. You can use this overview for yourself or export it to project reports or slides. You can also see the Journal Diagram as a "diagram of content" of your Working Journal.

You can find the Journal Diagram at the bottom of your PK-Sim or MoBi window. It is hidden by default. If you have removed the view, you can activate it using the button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\JournalDiagramButton.png) Journal Diagram in the Tab Views. There is only one unique Journal Diagram per Working Journal.

![Image](C:\Users\Jean Manzo\Desktop\pharma-dev\images\JournalDiagram.png)

The Journal Diagram displays green rectangular nodes for each Journal Page and blue circle nodes for each attached related item at a Journal Page. You can arrange the nodes as you like just by drag & drop. If you move a Journal Page node the connected Related Item nodes are moved, too.

The green links represent predecessor-successor (or parent-child) relations in your working process. While a Journal Page representing a work status can have several successor Journal Pages, it can have only one predecessor Journal Page.

To connect two Journal Pages, do the following:

1.  click on the right connection port,

2.  hold the mouse key and drag to a left connection port of another Page,

3.  release the mouse key.

To delete a connection, select it and press the DEL key.

After you have arranged the Journal Diagram, click the Save Diagram button to save the Diagram layout to the Working Journal.

{% hint style="warning" %}
Clicking on Reset Layout to Default does immediately overwrite your layout work, so be careful using this button. (Result: All Journal Page nodes are displayed side by side in one horizontal sequence.)
{% endhint %}

You can zoom the diagram like all other diagrams by pressing the CTRL key while moving the mouse wheel.

By right click into the diagram area you get a context menu, which allows you to

*   **Copy to clipboard** the Journal Diagram (and paste it into other applications like Powerpoint® ,

*   Reset Zoom of the Journal Diagram,

*   Hide/Show Related Items to maintain the overview in large diagrams.d font is Microsoft Sans Serif. |
| Font size axis | You can adjust the font size of the axis via a drop down menu. |
| Font size legend | You can adjust the font size of the legend via a drop down menu. |
| Font size title | You can adjust the font size of the chart title in case you have defined one in **Chart Options**. |
| Font size description | You can adjust the font size of the description of the chart in case you have defined one in **Chart Options**. |
| Font size origin | You can adjust the font size of the origin data in case you have selected the **Include origin data** option. |

## Zooming the Chart‌

To zoom into the chart, do one of the following:

*   Hover the mouse over the chart. A zoom symbol appears. Press the left mouse button and drag the mouse to select a rectangle. Release the mouse button to zoom into the selected rectangle.

	![Image](C:\Users\Jean Manzo\Desktop\pharma-dev\images\ZoomRectangle.png)

*   Explicitly define the range to be displayed in the Min and Max columns in the Axis Options.

*   Use the mouse wheel while the mouse pointer is located in the chart area.

To reset the zoom right click on the chart area and select **Reset Zoom (Ctrl+0)** or use the shortcut **Ctrl+0** (Do not use the 0-key from the numeric block, but from the typewriter keys.).

## Further Actions‌

### Saving and managing chart settings‌
    
You can save the chart settings (Chart Options and Chart Export Options, Curve and Axes Options) in different Chart Templates and reuse them in a simulation. This is useful for example, if you want to switch between different settings. You can also save and load these Chart Templates to files and reuse them in other simulations.
    
Moreover:

*   in PK-Sim®, the Chart Templates are reusable in any clone of a simulation,

*   in MoBi®, the Chart Templates and Curves Selection are part of the Building Block Simulation Settings and can be reused like any other Building Blocks.

The chart manager can be accessed directly from the chart editor after running a simulation. The following options are available:

*   Apply Template: choose from a list of saved templates,

*   Create New: create a new template based on current settings for data, curves, axis and chart options,

*   Update Existing: changes the settings for the template to the current settings for data, curves, axis and chart options,

*   Manage Templates: brings you directly to the chart template manager that displays an overview of all settings in a template which can all be edited.

![Accessing chart templates and chart manager from the chart editor](C:\Users\Jean Manzo\Desktop\pharma-dev\images\ChartManageTemplates1.png)

In the chart manager, templates can be managed in the left hand side window and settings for an individual template can be edited in the two right hand side windows.

![Management and editing of chart templates in the chart manager](C:\Users\Jean Manzo\Desktop\pharma-dev\images\ChartManageTemplates2.png)

The following options are available for managing templates:

*   Clone: useful when changing specific settings based on an existing template.

*   Save template to file: allows you to reuse this template in another simulation settings building block, simulation or project.

*   Delete template

In addition, a template can be loaded as .xml file using the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Load.png) button.

In the right panel, the user can specify which curve will be selected as output and how it will be diplayed.

An automated algorithm is implemented that decides which curves are selected when a certain template is chosen. Decision criteria are based on the output path (Y-Path) and the output type (Y-Type). The following decision scenarios are feasible:

*   If a selected output matches both, Y-Path and Y-Type, it will be selected and the curve name will be used as is.

*   A selected output matches the Y-type, but not the Y-Path of a template. The Y- Path of the ouput is for example **Organism|Venous|Blood|Plasma|Diclofenac**. The algorithm will then try to find all output located in the container **Organism| Venous|Blood|Plasma**. If only one output is found, the curve name will be used as is. If two or more outputs are found, the curve name will be ignored and a new unique name will be generated based on the actual path of the ouput. Sometimes, this heuristic approach might result in many selected curves at once. If more than ten curves will be selected, the user will be asked whether be wants to proceed or choose a different template for display of the selected output curves.

{% hint style="note" %}
All changes to a template or selection of output are made at the level of an individual simulation. The simulation settings for the project remain unchanged, until the user expicitly updates the changes to the project simulation settings building block using the context menu as shown below.
{% endhint %}

![Changes in the simulation setting can be committed to the settings at the project level](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Aufnahme8.png)

### Selecting Editor Layouts‌

You can select one of the following predefined editor layouts:

| | |
|--- |--- |
| Standard View | The chart editor is auto hidden. The data browser is displayed in the upper area of the editor, the curves and axis options are displayed in the lower area. The chart options are displayed on a different tab since they are used less often.|
| Tabbed View | The chart editor is auto hidden. Data browser, curves options, axis options, chart options are displayed on four different tabs. Use this view, when you need maximal space for data browser or curve options display. |
| Two Tabs View | The chart editor is auto hidden. The data browser and curves options are displayed on the first tab, axis options and chart options are displayed on the second tab. Use this view, if the automatic axis settings fulfill your needs. |
| Variable X-Axis View | This layout is similar to standard view, but display all columns necessary for selection of an alternative x-axis (see [Using Alternative X-Values](#using-alternative-x-values)). The chart editor is docked. Use this view, if you want to use an alternative x-Axis. (Available in MoBi® only.) |

{% hint style="tip" %}
Save your preferred Editor Layout to your user settings. Just select Save to User Settings from the Layout menu at the top of the Chart Editor.

In this layout are stored the selected view and column settings in the subviews like visibility, order, column width and grouping.
{% endhint %}

### Using Alternative X-Values‌

As mentioned in the introduction of this section, typically one curve corresponds to a single time series in which the x-values represent the time axis and the y- values are the corresponding functional values, such as concentration.

![Concentration versus Time Plot](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Concentration_Time.png)

However, curves can also correspond to two time series with the same time scale. In this case, the x-values are the values of the first time series and the y-values are the values of the second time series. Thus, concentrations can be plotted against another concentration or a fraction of the dose, for example.

To select other x-values than the default ones, do the following (you can skip steps 1 and 2 when using the editor layout Variable x-Axis View):

1.  Show the x-Data column in the curves table. In detail:
    
    1.  Right-click on the columns header row of the curves table.
        
    2.  Select **Column Chooser**.
        
    3.  Drag the x-Data (and y-Data, if you like) to a position between two other column headers in the header row.
        
    4.  Close the **Column Chooser**.
        
2.  Show the dimension column in the axis table (like in step 1) and in the data browser.
    
3.  Drag the time series with same the time scale and the intended values from the data browser to the x-Data field of the desired curve in the curves table.
    
    An error symbol appears at the x-Data field, because now the x-Data and the x-axis have different dimensions, which cannot be resolved automatically.

    ![Image](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Concentration_DimensionWarning.png)
    
4.  Change the Dimension of the x-axis in the Axis Table to the dimension of the x-values manually.
    
5.  Change curve or x-axis caption according to your needs. Now the concentration is plotted against the selected x-values.
    
![Concentration versus Concentration Plot](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Concentration_FractionDose.png)

### Chart Options in User Settings‌‌

In MoBi®, you can change the default editor layout and the default curve name generation in the **Chart Options** tab within the **User Settings** dialog (click ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ChartSettings.png) **Options** in the Utilities ribbon tab).

All options here are stored in the user settings and apply for newly opened charts and curves.

 LEAST SQUARES PROBLEMS” (2nd Edition, April 2004) http://(http://www2.imm.dtu.dk/pubdb/views/edoc_download.php/3215/pdf/imm3215.pdf) www2.imm.dtu.dk/pubdb/views/edoc_download.php/3215/pdf/imm3215.pdf

**Algorithm parameters**

|   |   |
|--- |--- |
| Relative chi- square convergence criterium (ftol) | Termination occurs when both the actual and predicted relative reductions in the sum of squares are at most ftol. Therefore, ftol measures the relative error desired in the sum of squares. |
| Relative parameter convergence criterium (xtol) | Termination occurs when the relative error between two consecutive iterates is at most xtol. Therefore, xtol measures the relative error desired in the approximate solution. |
| Orthogonality convergence criterium (gtol) | Termination occurs when the cosine of the angle between fvec and any column of the jacobian is at most gtol in absolute value. Therefore, gtol measures the orthogonality desired between the function vector and the columns of the jacobian. |
| Initial step bound factor | Used in determining the initial step bound. This bound is set to the product of factor and the euclidean norm of diag*x if nonzero, or else to factor itself. In most cases, factor should lie in the interval 0.1, 100. 100 is a generally recommended value. |
| Maximum number of iterations | The maximum number of iterations to perform. If the number of calculation iterations exceeds MAXITER, then the algorithm returns. If MAXITER = 0, then the algorithm does not iterate to adjust parameter values; however, the user function is evaluated and parameter errors/covariance/ Jacobian are estimated before returning. |
| Maximum number of function evaluations | Termination occurs when the number of calls to objective function is greater or equal this value by the end of an iteration. |
| Finite derivative step size (epsfcn) | Used in determining a suitable step length for the forward- difference approximation. This approximation assumes that the relative errors in the functions are of the order of epsfcn. If epsfcn is less than the machine precision, it is assumed that the relative errors in the functions are of the order of the machine precision. |

#### Nelder - Mead

This algorithm does not use the defined bounds defined for the Identification Parameters.

For a description of this algorithm see

Nelder, John A.; R. Mead (1965). "A simplex method for function minimization". Computer Journal 7: 308–313

**Algorithm parameters**

|   |   |
|--- |--- |
| Convergence tolerance | Relative convergence tolerance |
| Maximum evalutions | Termination occurs when the number of calls to objective function is greater or equal this value |

### Variation of calculation methods and multiple optimizations‌

#### Multiple optimization
    
As explained above, optimization results can depend on the start values, if different local optima exist. This can happen for instance, if more identification parameters are selected and the observed data is heterogeneous. In such situations performing multiple optimization with randomized start values (randomly chosen from the range defined for the Identification Parameters) can lead to different results. Results can compared manually by the global error.
    
If multiple optimizations all return the same result, this is more likely a global optimum.
    
Depending on the number of processors in your computer and the corresponding setting in the General Options (Menu Utilities), optimizations are performed in parallel.
    
#### Calculation Methods Variation
    
In PK-Sim® often it is not clear, which Calculation Method is most appropriate to fit given observed data. Using the **Calculation Methods Variation** you can optimize simulations for different calculation methods e.g. for the Partition Coefficients, and compare the results.

![Configuration of Calculation methods variation](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Option_Calculation_Methods_Variation.png)

If you have more than one molecule, you can decide whether the calculation methods should be **All the same** for all molecules or if different combinations of molecules and calculation methods should be tested.

Also, here optimization are done in parallel as long as processors are available to the Open Systems Pharmacology Suite.

### Display of intermediate and final results‌

#### Visual Feedback‌
    
During the optimization run, you can view intermediate results. Click **Show Visual Feedback** in the Ribbon bar **Run & Analyze**. A new window is displayed.
    
![Parameter Identification - Visual Feedback data](C:\Users\Jean Manzo\Desktop\pharma-dev\images\visual-feedback-data.jpg)
    
In this window the status of the optimization run is displayed and a table with the best and currently tested Identification Parameter values and the resulting total error.
    
The error history is displayed in a chart. You can use this information to stop the optimization run manually in certain situations and to assess if the optimization run had decreased the error substantially.
    
In the lower area you can select an output mapping and the current comparison between simulation and observed data values is displayed.

You can click the button **Parameters History** to export a table with all parameter value vectors tested during the optimization . And you can export the error history to Excel by right click into the chart. You can use this information for evaluation of the solution path, e.g. to assess the sensitivity of parameters.

In case of **Multiple optimization** or **Calculation Methods Variation** the Visual Feedback window gives an overview about the status of the different optimizations. You cannot switch to the detailed Visual Feedback view here.

![Visual Feedback of Calculation methods variation](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Feedback_Calculation_Methods_Variation.png)

### Results of Parameter Identification‌
    
After the optimization run is finished, you can view the results in the tab Results.

Status, elapsed time, number of evaluations and the resulting total error are displayed in the upper table.

Below, you find a table with the optimal values, start values and ranges for all Identification Parameters.

You can copy and paste both tables for documentation of the results e.g. to the Working Journal.
    
![Parameter Identification - Results data](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Tab_Results.png)

In case of **Multiple optimization** or **Calculation Methods Variation** you can compare the identified parameter value vectors and total errors for different Calculation Methods or Start Values in the tab Results.
    
![Result of Calculation methods variation](C:\Users\Jean Manzo\Desktop\pharma-dev\images\Results_Calculation_Methods_Variation.png)

### Analyses‌
    
From the ribbon Run & Analyze you can select different charts to analyze the optimization result and assess its quality.

#### Time Profile
    
For the different outputs, simulation and observed data values are displayed in different colors.

![Parameter Identification Analysis - Time Profile](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_TimeProfile.png)

#### Predicted vs. Observed

For each observed concentration value a point is plotted with observed value as x-Value and corresponding simulation value as y-Value.

![Parameter Identification Analysis - Predicted vs. Observed](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_PredictedVsObserved.png)

In case of different dimensions of the outputs you have to switch the x-Axis dimension to see the respective outputs.

#### Residuals vs. Time

This chart is similar to the Time Profile chart, but on the y-axis the (absolute) residuals used in the optimization are plotted. The chart includes scaling, weights and LLOQ usage and the values are dimensionless, so you can assess the actual influence of the observed data.

![Parameter Identification Analysis - Residuals vs. Time](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_ResidualsVsTime.png)

#### Histogram of Residuals

Using this chart, you can check if the residuals are distributed normally - the normal distribution is indicated by the black curve. Strong deviations from normal distribution indicate that the scaling of the parameters may not be appropriate or the model does not reflect the observed data.

![Parameter Identification Analysis - Histogram of Residuals](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_HistogramResiduals.png)

#### Correlation Matrix

Based on the partial derivatives calculated locally at the found optimal parameter values, the **Correlation Matrix** and **Covariance Matrix** give some information about _local sensitivity_ of **Identification Parameters**.

The correlation between two identification parameters based on the observed data is high (positive or negative), if the entry in the correlation matrix is near to 1 or -1\. Entries between -0.5 and 0.5 indicate a low correlation.

You can use the correlation information to select the parameters to identify. In general, you will often observe correlations, if you have selected many identification parameters, see for example the results if you add the Specific clearance as an identification parameter.

{% hint style="warning" %}
Keep in mind that all information in this analysis is calculated only at the optimal values and is not necessarily valid in general.
{% endhint %}

![Parameter Identification Analysis - Correlation Matrix for two identification parameters](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_CorrelationMatrix.png)

![Parameter Identification Analysis - Correlation Matrix for three identification parameters](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_CorrelationMatrix3.png)

#### Covariance Matrix

The Covariance matrix gives additional statistical information and can be used to estimate confidence intervals for the identification parameters.

{% hint style="warning" %}
Keep in mind that all information in this analysis is calculated only at the optimal values and is not necessarily valid in general.
{% endhint %}
  
![Parameter Identification Analysis - Covariance Matrix for two identification parameters](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_CovarianceMatrix.png)

![Parameter Identification Analysis - Covariance Matrix for three identification parameters](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_Analysis_CovarianceMatrix3.png)

### Confidence Interval‌
    
From the ribbon Run & Analyze in the ribbon bar **Confidence Intervals** you can select different confidence interval charts to assess the quality of the Parameter Identification results.

Keep in mind, that **Visual Predictive Check interval** and **Prediction** interval are only available for measured quantities.

{% hint style="warning" %}
Even if the curves itself are positive, the lower ranges can become negative. Because negative values cannot be displayed in a log scale chart the curves are not visible then. In that case just switch the scaling for the corresponding y-Axis to linear, which is anyway recommended for fractions.
{% endhint %}

For more detailed background information about the _confidence intervals_, _model error_ and data error see \[[23](../references.md#23)\], \[[20](../references.md#20)\], \[[2](../references.md#2)\].

#### Confidence Interval

This chart displays the 95% confidence interval of the _model error_, which is based on the uncertainty of estimated parameters. This uncertainty is based on an estimation of the error between the mean value of used observed data compared with the mean value of the (unknown) total data.

![Parameter Identification - Confidence interval](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_ConfidenceInterval.png)

#### Visual Predictive Check Interval

This chart displays the 95% Visual Predictive Check interval, which corresponds to the uncertainty based on the _data error_. The _data error_ is the standard deviation of the distribution of the used observed data.

{% hint style="note" %}
You should check, if the distribution of observed data corresponds to the calculated interval, e.g. about 95% of the data points should lie in the calculated interval and the shape of the interval fits to the observed data.
{% endhint %}

If major deviations exist, the reliability of the Parameter Identification result is in question.

In that case you should consider to

*   improve the optimization, e.g. by different settings in the tab **Configuration**,

*   improve the _error model_, e.g. changing weights or scaling of outputs in tab **Data**,

*   improve the model itself.



![Parameter Identification - Visual Predictive Check interval](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_VPCCheckInterval.png)

#### Prediction Interval

This chart displays the 95% Prediction interval, which corresponds to the combination of the _model error_ and the _data error_. It shows, how much future measured data are expected to differ from the model predictions.

![Parameter Identification - Prediction interval](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PI_PredictionInterval.png)

## More Features‌

### Reuse of a Parameter Identification‌

Parameter Identifications are saved in the project files and can be attached to the **Working Journal**. So you can rerun Parameter Identifications after modification of the original simulations as long as used outputs and simulation parameters are kept in the simulation.

You can also clone a Parameter Identification by selecting **Clone** in the context menu of a **Parameter Identification** in the **Simulation Explorer**. In the cloned Parameter Identification you may define different Identification Parameters or a different configuration.

Sometimes you may have different simulations for the same observed data to compare model alternatives. In this case you can also reuse a Parameter Identification by cloning it. Afterwards, you can replace a used simulation with another simulation (with same or similar observed data, outputs and simulation parameters) by selecting **Replace Simulation ...** in the context menu of the simulation in the Data tab.

The mapping definition with weights, the definition of Identification Parameters and the Configuration remain the same as long as the corresponding parameters are available.
    
### Export of Parameter Identification to Matlab®‌

If you want to use the Matlab® optimization capabilities for optimization, you can export the Parameter Identification to Matlab® by selecting the corresponding entry from the context menu of a **Parameter Identification** in the **Simulation Explorer**.

Into the selected folder then are exported:

*   the simulations as .xml-Files,

*   the configuration of the Parameter Identification as .xml-File,

*   a example script for optimization and display of results as .m-File.

Before calling that script ensure in Matlab® that the path contains the directory "Open Systems Pharmacology\\MoBi Toolbox for Matlab".w that will open, select a location where it is saved and choose a name to save it.

The selected container, including all its sub-containers, parameters and neighborhoods between the sub-containers will be saved.

To **load a Container into a Spatial Structure** from a pkml file:

1.  Right-click onto the desired target position for it in the Diagram Area or in the tree view, and select **Load Container** from the context menu.

2.  Select a folder and then a pkml file from the file browser window that will open.
    
3.  If the pkml files contains more than one container, select the desired container.
    
The selected container, including all its sub-containers and neighborhoods between the sub-containers, will be loaded. If duplicate names occur, you may be asked to enter a new name. Any desired neighborhood relations (see [Creating Neighborhoods](#creating-neighborhoods)) to already existing containers in the spatial structure will have to be newly created.

You may also load and save an entire Spatial Structure building block as pkml file. This is described in detail for molecules in [Loading, Editing, and Saving Molecules](#loading-editing-and-saving-molecules) and applies also for a spatial structure.

{% hint style="tip" %}
A collection of template files with predefined building blocks is automatically installed together with MoBi® in the default program data directory. The entry "Templates" in the program start menu in the "MoBi" program group will lead you to the proper path.
{% endhint %}

### Creating Neighborhoods‌‌

Within a spatial structure, transport processes may occur (see [Active Transporter Molecules](#active-transporter-molecules) or [Passive Transports](#passive-transports)). If you plan to define a transport process within a project, it is necessary to define a neighborhood for a transport to become active. Creating a neighborhood works similar to connecting reaction partners with a reaction triangle:

1.  Move the mouse to one of the connected containers until the mouse pointer changes from the standard arrow ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ArrowCursor.png) to a hand symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\HandCursor.png).

2.  Hold the left mouse button and drag the connection, displayed by a line, to the container you want to have as a second neighborhood partner until the line hits its rim. In our case, connect "Vial1" with "Vial2".

3.  You will be asked for a neighborhood name that is required to proceed. Enter "V1V2Connection" and click **OK**. In the Diagram Area, the thin initial line is replaced by a bold line showing a circle half-way in the connection. Also, the neighborhood appears in the tree view of the spatial structure.

The screen now looks like this:

![Neighborhood created between two child containers](C:\Users\Jean Manzo\Desktop\pharma-dev\images\NeighborhoodDone.png)

Like the containers, the neighborhood may contain parameters and may carry tags. These parameters could describe the physical makeup of a neighborhood, and these values may later be used in the formulas of transport processes. If you look at simulations imported from PK-Sim®, you will see examples for such parameters. The spatial structure of such a PBPK model is much more complex, but editing it works in the same way as described for our simple example.

## Molecules‌

The Molecules building block contains all molecules with their default start values, molecule-specific parameters and properties. A molecule has a name, typically the name of the compound. Parameters and properties can be defined by you to describe the physico-chemistry, like solubility or lipophilicity. These parameters may later be used in reactions, passive and active transport processes, or may influence events. Also, active transporter molecules and transport processes are defined for each molecule, if relevant for the model.

Start by opening a Molecules building block for editing. In the **Building Block Explorer**, open the Molecules folder and edit the Molecules building block by either right-clicking it and selecting "Edit", or by double-clicking on it. A new tab with an empty space will open. This is the work space where you can add new molecules or load molecules from other projects. You may notice that the ribbon of the MoBi® window has changed, being tabbed "Edit Molecule", to offer you clickable ribbon buttons for molecule-related actions (compare in [Enter Molecules](01-first-steps.md#enter-molecules)).

### Creating New Molecules‌
    
To create a new molecule:

1.  Click in the newly visible ribbon **Add** on the button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\NewMolecule.png) **New**, or right-click into the Diagram area (the empty space below the tab "Molecules") and choose **Create Molecule** from the context menu that appears. A new window titled "New Molecule" will open.
    
2.  Enter a molecule name into the "Name" input box.
    
3.  Alternatively, a molecule can be created based on a PK-Sim® template. This can be achieved by using the button **PK-Sim Molecule** in the **Add** ribbon or **Add PK-Sim Molecule** from the context menu in the diagram area.
    
4.  Enter a name for the PK-Sim molecule and the four physicochemical properties as listed.
    
At this point, you may already input a value for the "Default Start Amount" which is set to zero by default. Also, you may define molecule parameters after clicking on the "Parameters" tab of the "New Molecule" window (see below). Both operations, however, can also be done after the molecule is created (see below), which is finalized by pressing the **Enter** key or by clicking **OK**. The newly created molecule name now appears in the left part of the Molecules edit tab, and a tab on the right shows the properties of the molecule.
    
![New Molecule window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\new-molecule-window.jpg)

### Loading, Editing, and Saving Molecules‌
    
Alternatively to newly creating a molecule, **molecules can be loaded from a pkml file**. This file can be    

*   a PK-Sim® export containing molecules (see [Export to \*.pkml file for MoBi®](../part-3/13-importing-exporting-project-data-models.md#export-to-pkml-file-for-mobi), for how to create such a file),

*   an entire previously saved MoBi® simulation,

*   a saved Molecules building block from a previous project,

*   or a previously saved molecule file.

{% hint style="tip" %}
A collection of template files with predefined building blocks is automatically installed together with MoBi® in the default program data directory. The entry "Templates" in the program start menu in the MoBi program group will lead you to the proper path.
{% endhint %}

Use one of such files an proceed in the following way:

1.  Click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\LoadMolecule.png) **Load** ribbon button, or right-click into the empty space below the tab "Molecules" and choose **Load Molecule** from the context menu that appears.

2.  Select a folder and then a pkml file from the file browser window that will open.

3.  If the pkml file contains more than one molecule, select one or more from the list that is displayed. If one or more molecule names are already in use in the current project, you will be asked for alternative names.

You can **edit the molecule properties** for the molecule in the tree that is currently being highlighted.

*   Within the properties window, the checkbox ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **Stationary** determines if the corresponding molecule will be transported by [Passive Transports](#passive-transports) processes described below (see [Passive Transports](#passive-transports)) - this box should thus be checked ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Checked.png) only for immobile molecules, like membrane-bound receptors or transporters.

*   Select the **Molecule Type** specification from the combobox. This has only influence on the icon depicted in front of the molecules in the molecules tree view to the right. Selectable options are ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Drug.png) Drug, ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Enzyme.png) Enzyme, ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Transporter.png) Transporter, Complex, Metabolite, ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Protein.png) Protein, and Other Protein.

*   The **Default Start Amount** determines what default value will be used whenever "Molecule Start Values" are created (see “Molecule Start Values”). The value should be left on 0 for all molecules which only will be created in the process of the simulation. For complex spatial structures, it might be an alternative strategy to set all default start amount values to 0 and set everything manually in the molecule start values for those containers where a molecule is present in known concentrations.

*   The **Used Calculation Methods** at the bottom right of the edit window shows three comboboxes for the selection of calculation methods for the distribution of the molecule within a model exported from PK-Sim®. The calculation method defines which method is used to calculate parameter values of parameters located in the "Spatial Structure" ("MoleculeProperties") which have the **Formula Type Calculation Method**. These selections are only needed if you want to use distribution methods from PK-Sim®. Otherwise, leave them on No Calculation Method. For further information on this subject, please refer to the discussion of the different distribution models in the PK-Sim® manual ([Simulations](../part-3/12-pk-sim-simulations.md)). If you select a certain "Calculation Method" you can get tool tip information on the equations and specific parameters used in the "Calculation Method" by hovering with the mouse over the "Category" entry.

To **save a molecule** as pkml file:

1.  Right-click on its name in the molecules tree, and select **Save As** from the context menu.

2.  Select a location where it is saved in the file browser window that will open and select a name to save it.

In a similar way, you can **save an entire molecules building block**.

1.  Go to the Building Block Explorer, right-click your building block (the default name would be "Molecules", it would be the level under the building block group "Molecules"), and select **Save As** from the context menu.

2.  Select a location where it is saved in the file browser window that will open and select a name to save it.

You can **load such a molecules building block** into any project by right-clicking the building block group (top level) and selecting **Load Molecules Building Block**. Also, you can use any saved molecules building block to **load individual molecules** from it into other projects, using the **Load Molecule** function described above.

{% hint style="tip" %}
If you are frequently building models in MoBi® where new molecules have to be defined, it is a good idea to once configure your typical **default molecule** and save it in your working directory. You can then compile your molecules building blocks by repeatedly loading your default molecule and each time changing the name to your desired molecule names.
{% endhint %}

Any molecules building block can also be **removed** (i.e., deleted), **renamed**, or **cloned** (i.e., copied under a different name) using the corresponding context menu functions.

{% hint style="tip" %}
The above operations, including save and load, are functions available for all other building blocks through the context menu that appears on right-clicking with the mouse at the corresponding positions.
{% endhint %}

### Molecule Parameters‌

Molecule parameters can created, loaded, copied, or changed after clicking on the Parameters tab in the right half of the window. For comprehensive information on parameters and parameter handling, see above [Parameters, Formulas, and Tags](#parameters-formulas-and-tags).

A molecule parameter needs to have a name, a parameter type (Local, Property, or Global), a dimension, a value or a formula, and it may be a state variable.

*   A typical local parameter is "Concentration", defined by the formula "Amount/ Volume".

*   A typical property is "Molecular weight" which is used for calculating weight- based concentrations.

*   An example for a global parameter might be a total start amount from which the start amounts of differently bound molecules are calculated.

*   A description can be added into the input box a the bottom, like for giving a literature reference from where you obtained this value.

More examples for molecule parameters can be found by looking at a molecule in a simulation imported from PK-Sim®. If you enter a formula-defined or a state variable parameter, please refer to the general section defining how to use this functionality (???).

As an example, we create the property "Molecular weight" for the molecule created above.

1.  Click ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Parameter**, and a "New Parameter" window will open.

2.  Enter "Molecular weight" as parameter name.

3.  Select the Parameter Type Property from the combobox and confirm the security question.

4.  Select MolecularWeight in the Dimension combobox - you can narrow down your search by entering the first few characters after clicking this combobox field.

5.  Leave "Formula Type" on Constant and enter the molecule's molecular weight in g/mol into the "Value" input box.

6.  Finally, press the **Enter** key or click **OK**. The screen should look like in the screen shot below.

![Molecule building window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\molecule-building-window.jpg)

As a second example, load the parameter "Concentration" from a PK-Sim® simulation export (see [Export to \*.pkml file for MoBi®](../part-3/13-importing-exporting-project-data-models.md#export-to-pkml-file-for-mobi) for how to create such a file).

1.  Click the **Load Parameter** button or select it from the context menu.

2.  Select a pkml file that you previously generated in PK-Sim® and select Concentration from the list. This local parameter is defined by a formula, and it is useful to have it in every molecule which is later used in a reaction kinetic equation.

{% hint style="note" %}
For a detailed description of the creation and use of formulas see below, [Reactions](#reactions).
{% endhint %}

{% hint style="tip" %}
For **continuing our test project**, enter three molecules and name them "A", "B", and "C". Uncheck the checkbox ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **Stationary** for each molecule to allow transport processes. Set the **Default Start Amount** for molecule "A" to 50 µmol and leave "B" and "C" at the default, 0 µmol. It will be needed to practice in the next sections.
{% endhint %}

### Active Transporter Molecules‌

In addition to the molecules described so far, active transporter molecules and transport processes related to them can be created. Since their use requires

that a spatial structure and neighborhoods have been created, they and the dependent active transport processes are described below in [Active Transporter Molecules](#active-transporter-molecules).

## Reactions‌

In a Reactions building block, all (bio-)chemical reactions which are of interest for the current project are defined. Like a molecule, each reaction has to have a unique name, a reaction kinetics equation, may have parameters, and it also needs reaction partners.

Like in the Molecules section, you first need to select a reaction building block for editing.

1.  In our newly created project, open the Reactions folder and edit the Reaction building block by either right-clicking it and selecting **Edit**, or by double- clicking on it.

2.  A new tab with an empty diagram area will open. This is the work space where you can add new reactions and molecules or load reactions from other projects. Again, the ribbon of the MoBi® window changes to a reaction-related view, named "Edit Reaction".

Working with reactions is done mostly using the Reaction Diagram. We describe the most important features in this section, for more details see [Diagrams Overview](06-diagrams-overview.md)

### Reactions and Molecules‌

When creating a simulation (see [Setting up a Simulation](04-setting-up-simulation.md)) the reactions defined in this building block are combined with the molecules from the Molecules building block. When we use the term **Molecule** in this section we refer to Molecule names only, which define the relationship between the Reactions to the Molecules from the Molecules building block.

{% hint style="warning" %}
If you insert a molecule that has not yet been defined in the Molecules building block, this may cause an error later when setting up a simulation. Remember to define that molecule later.
{% endhint %}

To have access to molecules as reaction partners for the reactions you want to create, it is advisable to first insert the molecules that you need into the Diagram Area, our work space. Alternatively, you may insert the molecules after reactions are created. To insert molecules:

1.  Click the newly visible ribbon button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\NewMolecule.png) **Insert Molecule**, or right-click into the Diagram Area and choose **Insert Molecule** from the context menu that appears. A box listing all molecules available in this project will appear.
    
2.  You can either enter a name manually into the "Molecule Name" input box, or select as many as you wish from the list below this input box. Multi-select is done in the standard Windows® way by keeping the **Shift** key (for a contiguous part of the list) or the **Ctrl** key pressed (for individual selection) followed by clicking with the mouse on the desired molecule range or molecule names.
    
3.  Click **OK** to execute the operation. For each molecule, a green circular symbol appears in the diagram area.
    
The added **molecules can be moved** by the mouse within the diagram area. To do this, left-click a molecule on its dark-green center, hold the mouse button and drag it with the mouse. Release the mouse button when the molecule sits at its desired place.

To **create a new reaction**:

1.  Click the ribbon button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\NewReaction.png) **New**, or right-click into the diagram area at the position where you want to have the new reaction, then choose **Create Reaction** from the context menu that appears. A new window titled "New Reaction" will open with the "Properties" tab selected.
    
2.  Enter a reaction name into the "Name" input box, e.g. "R1".
    
3.  Below the name, you can check the box ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **Create process rate parameter**. If this box is checked, a parameter which equals the reaction rate equation is automatically generated when a simulation is build. You can use this parameter to refer to the reaction rate in any equation. It can also be used to plot the reaction rate (additionally check the box **Plot Process Rate Parameter**) .
    
4.  Next, you can choose the Formula Type from a combobox - by default, Formula is selected.
    
5.  If you want to use a formula that has already been defined, you may select it from the "Formula Name" combobox. To create a new formula, click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Formula** button. You will be asked for a reaction formula name. It is a good idea to use a related name for the reaction and for the reaction's formula - you may even use the same names here. Then press **Enter** or click **OK** to return to the "New Reaction" window.
    
6.  You may then continue to create reaction parameters (like rate constants) and the reaction formula, but that can be done later as well.
    
7.  Finally, press **Enter** or click **OK**.

![New Reaction window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\NewReaction.png)

{% hint style="tip" %}
For completing our example and to get more practice, repeat steps 1 to 6 to enter a second reaction that you name "R2".
{% endhint %}

A **reaction triangle** symbol showing the reaction name "R1" underneath will be created in the Diagram area. This triangle ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Reaction-32x32.png) has differently colored circles on its corners:

*   The blue circle, by default on the left, is where the educts are to be connected (see where already two reactions are present).

*   The green circle, by default on the right, is where the products are connected.

*   The red circle on the top is where reaction modifiers, like catalysts or inhibitors, are connected - i.e., those molecules that do not change in the course of the reaction, but influence the reaction kinetics.

Like molecules, reaction triangles can be dragged with the mouse to a desired position within the diagram area. Click into the grey center of a reaction triangle and hold the left mouse key to drag the reaction symbol.

### Connecting Molecules and Reactions‌

Now you may want to connect molecules to the reaction and verify or change the stoichiometry. There are two ways to connect a molecule to a reaction as educt, product, or modifier:

*   You can either click on the corresponding circle of the reaction triangle (i.e., blue for educt) and drag it towards the desired molecule, holding the left mouse button pressed and releasing it when the connection line that is protruding from the triangle connects to the proper molecule.

*   Alternatively, you can drag the light-green rim of a molecule symbol towards the desired position of a reaction triangle until the connection line connects to the correct target circle.

In both cases, the correct position of the mouse pointer to start the action is indicated by a change of the mouse pointer from an arrow symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ArrowCursor.png) to a hand symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\HandCursor.png). As long as you keep the left mouse button pressed, the connection is not yet finalized. So, if the connection line appears to connect to the wrong target, continue moving the mouse towards the desired target symbol and only release the mouse button when the correct points are connected. You should get an arrangement like shown for reaction R1 in below.

{% hint style="tip" %}
In case a wrong connection is established, you can click on a connection, after which it is highlighted by light green squares, and then press the **Delete** key on the keyboard.
{% endhint %}

![Building Reactions: Three molecules (A, B, C) and two reactions (R1, R2) have been added to the Diagram. R1 has already been connected to its reaction educt A and product B.](C:\Users\Jean Manzo\Desktop\pharma-dev\images\BuildingReactions.png)

Now, continue and check the **reaction's stoichiometry**. If you have connected one or more molecules to the reaction, you should see them appearing in the properties tab of this reaction.

1.  Click the reaction triangle. Below the Diagram area, the **Properties Editor**, a three-tabbed window, is shown.

2.  Click the **Properties** tab, and you see the Alias names (how they will be used in the formula, see next section), the path, and the dimension of the amount of molecules .

3.  Clicking on the **Stoichiometry** tab will list the educt and product stoichiometric coefficients. By default, these coefficients are set to 1, and you need to change that manually if your reaction has a different stoichiometry, e.g. if two molecules form a dimer.

### Reaction Kinetics‌

You are now ready to define **reaction parameters**, like kinetic rate constants, Michaelis-Menten parameters (kcat or KM), or binding constants. These parameters will then be used for the equation that defines the reaction kinetics. A new reaction parameter is defined by the following procedure:

1.  Click the Parameters tab in the edit reactions window.
    
2.  Click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Parameter** button. A "New Parameter" window opens (compare molecule parameter creation, “Molecule Parameters”).
    
3.  Enter a parameter name, like "k1" as a first order rate constant in our example.
    
4.  Select the parameter type (Local/Property/Global). For a rate constant only used in one single reaction, the recommendation is to choose Local, whereas Global is the right choice if several reactions need this parameter and you want to define it only once.
    
5.  Select the proper dimension in the **Dimension** combobox, which is Inversed Time for the first order rate constant in our example.
    
6.  Enter a value for your parameter, 0.01 as an example. If needed, select a different dimension unit in the combobox to the right of the value input box. The parameter may also be defined by a formula or data table, or you may make the parameter state variable (compare [Parameters, Formulas, and Tags](#parameters-formulas-and-tags)).
    
7.  Optionally you may enter a description.
    
8.  Finally, press **Enter** or click **OK**.
    
Alternatively to entering it manually, you may also load it from a file or copy and paste it from another reaction in the same way as described above, see [Parameters, Formulas, and Tags](#parameters-formulas-and-tags). Any setting of a parameter can be edited later, and as many parameters as you need can be added to a reaction. The figure below shows what the screen would look like after one parameter has been added.

![Reaction parameter k1 has been added to reaction R1](C:\Users\Jean Manzo\Desktop\pharma-dev\images\ReactionParameter.png)

The following steps describe how to enter a **kinetic equation** to the reaction:

1.  Click the **Properties** tab again, and notice the red error sign ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) left of the empty input box (see lower left). Hovering with the mouse over this warning symbol will show you a tool tip with information on the validity of the equation - currently the problem is that it is still empty. Examples for kinetic equations are a irreversible term, like "k1\*A", an equilibrium like "k1\*A- k2\*B", or a Michaelis-Menten type of equation.
    
2.  If you want to use relative paths (compare ??? for a discussion of the rationale behind the paths), select the corresponding radio button on the right hand side, and then the corresponding reference point in the tree window that pops up.
    
3.  All variables you use in the kinetic equation will have to be present in the reference list. The molecules that were previously drawn to the reaction (educts, products, or modifiers) are already present with their corresponding amount parameters.
    
4.  To add the reaction parameters that you defined before to the reference list, click on the + sign next to the reaction name in the tree display in the "Possible Referenced Objects" part of the window. Drag and drop all reaction parameters that you want to use in your formula into the references area left of the tree, where product and educt molecule references are listed.
    
5.  If you need molecular concentration parameters in the formula, select Relative path and choose one container. Open this container in the possible referenced objects tree by clicking on the + sign next to it, then open MoleculeProperties underneath it, open the needed molecule and drag the concentration parameter (which needs to be created beforehand in the Molecules building block, see [Molecule Parameters](#molecule-parameters)) into the references area left of the tree. Finally, you may want to edit the automatically generated alias names to have molecule names as part of the aliases. Just click into the alias name field and edit the name.
    
6.  Besides reaction and molecule parameters, parameters of other building blocks, like the volume of a spatial structure, might be needed. They have to be defined first, so look up the corresponding sections in this chapter to see how to do that.

7.  Finally, enter your kinetic equation into the empty input box below the references; for our example, enter "k1\*A". This will let the error symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) disappear, if everything is properly defined and if all parameters are defined in the references. Compare your results to the series of screen shots of the Quick guide in [Enter a Reaction](01-first-steps.md#enter-a-reaction).

{% hint style="tip" %}
To complete reaction R2 (created above, see [Reactions and Molecules](#reactions-and-molecules)) which you will need for continuing with the model building, connect molecule "B" as educt to R2, then "C" as product, as done for R1 in the previous section. Then define another k1 parameter for R2, this time set it to 0.005. Note that the name k1 appears twice, but is assigned to different reactions - thus they can both be separated. Next drag k1 to the references list, then enter k1\*B as reaction kinetics formula. We will need a working reaction system if we move on to setting up a simulation later on.

If using the same rate constant name for two different reactions is too confusing, use different names for the rate constants in different reactions.
{% endhint %}

### Additional Features for Editing Reactions‌

There are more features available to handle reaction building. Some of which are briefly described here:

*   you can delete an object using the **Delete** key or the context menu,

*   you can zoom, for instance by pressing the **Shift** key and selecting a rectangle by dragging the mouse,

*   different layout features like usage of templates and auto layout mechanisms are available.

To get more details on which techniques are available in all diagrams, see [Diagrams Overview](06-diagrams-overview.md).

Instead of the diagram area, the graphical display of all reactions, you can switch to a list view by clicking the **List tab** in the upper part of the edit window. Reactions are listed by name with their stoichiometry and kinetic equations. Right-clicking the lines allows you to edit, rename, save, and remove any reaction by selecting the corresponding entry in the context menu.

## Transport Processes‌

In MoBi®, passive and active transport processes use common logics in their setup. However, for technical reasons they are defined in different building blocks: a separate passive transports building block for those passive processes that are generic for all molecules, while the active and passive transport processes specific to the molecules are defined in the molecules building block. Typical examples for all groups are mentioned in the sections below.

### Passive Transports‌
   
Passive transports which will affect all non-stationary molecules can be defined in this building block. Examples are passive diffusion, the flow of body fluids like blood, or perfusion processes. Open the building block for editing by opening the folder "Passive Transports" in the Building Block Explorer, and then double- clicking the building block which is by default also called "Passive Transports". A passive transport is defined by source (origin) and target (sink), while the transport rate is defined by a kinetic formula. Often, it is desired to define transport processes by a generic type of equation, e.g., _in all organs from blood to interstitial space_. This is done by selecting the corresponding container tag conditions which previously should be defined to contain such container type information (see [Creating a Spatial Structure](#creating-a-spatial-structure)). Further, passive processes that should transport all present and non-stationary molecules require a kinetic equation with generic references to molecule concentration or amount. By default, MoBi® uses relative reference paths with such generic names. This will be shown in the following example process.

For **creating a new transport** or loading one from a previously saved file:

1.  Select the corresponding ribbon button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **New** or ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Load.png) **Load**. Alternatively, you may right-click into the empty white space in the left part of the edit window and select **Create Passive Transport** or **Load Passive Transport** from the context menu. If you choose **New** or **Create**, a window named "New Passive Transport" opens.

![New Passive Transport Window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\NewPassiveTransport.png)

2.  Enter a name for this transport process, for example "Diffusion".
    
3.  Define descriptors for target and source containers:
    
    *   Right-click into the corresponding empty space below "Condition" and "Tag", then either select New match tag condition or New not match tag condition.
        
    *   A window where you will be asked for the tag name will open.
       
    *   A tag can simply be the name of a container of a spatial structure; you can select from the available names by clicking the drop-down arrow. In our example project, select "Vial1" as "New match tag condition" for "Source Descriptor", and select "Vial2" as "New match tag condition" for "Target Descriptor". Selecting the "not match condition" will simply invert the selection.
        
    *   The arrangement of neighborhood connections set up in the spatial structure (see [Creating Neighborhoods](#creating-neighborhoods)) will restrict the pattern of transport streams.
       
4.  Define which molecules are transported. Per default, the checkbox ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Checked.png) **All** is selected, which means that all molecules which are present in the corresponding compartments are transported. Exceptions can be defined in the Exclude List. In order to add a molecule to the Exclude List, click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Molecule** button within the section Exclude List. Molecules listed in the Exclude List will not be transported. If the checkbox **All** is un-checked, you can add molecules to the Include List. Then, only molecules listed in the Include List are transported.
    
5.  If the box ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **Create process rate parameter** is checked, a parameter which equals the transport rate equation is automatically generated when a simulation is build. You can use this parameter to refer to the transport rate in any equation. It can also be used to plot the transport rate (additionally check the box **Plot Process Rate Parameter**) .
    
6.  In order to define a transport rate, go to the Tab **Kinetic**. Select Formula in the Formula Type combobox.
    
7.  Click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Formula** button. You will be asked for a reaction formula name. Name the formula "Diffusion". Press **Enter** or click **OK**.
    
8.  Next you need to compile the referenced values for the diffusion formula. To have more space for easier navigation, you may either click **OK** and edit the formula in the larger space of the edit window, or you may increase the size of the window by pulling on its rims with the left mouse button pressed.
        
A **diffusion equation** typically requires you to use concentration differences between two connected containers. Also, a diffusion constant is required which may be molecule-dependent.  

*   To have such values as molecule parameters available, you need to go back to edit the Molecules building block and introduce them (see [Molecule Parameters](#molecule-parameters)).

*   If transport rates depend primarily on the processes rather than on the molecular properties (e.g., blood vessel flow rates), it might be better to attach such parameters to the neighborhood (see [Creating Neighborhoods](#creating-neighborhoods)).

*   If only one global diffusion coefficient is needed (e.g., if all molecules diffuse rather similarly), you may define it as a parameter to the transport process. Use the "Parameters" tab in the edit window of the newly created passive transport, and create a diffusion constant in the way described for the other building blocks, using the "New Parameter" button.

*   Another alternative is to just enter a diffusion constant as a numerical value into the formula input box, as it is done below.

In any of the above cases, the tree view within the field "Possible Referenced Objects" allows you to pick parameters from a variety of building blocks.

{% hint style="tip" %}
If you notice later that a parameter would rather be placed at another location, you can move a parameter by clicking to the left of it, pressing **Ctrl+X** and inserting it with **Ctrl+V** at the proper position. However, all "Possible Referenced Objects" list entries pointing to this parameter need to be entered again manually.
{% endhint %}

Continuing with our example, let us enter a simple diffusion equation based on a constant multiplied with the concentration difference between source and target container.

1.  Make sure that the molecules created above all have a "Concentration" parameter. If not, see [Molecule Parameters](#molecule-parameters) how to proceed.

2.  To make the concentrations available for the diffusion formula, work with the "Possible Referenced Objects" tree view, as described in [Reaction Kinetics](#reaction-kinetics). Select "Relative path", and choose "BigVial\|Neighborhoods\|V1V2Connection" as reference point. The relative path will result in source and target molecule paths that are generic for all molecules, whereas selecting an absolute path will be molecule-specific.

3.  Successively expand the "Possible Referenced Objects" tree view by clicking on the + signs to the left of "BigVial", then again "BigVial" in the level that opened, there on "Vial1", then on "MoleculeProperties", then on "A" (or any other molecule name). The "Concentration" parameter should now appear, if present.

4.  Drag and drop exactly this "Concentration" parameter to the white references area to the left of the tree. The alias name "Concentration" and the path "SOURCE|MOLECULE|Concentration" should appear in the list.‌

5.  Then open the tree below "Vial2" -> "MoleculeProperties" -> "A" and drag exactly this "Concentration" parameter into the references as well. This time, the alias should be named "Concentration1" and the path should read "TARGET|MOLECULE|Concentration".‌

6.  Compare your screen to to the images below. If you want to change the aliases manually, you can do so by clicking on any name input box and replace the corresponding name with another.

7.  Now enter the formula "0.001\*(Concentration-Concentration1)" into the formula input box below the references. The error symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) that was displayed to the left of this input box should now disappear, if everything is typed correctly. Compare your result again with the images below.

{% hint style="note" %}
The resulting formula is a generic formula. The example model has 3 different molecules, "A", "B", and "C". Each of them will be transported by the above passive transport, as long as they are all present in the compartments "Vial1" and "Vial2" and the checkbox "All" is selected, which is the case in our example.
{% endhint %}

![Passive Transport has been added - Properties Tab](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PassiveTransportComplete.png)

![Passive Transport has been added - Kinetic Tab](C:\Users\Jean Manzo\Desktop\pharma-dev\images\PassiveTransportComplete_KinticTab.png)

### Molecule-specific Passive Transports‌

Besides generic transport processes, molecule-specific passive transports may be required. An example is a molecule's clearance from the body which is not further characterized and cannot be attributed to specific enzymes or transporters.

As with generic passive transports, molecule-specific transports only affect non-stationary molecules. Following the logic of MoBi®, molecule-specific transport processes are to be defined in the "Molecules" building block. Refer to [Creating New Molecules](#creating-new-molecules) and open your Molecules building block for re-editing by double-clicking or by use of the context menu. If it is still open, you can click the Molecules tab in the edit window.

To create a molecule-specific transport process:

1.  In the molecules building block and in the molecules tree, right-click on the molecule that you want to be transported.
    
2.  Select **Create Passive Transport** from the context menu.
    
3.  A "New Passive Transport" window opens.
    
4.  Then follow the same protocol as given for the generic passive transports, “Passive Transports”.
    
Like with the generic passive transports, you may also load an existing process from a pkml file. Existing passive transports appear below the affected molecule in the tree view. Selecting such a process by clicking it will display an edit window as for the active transports.

### Active Transporter Molecules‌

An active transport process, as opposed to a passive transport, requires a transporter molecule (like a protein channel) that works similar to an enzyme. Unlike a chemical reaction, however, this process does not change a molecule but transfers it between containers, for example, from the intercellular space into a cell. As with passive transports, active transports only affect non-stationary molecules. Following the logic of MoBi®, all active transporter molecules and their transport processes are to be defined in the "Molecules" building block. Refer to [Creating New Molecules](#creating-new-molecules) and open your Molecules building block for re-editing by double-clicking or by use of the context menu. If it is still open, you can click the Molecules tab in the edit window.

First, an active transporter molecule needs to be defined:

1.  In the molecules building block and in the molecules tree, right-click on the molecule that you want to be transported.

2.  Select **Create Transporter Molecule** from the context menu.

3.  You are asked for a transporter name. Either enter a new name (e.g., "PGP"), or the name of an already existing transporter molecule if the very same transporter is active for several molecules in your list and has been previously defined.

4.  Press **Enter** or click **OK**. In the molecules tree, a transporter molecule is displayed, and a transporter entry is added to the molecule selected in step 1.

5.  In the transporter entry below the selected molecule, you may enter a description and parameters, as for any molecule.

6.  Click on the transporter molecule at the top level of the molecules tree to modify this molecule's parameters, as described above in, [Molecule Parameters](#molecule-parameters). This may be the initial amount of transporter or a concentration parameter.

7.  Right-click on the transporter attached to the molecule to be transported, and select **Create Transport** from the context menu. A window named "New Active Transport" opens.

8.  Enter a name into the Name input box, like "PGP Transport". Then, follow the steps described in the previous section “Passive Transports” for selecting source and target, define a transport rate parameter and entering a transport kinetics formula.

9.  The kinetics formula of an active transport process is entered into the formula input box within the Tab **Kinetic** so that the red error symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) will disappear. A typical active transport formula will be dependent on the transporter concentration, substrate concentration in source and target container, and on molecule specific parameters, like a KM value for substrate and transporter. You will need to add all the required concentrations and parameters as references, or you may enter them in numeric form into the equation.

Continuing with our **example project**, let us enter a transport called "PGP" for molecule "A" and a transport process called "PGP Transport A" which runs in the opposite direction of the above passive transport, i.e., from "Vial2" as source to "Vial1" as target. As references for the transport equation, you need the concentration parameters of "PGP" and of "A" from the references tree. The alias of the PGP concentration is renamed to "C\_PGP", and that of molecule "A" to "C\_A" by just overriding the default names. The equation to be entered is "0.001\*C\_PGP\*C\_A". The figure below shows what the screen should look like after everything is properly set up.

![Active Transport has been entered](C:\Users\Jean Manzo\Desktop\pharma-dev\images\active-transport-entered.jpg)

{% hint style="tip" %}
If more than one molecule is transported by the very same transporter, you just create the same transporter molecule twice, i.e., with the same name under the second molecule. This will only create a new active transport, but no duplicate transporter molecule. You can then proceed like for the first molecule and create a transport process.
{% endhint %}

{% hint style="tip" %}
If two molecules compete for the same transporter, you can add inhibition terms to the transport equations that use all molecules, either as transporter substrate or as transporter inhibitor.
{% endhint %}

## Observers‌

An observer which can be displayed in a chart (see [Simulation Results](05-simulation-results.md)) is an output derived from one or several molecules or parameters by a defined formula. There are two classes of observers: **molecule observers** and **container observers**; creating and editing of both classes will be explained in this section. The main difference between those two classes is that a container observer can be computed for every molecule in every container (or for a selectable subset of both), whereas an molecule observer can be used to compute a value from one or more molecules specified in its formula, but for all or a selectable subset of containers.

In our **example project**, a spatial structure named "Observer" has already been created by initially executing the **New Project** command. To proceed further, click on the + sign to the left of "Observers" in the building block explorer, and then open the "Observer" for editing by double-clicking on it or by using the **Edit** command of the context menu that appears after right-clicking on "Observer". In the edit window, you can choose between the tabs "molecule observer" (the default selection on opening) and "Container Observer".

For **creating a new observer** or loading one from a previously saved file, select the corresponding button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **New** or ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\LoadObserver.png) **Load** from the context-dependent ribbon and there select the proper observer type. Alternatively, you may right-click into the empty white space of the edit window and select **Create Molecule (resp. Container) Observer** or **Load Molecule (resp. Container) Observer** from the context menu. If you choose **New** or **Create**, a window named "New Molecule (resp. Container) Observer" opens.

Each **observer class has a conditions** attached to it that determines for which molecules and in which parts of the spatial structure an observer is calculated. Observers can be selected by inclusion or exclusion criteria based on their tags by selecting New match tag condition or New not match tag condition. Tags are either the name of a container or they can be manually added (compare “Creating a Spatial Structure”). All conditions entered for one observer are connected by a logical "and". Make sure you have entered proper data into these fields, or otherwise an observer is not generated in a simulation and warnings will be reported when creating a simulation (see [Create a Simulation](#part-4/04-setting-up-simulation.md#create-a-simulation)). As a further option, you may select the Add match all tag condition, which selects all containers.

All conditions, parameters, formulas, names, and paths that have been defined for any observer may later be edited, renamed, or deleted. Use the corresponding context menus, or override the entries in input boxes, comboboxes, or checkboxes.

### Molecule Observers‌
    
To work with molecule observers, make sure the tab "Molecule Observer" in the edit window is selected. To create a new molecule observer, use **Create Molecule Observer** as described above, upon which the "New Molecule Observer" window opens (see image below). For our test project, we want to create an observer that calculates the molar concentration from the amount of molecules, doing so for each molecule and each compartment except for "BigVial".

1.  Enter the name "MolarConcentration" in the Name input box, and select Concentration as Dimension below.
    
2.  Check the box "All" in the section "Calculated For Molecules".
    
3.  Check the box **All** in the section "Calculated for following molecules". If this checkbox is selected, the observer is defined for all existing molecules. Exceptions can be defined in the Exclude List. In order to add a molecule to the Exclude List, click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Molecule** button within the section Exclude List. The observer is not defined for molecules listed in the Exclude List. If the checkbox **All** is un-checked, you can add molecules to the Include List. Then, the observer is defined only for molecules listed in the Include List.
    
4.  Then right-click into the white space below "In Container with", and select New match tag condition from the context menu.
    
5.  You are asked for a tag name. Select "Obs" from the combobox or enter it manually. The "New Molecule Observer" window should now look like:

	![New Molecule Observer window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\NewAmountObserver.png)
    
6.  The next step is to create the Monitor formula which defines how the value of the observer is calculated from the molecule or parameters. At this point, at least a formula **name** is required for the observer creation; all other data like the observer formula can be defined at a later point, if needed. Click on the "Monitor" tab in the "New Molecule Observer" window.
    
7.  Click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Formula** button. You will be asked for a reaction formula name; enter the name "MolarConcentration"; if this formula name is already existing, you may select it in the combobox instead of adding a new formula. In any case, the error symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) will disappear from the "Formula Name" line as well as from the "Monitor" tab, and the **OK** button becomes active.
    
8.  • You can now continue to create the formula in the "New Molecule Observer" window. In this case, it is advisable to enhance the size of this window to have more work space.

	• Alternatively, you can click **OK** or press **Enter** and return to the edit window, where you need to click the "Monitor" tab again. Let us continue our example in the edit window since there is more space to select references.
        
9.  On the right hand side of the Monitor window, you will see the "References" column. The screen now looks like in the screen shot below:

	![Molecule Observer formula building](C:\Users\Jean Manzo\Desktop\pharma-dev\images\AmountObserverMonitor.png)
    
10.  The formula for molecular concentration you will need to enter is the ratio of molecule amount and container volume. For both, you need the references, similar to all previously described formulas. For the amount of molecules, this is straightforward: just drag and drop the word "MOLECULE" from the "Possible Referenced Objects" tree on the right to the white space below "Alias/Path/Dimension" on the left. The alias "M", the path "..", and the dimension "Amount" will appear. This alias "M" stands for the corresponding amount for each molecule the observer is calculated for, according to the conditions defined previously, visible under the "Properties" tab.
    
11.  Since our concentration observer should be computed for containers of different hierarchical levels (in case the spatial structure will be extended in the future), you need to select "Relative Path" by clicking the corresponding radio button on the right. The first time you do that in this window, you will be asked for entering a path by the window shown below. To completely visualize the path, press the **\*** key or click on all + symbols to the left of the names. You may select any of the containers here and then use its corresponding Volume parameter; however, do not use any of the "MoleculeProperties" branches, as that would invalidate the path. To complete our example observer, click on "Vial1" and then on the OK button; see the following image.
    
	![Select Relative Path window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\EnteringRelativePath.png)
    
12.  On the right hand side of the edit window, the "Possible Referenced Objects" tree, "Vial1" is now highlighted. Open the "Vial1" tree by clicking on the + symbol to the left of "Vial1". You will see the parameter "Volume" below it, after "MoleculeProperties".
    
13.  Drag and drop exactly this "Volume" to the left, below the "M". The alias "Volume", the path "..|..|Volume", and the dimension "Volume" should appear. Compare the screen shot below with your monitor window.
    
14.  Finally, enter the formula "M/Volume" into the input box below the references (showing a red symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) next to it before the formula is entered), and all should look like in this image.
    
	![Molar Concentration Molecule Observer formula including references completed](C:\Users\Jean Manzo\Desktop\pharma-dev\images\AmountObserverComplete.png)
    
15.  The warning symbol disappears, you can see the still highlighted "Volume" that was used to drag the reference path, and you will see the amount of molecules M. In case there was a mistake and you need to reset the Local Reference Point, click on the **...** symbol to the right of the path and re-enter it. Wrong references above the formula can be deleted by right-clicking on them and selecting **Remove** from the context menu.

If you have already loaded or created a concentration parameter when building the molecules (see [Molecule Parameters](#molecule-parameters)), you may wonder why you cannot use this reaction parameter for the observer. This is indeed an alternative option. Instead of dragging and dropping "M" and "Volume", you can use the "Concentration" parameter with the correct relative path, which can be found under "Vial1/MoleculeProperties/A", if you repeatedly click on the corresponding + signs to open up the paths. As formula, this time just insert "Concentration", and you are done. you will use this method again for the container observers, so it will be further elaborated there.

Examples for many other molecule observers can be best studied when opening the observer building block in a simulation exported from PK-Sim®.

### Container Observers‌    

To work with container observers, make sure the tab "Container Observer" in the edit window is selected. For our test project, we want to create an observer that calculates the sum of our two metabolites, B and C. This creation procedure is almost identical to molecule observers, but the paths you get are different, and you will use different properties and formulas.

1.  To create a new container observer, use "Create Container Observer" as described above, upon which the "New Container Observer" window opens, similar to the molecule observer.

2.  Enter "SumMetabolites" as Name, "Concentration" as "Dimension".

3.  Then click the "Add Molecule" button within the section "Include List". You will be asked for a molecule name; select or enter "C" and click **OK**. Select the Add match all tag condition, which means that the observer will be calculated for all containers.

4.  You need to select a target container tag in the "In Container with" field in the same way as described in [Molecule Observers](#molecule-observers) or for "Source" or "Target" in [Transport Processes](#transport-processes). For our example project, use the same condition as for the example molecule observer: select New match tag condition from the context menu and then Obs from the combobox.

5.  Click on the "Monitor" tab, then click the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Formula** button. Enter "SumMetabolites" as Formula Name. Then click **OK** or press **Enter**. (As described above for the molecule observers, you may also continue the formula work in the "New Container Observer" window.)

6.  Since the display returns to the properties tab, you need to click the "Monitor" tab again. Set the relative path as described for the Molecule Observer to "Vial1".

7.  In the "Possible Referenced Objects", open the "Vial1" paths all the way down until you see the "Concentration" parameters for molecules "B" and "C".

8.  Drag and drop both of them successively to the reference list.

9.  Enter "Concentration + Concentration1" into the formula input box left of the red symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png), which should disappear upon completion.

The screen should look like in the screen shot below:

![Container Observer for Sum of Metabolites](C:\Users\Jean Manzo\Desktop\pharma-dev\images\ContainerObserverEntered.png)

## Events and Applications‌

An event is used to change an entity, like the amount of molecules or a reaction rate, when a given condition is met. This condition can be, for example, that a given simulation time is reached, or that the concentration of a molecule has exceeded a certain value. Thus, such a programmed event is used to reflect external changes to the simulation, like the application of a drug or a sudden physical change in the spatial structure, like a vessel rupture.

In the drug delivery case, however, you rather want to use an application instead of an event to have more options available for drug release and repeated applications. Since the generation of an application in MoBi® can be rather complicated and is beyond the scope of this manual, we will restrict the description to adapting applications that were previously imported from PK-Sim®, where complex applications schemes can be generated more easily.

Events and applications are grouped in an events building block, where events are sub-grouped in event groups. To create such a structure, you may need to create a new events building block using the context menu of the building block explorer or the corresponding ribbon button of the Modeling & Simulation tab. In our example, an empty events building block named "Events" has already been created automatically. Simulations imported from a PK-Sim® project also contain such a building block that contains the applications.

To add events or applications to the project, you need to open the events building block for editing. This can be done by double-clicking on it or by using the **Edit** command of the context menu in the building block explorer.

### Event Groups and Events‌
    
To **create a new event group**, either    

*   use the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\NewEvent.png) **New** ribbon button,

*   or right-click into the white space in the event edit window and select the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) Create Event Group command.

A window named "New Event Group" will open. Then proceed with:

1.  Enter a unique name into the Name input box, like "EventGroup1".

2.  Enter a condition to define for which containers the event will be applicable. In order to do so, click into the white space below the "In Container with" field, and select New match tag condition or New not match tag condition \- depending if you want to include or exclude containers with a specific name or tag. You can enter more than one condition, which will be combined by a logical "and". A further option is to select the Add match all tag condition, which selects all containers.

3.  After this, you will be asked to enter a container tag for your condition, where you can select from available tags in a combobox. In our example project, select BigVial as a New match tag condition. This will make the event group effective for the entire spatial structure you created above.

4.  As always, you may enter a description into the input box at the bottom.

5.  Click **OK** or press **Enter** to finalize the event group. The new event group should now be listed in the left part of the event building block edit window. The right part should show the previously specified event group tag conditions.

As in other instances, you may define parameters for an event group. To access the parameters window, click on the "Parameters" tab in the right part of the edit window. Entering a parameter entry works in the same way as described for molecules, reactions, or for spatial structure containers. Examples for event group parameters are values for event timing or amounts of molecules that you want to set within the individual events of this event group.

![New Event Group window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\NewEventGroup.png)

After the event group is created, individual events can be defined for this group. Right-click your event group, and you will see the options you have in the context menu. These are:

*   Edit \- this has the same function as selecting the name.

*   Rename

*   Save As \- saves the selected event group to a pkml file.

*   Remove \- deletes the selected event group.

*   Create Application \- see [Applications](#applications).

*   Load Application \- see [Applications](#applications).

*   Create Event \- creates a new event within the current event group.

*   Load Event \- loads an existing event from a pkml file.

*   Create Event Group \- creates a new event group below the highlighted event group.

*   Load Event Group \- loads an existing event group from a pkml file below the highlighted event group.

*   Create Container \- see [Applications](#applications).

*   Load Container \- see [Applications](#applications).

To create an event, click the Create Event option. A window named "New Event" will open (see image below). Then proceed with the following steps:

1.  Enter an event name in the Name input box, e.g. "E1".

2.  If your event should only be executed once during the simulation, check the box ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Checked.png) **One Time Event** below the name. This is a useful option if, for example, you want to set an amount of molecules to a new value at a given time. For this example, check this box.

3.  The section "Condition" below the checkbox requires that you enter an event condition name, which is comparable to a formula name of a reaction or a parameter. Enter "E1" into this input box.

4.  To have more space for building the condition, close this window now by clicking **OK** or pressing **Enter** to complete the event building in the edit window. However, all required data could also be entered in the "New Event" window.

	![New Event window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\NewEvent.png)

5.  Continue working with the right part of the edit window with building the event in the "Properties" tab. From the Possible Referenced Objects tree, you need the TIME variable, which reflects the simulation time. The procedure is the same as described for referenced objects used in reaction equations (see [Reaction Kinetics](#reaction-kinetics)): Drag the TIME with the mouse to the left hand side and release it in the white space below the "Alias" header under the "Condition". "Time" should appear in this field.

6.  There is still a Condition equation to be entered, as indicated by the red error sign ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) in front of that input box. The easiest way to let an event happen at a given simulation time would now be to enter the formula "Time > 500", which would execute the event at 500 minutes. The use of "> 500" instead of "= 500" is advantageous since it might well be that during the simulation, the exact value of 500 will never be assumed, depending on the time step. If you plan to quickly test different values for this time, it is advantageous to define this execution time as a parameter which can be altered in the simulation.

7.  Define a time parameter as an event parameter (alternatively, it can be set as an event group parameter if it is needed in several events of this group). Click the "Parameters" tab, then the button ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Create.png) **Add Parameter**. A "New Parameter" window opens.

8.  Enter "E1Time" as parameter name.

9.  Select Time from the combobox "Dimension".

10.  Enter "500". If you prefer to do this in other units than minutes, you may change the dimension (e.g., to "h") in the combobox to the right of the value.

11.  Click **OK** or press **Enter**. The new parameter will appear in the parameters list.

12.  Click the "Properties" tab. Drag and drop the newly created parameter "E1Time" from the Possible Referenced Objects list on the right into the white space below the already added "Time" reference. To find this parameter, you need to look below the E1 event, so click on the + sign to open that part of the reference tree. In case you have defined the parameter under the event group, you will find it below the event group.

13.  Enter "Time > E1Time" into the formula input box, after which the error sign ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) to the left of it should disappear.

14.  What is still needed is the assignment which determines what will happen when the event condition is fulfilled. As an example, we will set the amount of molecule "A" in the container "Vial1". To proceed, click the button **Add Assignment**. A window named "New Event Assignment" will open.

15.  Enter "SetA" as name into the Name input box.

16.  Click the **...** on the left hand side of the "Changed Entity" input box below Name. A window named "Select Changed Entity" will open. Select the molecule "A" in "Vial1" as target. To see it and be able to click it, you need to open the levels BigVial|BigVial|Vial1 by clicking successively on the + sign to the left of them. Then click on **A**. The window should look like the following screen shot.

	![Select Changed Entity window](C:\Users\Jean Manzo\Desktop\pharma-dev\images\SetA.png)

17.  Click the **OK** button. The red error symbol ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ErrorCross.png) to the left of the "Changed Entity" input box should now be gone, and a path to molecule A, "BigVial| Vial1|A", should be visible.

18.  Check the box ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Checked.png) **Use Assignment As Value**, then enter "50" into the Value input box. This will set the amount of molecules to 50 µmol in "Vial1" when the event is executed. Finally, click the **OK** button or press **Enter**. The screen should look like in the following image, and the event is now completed.

![Event building completed](C:\Users\Jean Manzo\Desktop\pharma-dev\images\event-building-completed.jpg)

Instead the amount of molecules, an event allows for changing a number of assignments, like reaction or transport rate constants, container volumes or neighborhood parameters. The entire formula of a reaction or transport may be changed by not checking "Use Assignment As Value" during the creation of an assignment, and by selecting Formula instead of Constant in "Formula Type". Also, you may change several assignments upon one condition: just click the button "Add Assignment" again, and you can go through the above steps 14 to 18 again and have another value changed.

Instead of a one time event, you can have an **event permanently active** if you uncheck the box ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **One Time Event** in "Properties". In our example of setting the amount of molecule "A" to 50 µmol at above 500 minutes, this would result in keeping the amount of "A" constant at 50 µmol after 500 minutes.

An assignment can be changed by the following actions:

*   Click the **...** symbol to the right of "Changed Entity Path", and you will see the Select Changed Entity window again to alter the above choice.

*   In the "New Formula" input box (or row in case of several assignments), you can change between different values or formulas for the target assignment.

*   The box ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **Use Assignment As Value** can be changed to insert a formula at the assignment.

*   The ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Add.png) symbol has the same function as the button **Add Assignment**.

*   Clicking the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Delete.png) symbol will delete the corresponding assignment.

{% hint style="tip" %}
The above actions allow for basic editing of assignments. For all other and deeper changes, the recommended workflow is to delete and re-create an assignment.
{% endhint %}

### Applications‌

An application is basically an event group with a more complex structure than that described in the previous section. In almost all cases, the application will be created within PK-Sim®and then transferred to MoBi®. The scope of this section will be limited to working with this recommended workflow.

The image below shows two example applications imported from PK-Sim®, one

i.v. and one oral. You can see the two application in the tree view of the event edit window. Each application consist of the application group, the application start event, and the protocol schema item. To make changes, look at the parameters of the protocol schema item, as displayed in the image.

![Example Applications](C:\Users\Jean Manzo\Desktop\pharma-dev\images\events-application.jpg)

You may make changes in the following parameters of this group:

*   Altering **DosePerBodyWeight** will change the dose per kg body weight. This will only work if it was used in the original PK-Sim® project, which can be recognized by having a formula in the **Dose** parameter.

*   Altering **Dose** will let you change the absolute drug dose administered. If the original PK-Sim® project contained a dose per body weight, that formula will be overridden by the absolute value.

*   The time where the drug administration starts can be altered by changing the

Start time parameter.

*   The volume of water per body weight can be changed for oral applications only by using the parameter **Volume of water / body weight**. This will only work if it was used in the original PK-Sim® project, which can be recognized by having a formula in the **Amount of water** parameter.

*   Altering **Amount of water** will let you change the absolute amount of water administered with the drug. If the original PK-Sim® project contained a volume of water per body weight, that formula will be overridden by the absolute value.

*   The other parameters of this block should not be changed.

{% hint style="tip" %}
The descriptions at the bottom section of each parameter gives you more information on each parameter.
{% endhint %}

More complex changes, like changing complex dosing schemes or changing dissolution patterns are much easier to achieve using the user interface of PK- Sim® and then exporting the corresponding simulation. Within a MoBi®project, you may then combine drug applications from several PK-Sim® exports. The following describes the workflow for this operation:

1.  Save all applications of interest as PK-Sim® simulations to pkml files (see [Export To MoBi®](../part-3/13-importing-exporting-project-data-models.md#export-to-mobi)).

2.  Load your MoBi® project.

3.  Right-click the Events entry in the building block explorer, select ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Load.png) **Load Event Group Building Block**.

4.  Enter the name and location of your pkml file. You may be asked for a new building block name. A new Events building block is created.

5.  When creating a simulation ([Create a Simulation](04-setting-up-simulation.md#create-a-simulation)), you can now select between several possible application building blocks.

{% hint style="tip" %}
A collection of template files with predefined building blocks is automatically installed together with MoBi® in the default program data directory. The entry "Templates" in the program start menu in the MoBi program group will lead you to the proper path.
{% endhint %}

{% hint style="tip" %}
Descriptive names for each of these applications building blocks could be helpful. Use the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Rename-32x32.png) **Rename** function from the building block context menu for this purpose.
{% endhint %}

## Molecule Start Values‌

Molecule start values are needed to define the initial amounts of all molecules present in the molecules building block used in a simulation for all containers. These values are either imported when loading a simulation, or they can be created automatically and edited manually, if needed.

{% hint style="tip" %}
Molecule and Parameter Start Values can also be created within the Simulation Creation Wizard (compare [Create a Simulation](#part-4/04-setting-up-simulation.md#create-a-simulation)).
{% endhint %}

To automatically create molecule start values by MoBi®:

1.  Right-click the entry **Molecule Start Values** in the building block explorer.
    
2.  Select **Create Molecule Start Values Building Block** from the context menu that appears.
    
3.  A window called "Create new start values" opens. Enter a unique name for the building block.
    
4.  In the comboboxes below, you can select between different molecules or spatial structure building blocks from which the start values are calculated.
    
5.  Click **OK** or press **Enter**.
    
6.  If the name you have entered is already in use, you may be asked for entering a new name.
    
7.  An edit window opens, containing all created parameters.

All molecule or concentrations are automatically set to their default values as defined in the selected molecules building block, and these values are used for all containers in the selected spatial structure. All molecules are set to the status IsPresent in all physical containers.

{% hint style="note" %}
Start values which are defined by a formula are displayed as "<NaN>" at this stage, which means that their values are not determined before the simulation is created.
{% endhint %}

Instead of creating molecule start values, you may load them from a previously saved simulation or a saved molecule start value building block, a pkml file.

1.  Right-click the entry **Molecule Start Values** in the Building Block Explorer.
    
2.  Select **Load Molecule Start Values Building Block** from the context menu that has appeared.
    
3.  Select the pkml file in the file explorer window.
    
Molecule start values can also be imported from Excel-files which is detailed below.

To edit a molecule start value building block, double-click on it or use the context menu in the Building Block Explorer and select **Edit**. An edit window opens, analogue to the one used when creating new start values. You can now

*   manually override the start concentrations or dimensions for every molecule in every container;

*   manually change the "IsPresent" state for each molecule;

*   use the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ExtendParameterStartValues.png) **Extend** ribbon button to automatically add new molecules in case more of them have been created or loaded in the molecules building block after initially creating the start values or executing the last **Extend** command;

*   use the combobox "Is Present" in the upper right to make global selections for the "IsPresent" state for all molecules, where you can check or uncheck it for all molecules or selected molecules, giving you a high degree of flexibility in defining the presence of molecules only in desired organs. The ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\OK.png) **Apply** button has to be pressed after a global selection. Manual changes (see second bullet) are still possible afterwards.

{% hint style="tip" %}
Restricting the presence of molecules to certain organs may improve your computing performance, but use it carefully to keep your model valid!
{% endhint %}

Restricting the presence of molecules to certain organs may improve your computing performance, but use it carefully to keep your model valid!

A complete start values building block can be saved as pkml file by

1.  Right-clicking on its entry in the Building Block Explorer.

2.  Select the command **Save As**.

3.  Select a folder and file name under which it is saved for later use.

A start values building block can also be cloned by choosing the **Clone** command from the context menu in the Building Block Explorer. The name "Clone of <\building block name>" is chosen by default, and you may be asked for a different name if it is not unique. Cloning is particularly useful if you want to create several sets of similar start values building blocks with few manual changes to test different simulation scenarios.

Every start values building block can also be renamed by choosing the **Rename** command from the context menu in the Building Block Explorer. This operation allows you to choose more descriptive names for cloned building blocks.

{% hint style="tip" %}
For our **test model**, create new molecule start values and set the concentration of molecule "A" in "Vial2" to 0. Then, set the concentration of "PGP" to 1 µmol. Uncheck the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\Unchecked.png) **IsPresent** box for the unnamed path elements which represent the top level container "BigVial".
{% endhint %}

## Parameter Start Values‌

Parameter Start Values are needed to define the values of various parameters present in the molecules and spatial structures building blocks used in a simulation. For example, this is true for the volume parameters of containers. These values are either imported when loading a simulation, or they can be created automatically and edited manually, if needed. Handling of this building block is very similar to the procedure described in the previous section for Molecules Start Values. In particular, cloning, loading from and saving to a pkml file is done in the same fashion (see previous section).

To automatically create Parameter Start Values by MoBi®:

1.  Right-click the entry **Parameter Start Values** in the Building Block Explorer.
    
2.  Select **Create Parameter Start Values Building Block** from the context menu that opens.
    
3.  A window called "Create new start values" opens. Enter a unique name for the building block.
    
4.  In the comboboxes below, you can select between different molecules or spatial structure building blocks from which the start values are calculated.
    
5.  Click **OK** or press **Enter**.
    
6.  If the name you have entered is already in use, you may be asked for entering a new name.
    
7.  An edit window opens, containing all created parameters.

All parameter start values are set to the values used in the corresponding building block.

To edit a parameter start value building block, double-click on it or use the context menu in the building block explorer and select **Edit**. An edit window opens, analogue to the one that is used for creating new start values. You can now

*   manually override the displayed values or dimensions.

*   use the ![Image](C:\Users\Jean Manzo\Desktop\assets\icons\ExtendParameterStartValues.png) **Extend** ribbon button at the top to automatically add new parameters in case more of them have been created or loaded in the selected building blocks after initially creating the start values or executing the last **Extend** command.

Again, cloning and manual parameter changes at this level allow for quickly switching among different simulation scenarios.

{% hint style="tip" %}
The example model is now ready for setting up a simulation which is described in the next chapter (see [Create a Simulation](#part-4/04-setting-up-simulation.md#create-a-simulation)).
{% endhint %}

## Import Molecule and Parameter Start Values from Excel‌

A major new feature of MoBi®™ 3.5 allows import of Molecule and Parameter Start Values from Excel files on an existing building block. This features enables easier maintenance of start values and exchange with other software tools. The import is started through the context menu of the respective building block.

Files might be of older (.xls) or newer format (.xlsx). The Excel®™ file may include several worksheets and selection of relevant worksheets is part of the import workflow. The workflow includes an import step that validates and creates a start value on each row. Once the import step is successfully completed and all rows are validated, the start values are transfered into the selected building block. This workflow prevents improperly specified or formatted data from from being partially imported.

![Importing start values for Molecules or Parameters involves an import and a transfer (validation) step](C:\Users\Jean Manzo\Desktop\pharma-dev\images\ImportStartValues.png)

It is not necessary that the target building block of the import is empty. If there is a collision of existing and imported start values (a collision is defined by matching name and path), the imported value takes precedence.

A valid Excel file for import of Molecule Start Values must have columns specified for Path, Molecule Name, Is Present, Value, Unit, Scale Divisor and columns must appear in that order.

You may update Molecule Start Values by importing a file of a valid format that contains new values only and is empty otherwise. Upon import for updating, existing Molecular Start Values matching the empty columns remain as is and only those matching the non-empty columns are updated.

|Path| Molecule Name | Is Present | Value | Unit | Scale Divisor |
|--- |---            |---         |---    |---   |---            |
|M\|W | A | 1 | 30 | µmol | |
|M\|W | B | 50 | µmol | 3.5 |

Upon import, the heading row will be ignored and can contain any values indicating the purpose of this column; however, all columns must have a heading.

{% hint style="note" %}
**Scale divisor**: Internally, very small numerical values are divided by the scale divisors to get to an order of magnitude which is reasonable for the solver. The purpose is to reduce numerical noise and to enhance computation performance. This is also important when working with a broad variety of magnitudes of values. The scale divisors specify a typical scale for each species. Per default, all scale divisors are set to 1. The scale divisors are defined in the Molecule Start Value building block for each start value. If you work with with very small amounts and/or a broad variety of magnitudes of values and your simulation yields implausible results (numerical noise, negative values etc.), use the Calculate Scale Divisor to adjust the scale divisor for computational purposes.
{% endhint %}

A valid Excel file for import of **Parameter Start Values** must have columns specified for Path, Parameter Name, Value and Unit and columns must appear in that order.

|Path | Parameter Name | Value | Unit |
|--- |--- |--- |--- |
|M\|W | B | 321 | g/mol |

## Editing of Molecule and Parameter Start Values‌

Start values can be edited which allows the user to quickly modify the list of start values. However, the user has to take care that the data entered manually makes sense within the existing building block. Refreshing a start value will allow the user to revert any modifications made to a start value, formula or dimension and use the values for start value, formula and dimension in the original builder. This is realized by finding the original builder using the container path of the start value.

![Start values that were edited or which can't be traced back to a builder are highlighted](C:\Users\Jean Manzo\Desktop\pharma-dev\images\EditStartValues.png)