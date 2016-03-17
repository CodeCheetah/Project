using System.Web.Mvc;
using Khws.Project.Web.ViewModels;

namespace Khws.Project.Web.Controllers
{
    public class FormController : BaseController
    {
        public ActionResult Index()
        {
            Log.Info("Form Page Rendered.");
            return View();
        }

        [ValidateAntiForgeryToken]
        public ActionResult Submit(FormViewModel viewModel)
        {
            Log.Info("Form Page Submitted.");
            if (ModelState.IsValid)
            {
                return RedirectToAction("ThankYou");
            }
            return View("Index", viewModel);
        }

        public ActionResult ThankYou(ThankYouViewModel viewModel)
        {
            Log.Info("Thank You Page Rendered.");
            return View();
        }
    }
}