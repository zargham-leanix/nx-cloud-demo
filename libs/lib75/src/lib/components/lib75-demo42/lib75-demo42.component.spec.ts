import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo42Component } from './lib75-demo42.component';

describe('Lib75Demo42Component', () => {
  let component: Lib75Demo42Component;
  let fixture: ComponentFixture<Lib75Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
