import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo36Component } from './lib43-demo36.component';

describe('Lib43Demo36Component', () => {
  let component: Lib43Demo36Component;
  let fixture: ComponentFixture<Lib43Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
