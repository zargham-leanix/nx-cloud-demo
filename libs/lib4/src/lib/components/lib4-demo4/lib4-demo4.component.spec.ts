import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo4Component } from './lib4-demo4.component';

describe('Lib4Demo4Component', () => {
  let component: Lib4Demo4Component;
  let fixture: ComponentFixture<Lib4Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
