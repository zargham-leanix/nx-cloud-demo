import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo42Component } from './lib46-demo42.component';

describe('Lib46Demo42Component', () => {
  let component: Lib46Demo42Component;
  let fixture: ComponentFixture<Lib46Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
