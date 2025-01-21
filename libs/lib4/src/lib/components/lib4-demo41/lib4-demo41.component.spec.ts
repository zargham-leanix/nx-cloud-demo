import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo41Component } from './lib4-demo41.component';

describe('Lib4Demo41Component', () => {
  let component: Lib4Demo41Component;
  let fixture: ComponentFixture<Lib4Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
