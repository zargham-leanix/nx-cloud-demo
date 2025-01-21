import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo42Component } from './lib45-demo42.component';

describe('Lib45Demo42Component', () => {
  let component: Lib45Demo42Component;
  let fixture: ComponentFixture<Lib45Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
