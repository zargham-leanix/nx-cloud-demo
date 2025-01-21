import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo42Component } from './lib93-demo42.component';

describe('Lib93Demo42Component', () => {
  let component: Lib93Demo42Component;
  let fixture: ComponentFixture<Lib93Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
