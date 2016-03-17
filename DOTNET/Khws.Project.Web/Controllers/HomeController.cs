using System.Web.Mvc;
using Khws.Project.Web.ViewModels;

namespace Khws.Project.Web.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            Log.Info("Home Page View Model Initialised.");
            var viewModel = new HomeViewModel
            {
                Dashboard = new DashboardViewModel {Title = "Partial"}
            };
            Log.Info("Home Page Rendered.");
            return View(viewModel);
        }
    }
}