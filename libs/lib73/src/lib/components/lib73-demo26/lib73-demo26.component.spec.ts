import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo26Component } from './lib73-demo26.component';

describe('Lib73Demo26Component', () => {
  let component: Lib73Demo26Component;
  let fixture: ComponentFixture<Lib73Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
