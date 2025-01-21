import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo41Component } from './lib58-demo41.component';

describe('Lib58Demo41Component', () => {
  let component: Lib58Demo41Component;
  let fixture: ComponentFixture<Lib58Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
