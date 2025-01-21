import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo12Component } from './lib82-demo12.component';

describe('Lib82Demo12Component', () => {
  let component: Lib82Demo12Component;
  let fixture: ComponentFixture<Lib82Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
