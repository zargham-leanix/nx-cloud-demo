import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo47Component } from './lib38-demo47.component';

describe('Lib38Demo47Component', () => {
  let component: Lib38Demo47Component;
  let fixture: ComponentFixture<Lib38Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
