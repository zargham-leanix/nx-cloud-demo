import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo21Component } from './lib43-demo21.component';

describe('Lib43Demo21Component', () => {
  let component: Lib43Demo21Component;
  let fixture: ComponentFixture<Lib43Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
