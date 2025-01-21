import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo2Component } from './lib95-demo2.component';

describe('Lib95Demo2Component', () => {
  let component: Lib95Demo2Component;
  let fixture: ComponentFixture<Lib95Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
