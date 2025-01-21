import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo42Component } from './lib24-demo42.component';

describe('Lib24Demo42Component', () => {
  let component: Lib24Demo42Component;
  let fixture: ComponentFixture<Lib24Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
