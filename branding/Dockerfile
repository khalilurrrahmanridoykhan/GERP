ARG ERPNEXT_VERSION=v15.94.1
ARG BASE_IMAGE=frappe/erpnext:${ERPNEXT_VERSION}
FROM ${BASE_IMAGE}

USER root
RUN mkdir -p /home/frappe/frappe-bench/sites/assets
COPY --chown=frappe:frappe branding/frappe/hooks.py /home/frappe/frappe-bench/apps/frappe/frappe/hooks.py
COPY --chown=frappe:frappe branding/erpnext/hooks.py /home/frappe/frappe-bench/apps/erpnext/erpnext/hooks.py
COPY --chown=frappe:frappe branding/assets/gmgi-logo.svg /home/frappe/frappe-bench/sites/assets/gmgi-logo.svg
COPY --chown=frappe:frappe branding/assets/gmgierp-logo.svg /home/frappe/frappe-bench/sites/assets/gmgierp-logo.svg
COPY --chown=frappe:frappe branding/assets/gmgierp-g.svg /home/frappe/frappe-bench/sites/assets/gmgierp-g.svg
COPY --chown=frappe:frappe branding/assets/gmgierp-g.svg /home/frappe/frappe-bench/apps/erpnext/erpnext/public/images/erpnext-favicon.svg
COPY --chown=frappe:frappe branding/assets/gmgierp-g.svg /home/frappe/frappe-bench/apps/frappe/frappe/public/images/frappe-favicon.svg
COPY --chown=frappe:frappe branding/erpnext/setup/ /home/frappe/frappe-bench/apps/erpnext/erpnext/setup/
USER frappe
