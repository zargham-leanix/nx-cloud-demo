import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo6Component } from './lib4-demo6.component';

describe('Lib4Demo6Component', () => {
  let component: Lib4Demo6Component;
  let fixture: ComponentFixture<Lib4Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
