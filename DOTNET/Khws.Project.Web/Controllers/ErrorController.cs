using System.Web.Mvc;

namespace Khws.Project.Web.Controllers
{
    public class ErrorController : BaseController
    {
        public ActionResult Index()
        {
            Log.Info("Error Page Rendered.");
            return View();
        }
    }
}