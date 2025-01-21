import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo13Component } from './lib95-demo13.component';

describe('Lib95Demo13Component', () => {
  let component: Lib95Demo13Component;
  let fixture: ComponentFixture<Lib95Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
