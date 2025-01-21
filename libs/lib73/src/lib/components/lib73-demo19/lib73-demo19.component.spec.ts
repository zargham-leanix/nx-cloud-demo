import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo19Component } from './lib73-demo19.component';

describe('Lib73Demo19Component', () => {
  let component: Lib73Demo19Component;
  let fixture: ComponentFixture<Lib73Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
