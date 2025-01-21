import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo41Component } from './lib32-demo41.component';

describe('Lib32Demo41Component', () => {
  let component: Lib32Demo41Component;
  let fixture: ComponentFixture<Lib32Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
