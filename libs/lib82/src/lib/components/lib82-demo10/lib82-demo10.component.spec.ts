import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo10Component } from './lib82-demo10.component';

describe('Lib82Demo10Component', () => {
  let component: Lib82Demo10Component;
  let fixture: ComponentFixture<Lib82Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
