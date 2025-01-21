import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo9Component } from './lib33-demo9.component';

describe('Lib33Demo9Component', () => {
  let component: Lib33Demo9Component;
  let fixture: ComponentFixture<Lib33Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
