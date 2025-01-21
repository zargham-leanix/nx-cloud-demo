import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo3Component } from './lib95-demo3.component';

describe('Lib95Demo3Component', () => {
  let component: Lib95Demo3Component;
  let fixture: ComponentFixture<Lib95Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
