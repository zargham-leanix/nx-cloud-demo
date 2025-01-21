import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo31Component } from './lib73-demo31.component';

describe('Lib73Demo31Component', () => {
  let component: Lib73Demo31Component;
  let fixture: ComponentFixture<Lib73Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
