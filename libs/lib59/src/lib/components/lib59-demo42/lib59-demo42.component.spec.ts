import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo42Component } from './lib59-demo42.component';

describe('Lib59Demo42Component', () => {
  let component: Lib59Demo42Component;
  let fixture: ComponentFixture<Lib59Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
