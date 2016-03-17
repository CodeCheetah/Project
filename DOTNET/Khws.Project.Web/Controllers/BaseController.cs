using System.Web.Mvc;

namespace Khws.Project.Web.Controllers
{
    public class BaseController : Controller
    {
        public static readonly log4net.ILog Log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
    }
}