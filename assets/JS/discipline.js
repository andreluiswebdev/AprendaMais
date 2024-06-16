









// INICIO SIDEBAR
document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('open_btn_icon');

    sidebar.classList.toggle('open-sidebar');

    // Alterna apenas entre bi-chevron-right e bi-chevron-left
    icon.classList.toggle('bi-chevron-right');
    icon.classList.toggle('bi-chevron-left'); 
});
// FIM SIDEBAR
