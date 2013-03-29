<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<List<SEQWT_APP.Models.Journey>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    <script type="text/javascript" language="javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script type="text/javascript" src="../../Content/bootstrap/js/bootstrap.min.js"></script>
    <link href="../../Content/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>View All Journey Details</h2>

    <div class="container-fluid>
    <table class="table">
    <thead>
     <tr>
     <th>ProductID</th>
     <th>ProductName</th>
     <th>Category</th>
     <th>Description</th>
     </tr>
     </thead>
     <tbody>
        <% foreach (var item in Model){%>
         <tr>
         <td><%=item.ProductID %></td>
         <td><%=item.ProductName %></td>
         <td><%=item.Category %></td>
         <td><%=item.ProductDescription %></td>
         </tr>
         <%} %>
     </tbody>
    </table>
    </div>
    
     
</asp:Content>
