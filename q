[1mdiff --git a/src/app/components/firebs-learning/firebs-learning.component.html b/src/app/components/firebs-learning/firebs-learning.component.html[m
[1mindex 1f21eb4..129d47e 100644[m
[1m--- a/src/app/components/firebs-learning/firebs-learning.component.html[m
[1m+++ b/src/app/components/firebs-learning/firebs-learning.component.html[m
[36m@@ -30,7 +30,7 @@[m
         Your Data Updated Successfully[m
       </div>[m
     </div>[m
[31m-    <div class="container" *ngIf="data?.length>0; else noData" style="height:18em; overflow-x: auto;">[m
[32m+[m[32m    <div class="container-fluid" *ngIf="data?.length>0; else noData" style="height:18em; overflow-x: auto;">[m
       <div class="row text-center text-monospace text-white font-weight-bold bg-info">[m
         <div class="col">Task Title</div>[m
         <div class="col">Description</div>[m
[1mdiff --git a/src/app/components/forms/forms.component.html b/src/app/components/forms/forms.component.html[m
[1mindex a98a2c1..77f7f6f 100644[m
[1m--- a/src/app/components/forms/forms.component.html[m
[1m+++ b/src/app/components/forms/forms.component.html[m
[36m@@ -1,4 +1,4 @@[m
[31m-<div class="container">[m
[32m+[m[32m<div class="container-fluid">[m
   <div class="row">[m
     <div class="col-2"></div>[m
     <div class="col-8">[m
