import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo42Component } from './lib41-demo42.component';

describe('Lib41Demo42Component', () => {
  let component: Lib41Demo42Component;
  let fixture: ComponentFixture<Lib41Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
