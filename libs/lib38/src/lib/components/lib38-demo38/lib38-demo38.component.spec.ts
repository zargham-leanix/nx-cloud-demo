import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo38Component } from './lib38-demo38.component';

describe('Lib38Demo38Component', () => {
  let component: Lib38Demo38Component;
  let fixture: ComponentFixture<Lib38Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
