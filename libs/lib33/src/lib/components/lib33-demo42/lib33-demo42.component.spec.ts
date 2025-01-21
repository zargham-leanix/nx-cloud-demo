import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo42Component } from './lib33-demo42.component';

describe('Lib33Demo42Component', () => {
  let component: Lib33Demo42Component;
  let fixture: ComponentFixture<Lib33Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
