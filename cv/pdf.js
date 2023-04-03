function CreatePDFfromHTML() {
    var HTML_Width = $(".w3-row-padding").width();
    var HTML_Height = $(".w3-row-padding").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = HTML_Height;// (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    $(".btnpdf").hide();
    $(".nopdf").hide();

    html2canvas($(".w3-row-padding")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height-(top_left_margin*4));
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height+(top_left_margin*4));
        }
        pdf.save("CV.pdf");
        $(".btnpdf").show();
        $(".nopdf").show();
    });
}


