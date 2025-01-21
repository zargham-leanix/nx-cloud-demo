import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo46Component } from './lib73-demo46.component';

describe('Lib73Demo46Component', () => {
  let component: Lib73Demo46Component;
  let fixture: ComponentFixture<Lib73Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
