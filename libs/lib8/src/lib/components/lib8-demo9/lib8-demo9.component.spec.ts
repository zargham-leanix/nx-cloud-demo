import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo9Component } from './lib8-demo9.component';

describe('Lib8Demo9Component', () => {
  let component: Lib8Demo9Component;
  let fixture: ComponentFixture<Lib8Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
