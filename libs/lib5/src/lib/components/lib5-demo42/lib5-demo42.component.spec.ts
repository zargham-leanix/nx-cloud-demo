import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo42Component } from './lib5-demo42.component';

describe('Lib5Demo42Component', () => {
  let component: Lib5Demo42Component;
  let fixture: ComponentFixture<Lib5Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
