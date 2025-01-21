import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo14Component } from './lib95-demo14.component';

describe('Lib95Demo14Component', () => {
  let component: Lib95Demo14Component;
  let fixture: ComponentFixture<Lib95Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
