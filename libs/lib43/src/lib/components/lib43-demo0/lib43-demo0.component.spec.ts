import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo0Component } from './lib43-demo0.component';

describe('Lib43Demo0Component', () => {
  let component: Lib43Demo0Component;
  let fixture: ComponentFixture<Lib43Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
