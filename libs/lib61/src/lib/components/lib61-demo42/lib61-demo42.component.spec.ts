import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo42Component } from './lib61-demo42.component';

describe('Lib61Demo42Component', () => {
  let component: Lib61Demo42Component;
  let fixture: ComponentFixture<Lib61Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
