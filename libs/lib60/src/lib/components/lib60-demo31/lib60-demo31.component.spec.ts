import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo31Component } from './lib60-demo31.component';

describe('Lib60Demo31Component', () => {
  let component: Lib60Demo31Component;
  let fixture: ComponentFixture<Lib60Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
