import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo9Component } from './lib91-demo9.component';

describe('Lib91Demo9Component', () => {
  let component: Lib91Demo9Component;
  let fixture: ComponentFixture<Lib91Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
