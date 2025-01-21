import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo42Component } from './lib44-demo42.component';

describe('Lib44Demo42Component', () => {
  let component: Lib44Demo42Component;
  let fixture: ComponentFixture<Lib44Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
