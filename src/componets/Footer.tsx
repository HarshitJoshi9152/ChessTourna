import React from "react";

interface FooterProps {
	Sponsors?: Array<{
		img: HTMLImageElement;
		// HoverImg: HTMLImageElement,
		url: string;
	}>;
}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<div className="footer">
			<div className="3_flex">
				<div className="Developers_github_etc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus, tempora?
				</div>
				<div className="sponsors">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus, tempora?
				</div>
				<div className="sitemap">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus, tempora?
				</div>
			</div>
		</div>
	);
};
