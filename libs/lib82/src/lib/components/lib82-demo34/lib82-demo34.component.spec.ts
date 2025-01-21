import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo34Component } from './lib82-demo34.component';

describe('Lib82Demo34Component', () => {
  let component: Lib82Demo34Component;
  let fixture: ComponentFixture<Lib82Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
