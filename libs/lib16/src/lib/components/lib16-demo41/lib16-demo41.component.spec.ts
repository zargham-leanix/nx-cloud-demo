import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo41Component } from './lib16-demo41.component';

describe('Lib16Demo41Component', () => {
  let component: Lib16Demo41Component;
  let fixture: ComponentFixture<Lib16Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
