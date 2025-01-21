import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo9Component } from './lib4-demo9.component';

describe('Lib4Demo9Component', () => {
  let component: Lib4Demo9Component;
  let fixture: ComponentFixture<Lib4Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
