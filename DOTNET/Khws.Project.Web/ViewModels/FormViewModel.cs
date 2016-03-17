using System.ComponentModel.DataAnnotations;

namespace Khws.Project.Web.ViewModels
{
    public class FormViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
    }
}