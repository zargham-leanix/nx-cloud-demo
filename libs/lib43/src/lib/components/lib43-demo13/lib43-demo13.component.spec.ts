import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo13Component } from './lib43-demo13.component';

describe('Lib43Demo13Component', () => {
  let component: Lib43Demo13Component;
  let fixture: ComponentFixture<Lib43Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
