import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo14Component } from './lib82-demo14.component';

describe('Lib82Demo14Component', () => {
  let component: Lib82Demo14Component;
  let fixture: ComponentFixture<Lib82Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
