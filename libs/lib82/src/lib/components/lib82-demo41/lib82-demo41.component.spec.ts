import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo41Component } from './lib82-demo41.component';

describe('Lib82Demo41Component', () => {
  let component: Lib82Demo41Component;
  let fixture: ComponentFixture<Lib82Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
