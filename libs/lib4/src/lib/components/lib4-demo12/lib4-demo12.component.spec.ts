import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo12Component } from './lib4-demo12.component';

describe('Lib4Demo12Component', () => {
  let component: Lib4Demo12Component;
  let fixture: ComponentFixture<Lib4Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
