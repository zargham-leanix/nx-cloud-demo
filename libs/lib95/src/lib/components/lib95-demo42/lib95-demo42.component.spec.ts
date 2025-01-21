import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo42Component } from './lib95-demo42.component';

describe('Lib95Demo42Component', () => {
  let component: Lib95Demo42Component;
  let fixture: ComponentFixture<Lib95Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
