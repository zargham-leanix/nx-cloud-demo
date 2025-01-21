import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo41Component } from './lib44-demo41.component';

describe('Lib44Demo41Component', () => {
  let component: Lib44Demo41Component;
  let fixture: ComponentFixture<Lib44Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
