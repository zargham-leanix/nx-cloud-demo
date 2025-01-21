import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo41Component } from './lib84-demo41.component';

describe('Lib84Demo41Component', () => {
  let component: Lib84Demo41Component;
  let fixture: ComponentFixture<Lib84Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
