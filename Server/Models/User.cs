using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server
{
    public class AppUser
    {
        [Key]
        public int              user_id {get; set;}
        public string           username {get; set;}
        public string           email {get; set; }
        public string           password {get; set;}
        public bool             admin {get; set;}
        
        public AppUser()
        {
            // testing
        }
    }
}