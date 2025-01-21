import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo9Component } from './lib43-demo9.component';

describe('Lib43Demo9Component', () => {
  let component: Lib43Demo9Component;
  let fixture: ComponentFixture<Lib43Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
