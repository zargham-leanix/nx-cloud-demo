import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo41Component } from './lib93-demo41.component';

describe('Lib93Demo41Component', () => {
  let component: Lib93Demo41Component;
  let fixture: ComponentFixture<Lib93Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
