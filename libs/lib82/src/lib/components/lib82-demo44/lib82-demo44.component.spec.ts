import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo44Component } from './lib82-demo44.component';

describe('Lib82Demo44Component', () => {
  let component: Lib82Demo44Component;
  let fixture: ComponentFixture<Lib82Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
