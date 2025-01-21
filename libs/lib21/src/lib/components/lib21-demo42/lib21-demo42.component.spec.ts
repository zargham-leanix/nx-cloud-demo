import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo42Component } from './lib21-demo42.component';

describe('Lib21Demo42Component', () => {
  let component: Lib21Demo42Component;
  let fixture: ComponentFixture<Lib21Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
