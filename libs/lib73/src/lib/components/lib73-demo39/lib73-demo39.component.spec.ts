import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo39Component } from './lib73-demo39.component';

describe('Lib73Demo39Component', () => {
  let component: Lib73Demo39Component;
  let fixture: ComponentFixture<Lib73Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
