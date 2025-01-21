import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo38Component } from './lib43-demo38.component';

describe('Lib43Demo38Component', () => {
  let component: Lib43Demo38Component;
  let fixture: ComponentFixture<Lib43Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
