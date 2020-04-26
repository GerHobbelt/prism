#! /bin/bash
#
#

grep version package.json > tmpf
echo >> tmpf <<EOT


EOT


gulp changes >> tmpf
echo >> tmpf <<EOT


---

EOT
cat CHANGELOG.md >> tmpf
cat tmpf > CHANGELOG.md
rm -f tmpf

