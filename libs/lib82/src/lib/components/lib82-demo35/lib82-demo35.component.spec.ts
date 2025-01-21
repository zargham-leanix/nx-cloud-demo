import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo35Component } from './lib82-demo35.component';

describe('Lib82Demo35Component', () => {
  let component: Lib82Demo35Component;
  let fixture: ComponentFixture<Lib82Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
