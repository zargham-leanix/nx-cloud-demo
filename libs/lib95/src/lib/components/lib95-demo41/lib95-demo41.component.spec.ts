import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo41Component } from './lib95-demo41.component';

describe('Lib95Demo41Component', () => {
  let component: Lib95Demo41Component;
  let fixture: ComponentFixture<Lib95Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
