using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;

namespace Khws.Project.Web
{
    public class Global : HttpApplication
    {
        private static readonly log4net.ILog Log = log4net.LogManager.GetLogger(typeof(Global));

        public void Application_Start(object sender, EventArgs e)
        {
            Log.Info("Application Started.");
            // Code that runs on application startup
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            //Register log4net
            log4net.Config.XmlConfigurator.Configure();
        }
    }
}