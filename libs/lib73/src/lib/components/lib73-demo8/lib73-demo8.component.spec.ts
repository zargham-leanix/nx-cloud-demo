import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo8Component } from './lib73-demo8.component';

describe('Lib73Demo8Component', () => {
  let component: Lib73Demo8Component;
  let fixture: ComponentFixture<Lib73Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
