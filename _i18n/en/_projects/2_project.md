<div class="row justify-content-sm-center">
    <div class="img-magnifier-container col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid id= "PA process" alt="Pa" path="assets/img/myProj2/PA.jpg" scale=6.5
        title="PA process" class="img-fluid rounded magnify z-depth-1"%}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 image-container img-magnifier-container justify-content-sm-center">
        {% include figure.liquid id="EN process" alt="En" path="assets/img/myProj2/EN_process.jpg" title="EN process" scale=5.8 
        class="img-fluid rounded magnify z-depth-1" %}
    </div>
</div>
<div class="caption">
     Corresponding class diagrams to two processes in <a href="https://dap-aachen.de/en/2022-06-22-idam-en">IDAM</a> (Hover over image to magnify it
    <tr>
      <td style="vertical-align: top; text-align: center" >
        <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
      </td>
      <td class="building">)</td>
    </tr>
</div> 
<h1 style="font-size: 32px;">Motivation</h1>
The IDAM (Industrialization and Digitalization of Additive Manufacturing) research project involves 12 project partners from both industries
 and academic institutes, aiming to transform additive manufacturing (specifically metallic 3D printing) into an industrialized and highly automated series process
  in the automotive industry. The implementation of such metallic 3D printing is already taking place in some industrial companies like BMW and Automotive equipment manufacturer <a href="https://en.wikipedia.org/wiki/GKN">GKN</a> .

The IDAM management approach is intended to describe the necessary target processes according to the criteria of the two aforementioned companies. 
All detailed processes are separately presented in an Excel file (EXD) (*[Figure 1](#caption1)*) for producing a metallic 3D object. The aim of this project is a standardization and simultaneous  
optimization of all described process sequences of IDAM management, which are fixed in the EXD, through a uniformly formalized modeling language.
 
<br>
<div class="image-270dg-grid-caption-wrapper">
 <div class="row">
     <div class="col-sm mt-3 mt-md-0 img-magnifier-container" id="caption1">
         {% include figure.liquid path="assets/img/myProj2/ZN_raw_process.png" title="ZN flowchart" id= "ZN flowchart"
         class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="ZN flowchart" %}
     </div>
 </div>
 <div class="caption">
     Figure 1: Some Process flow (Hover over to magnify
     <tr>
       <td style="vertical-align: top; text-align: center" >
         <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
       </td>
       <td class="building">)</td>
     </tr>
 </div>
</div>
<br>


<h1 style="font-size: 32px;">Realization</h1>
The following section provides more detailed modeling for the problem described above. In addition, an overview of the tools used is given.

<br>
<h2 style="font-size: 24px;">Tools Used</h2>
The implementation of the project took place with the implementation support C# in the modeling language UML 2.
 Enterprise Architect 15.2 was used as a software modeling tool. Version control and automatic generation of developer documentation were
  carried out on the general GitLab of the RWTH.
<br>
<br>
<h2 style="font-size: 24px;">Design</h2>

The evaluation of the process sequences first required the responsibility of the different processes to be determined. A provisional design of the class

and activity diagrams served for a better understanding. Based on the activity diagrams, a structuring was proposed and revised+ (<a href="#caption2"><i>Figure 2</i></a>).

<br>
<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
 <div class="row">
     <div class="col-sm mt-3 mt-md-0 img-magnifier-container" id="caption2">
         {% include figure.liquid path="assets/img/myProj2/AT_activity0.png" title="Preliminary AT Activity" id= "Preliminary AT Activity"
         class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="AT activity diagram" %}
     </div>
 </div>
 <div class="caption">
     Figure 2: preliminary modeling of a process corresponding to the EXD <br> (Hover over to magnify
     <tr>
       <td style="vertical-align: top; text-align: center" >
         <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
       </td>
       <td class="building">)</td>
     </tr>
 </div>
</div>

<br>
<h2 style="font-size: 24px;">Design Patterns</h2>

The proposed modeling of the processes showed weaknesses of the models and was revised. The following explains some causes of errors and
 suggests their elimination, such as the termination of some processes without error handling or uncertainty of responsibility during 
 the verification of some activities both during autonomous transport trips and automatic load switching. In the end, a kind of mediator 
 pattern (<a href="#caption3"><i>Figure 3</i></a>)  emerged to remedy the mentioned model weakness, which after assigning the interactions between the classes 
 to the corresponding pattern in each process contributed to a considerable reduction and thus a clear readability of the activity diagrams 
 to the benefit of the customer (<a href="#caption4"><i>Figure 4</i></a>).

<br>
<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
 <div class="row">
     <div class="col-sm mt-3 mt-md-0 img-magnifier-container justify-content-sm-center">
         {% include figure.liquid path="assets/img/myProj2/workflowEngine.jpg" title="Workflow Engine" id= "Workflow Engine"
         class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="workflowEngine class diagram"%}
     </div>
 </div>
 <div class="caption" id="caption3">
     Figure 3: WorkfolwEngine serves as an mediator pattern (Hover over to magnify
     <tr>
       <td style="vertical-align: top; text-align: center" >
         <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
       </td>
       <td class="building">)</td>
     </tr>
 </div>
</div>

<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
 <div class="row">
     <div class="col-sm mt-3 mt-md-0 img-magnifier-container justify-content-sm-center">
         {% include figure.liquid path="assets/img/myProj2/AT_activity1.jpg" title="Modified AT Activity" id= "Modified AT Activity"
         class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="AT activity diagram"%}
     </div>
 </div>
 <div class="caption" id="caption4">
     Figure 4: Modification of the activity diagram shown in the <a href="#caption2">Figure 2</a><br> (Hover over to magnify
     <tr>
       <td style="vertical-align: top; text-align: center" >
         <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
       </td>
       <td class="building">)</td>
     </tr>
 </div>
</div>
<h1 style="font-size: 32px;">Result</h1>
The result of the project is a possible formalization of all process sequences to the advantage of the promoted solutions for administrative 
problems, which often appeared in the branching chain of processes.
<div><br></div>





