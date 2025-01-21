import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo34Component } from './lib73-demo34.component';

describe('Lib73Demo34Component', () => {
  let component: Lib73Demo34Component;
  let fixture: ComponentFixture<Lib73Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
