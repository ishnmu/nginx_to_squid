function invoke(r) {
  r.subrequest("/proxy", { method: r.method }, function (res) {
    r.return(res.status, res.responseBody);
  });
}

export default { invoke };
