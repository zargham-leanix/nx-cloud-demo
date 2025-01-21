import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo41Component } from './lib41-demo41.component';

describe('Lib41Demo41Component', () => {
  let component: Lib41Demo41Component;
  let fixture: ComponentFixture<Lib41Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
