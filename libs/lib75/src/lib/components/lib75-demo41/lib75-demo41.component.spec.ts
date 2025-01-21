import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo41Component } from './lib75-demo41.component';

describe('Lib75Demo41Component', () => {
  let component: Lib75Demo41Component;
  let fixture: ComponentFixture<Lib75Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
