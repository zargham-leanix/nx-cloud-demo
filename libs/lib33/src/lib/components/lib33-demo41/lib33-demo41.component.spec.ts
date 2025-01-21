import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo41Component } from './lib33-demo41.component';

describe('Lib33Demo41Component', () => {
  let component: Lib33Demo41Component;
  let fixture: ComponentFixture<Lib33Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
