import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo29Component } from './lib82-demo29.component';

describe('Lib82Demo29Component', () => {
  let component: Lib82Demo29Component;
  let fixture: ComponentFixture<Lib82Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
