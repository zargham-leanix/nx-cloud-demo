import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo41Component } from './lib46-demo41.component';

describe('Lib46Demo41Component', () => {
  let component: Lib46Demo41Component;
  let fixture: ComponentFixture<Lib46Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
