import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo4Component } from './lib82-demo4.component';

describe('Lib82Demo4Component', () => {
  let component: Lib82Demo4Component;
  let fixture: ComponentFixture<Lib82Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
